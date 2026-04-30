package com.decisionflow.service.auth;

import com.decisionflow.domain.auth.User;
import com.decisionflow.dto.auth.AuthRequest;
import com.decisionflow.dto.auth.AuthResponse;
import com.decisionflow.repository.auth.UserRepository;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class AuthServiceTest {
    @Mock
    private UserRepository repository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private JwtService jwtService;

    @InjectMocks
    private AuthService authService;

    @Test
    void shouldLoginSuccessfully() {
        AuthRequest request = new AuthRequest();
        request.setEmail("test@test.com");
        request.setPassword("Password123$");

        User user = User.builder()
                    .email("test@test.com")
                    .password("encoded")
                    .build();

        when(repository.findByEmail("test@test.com")).thenReturn(Optional.of(user));

        when(passwordEncoder.matches("Password123$", "encoded")).thenReturn(true);

        when(jwtService.generateToken("test@test.com")).thenReturn("token123");

        AuthResponse response = authService.login(request);

        assertEquals("token123", response.getToken());
    }

    @Test
    void shouldThrowWhenUserNotFound() {
        AuthRequest request = new AuthRequest();
        request.setEmail("test@test.com");
        request.setPassword("Password123$");

        when(repository.findByEmail("test@test.com")).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> authService.login(request));
    }

    @Test
    void shouldThrowWhenPasswordIsWrong() {
        AuthRequest request = new AuthRequest();
        request.setEmail("test@test.com");
        request.setPassword("wrong");

        User user = User.builder()
                    .email("test@test.com")
                    .password("encoded")
                    .build();

        when(repository.findByEmail("test@test.com")).thenReturn(Optional.of(user));

        when(passwordEncoder.matches("wrong", "encoded")).thenReturn(false);

        assertThrows(RuntimeException.class, () -> authService.login(request));
    }
}
