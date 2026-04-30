package com.decisionflow.service.auth;

import com.decisionflow.repository.auth.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return repository.findByEmail(email).map(user -> User.builder()
                                                        .username(user.getEmail())
                                                        .password(user.getPassword())
                                                        .roles("USER").build()
                                                    )
                                                    .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

}
