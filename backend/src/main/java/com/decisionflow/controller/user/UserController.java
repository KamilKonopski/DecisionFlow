package com.decisionflow.controller.user;

import org.springframework.web.bind.annotation.RestController;

import com.decisionflow.domain.auth.User;
import com.decisionflow.dto.user.UserDto;
import com.decisionflow.repository.auth.UserRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.security.core.Authentication;

@RestController
@RequestMapping("api/auth")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @GetMapping("/me")
    public UserDto me(Authentication authentication) {

        String email = authentication.getName();

        User user = userRepository.findByEmail(email)
            .orElseThrow();

        return new UserDto(
            user.getId(),
            user.getFullName()
        );
    }
}
