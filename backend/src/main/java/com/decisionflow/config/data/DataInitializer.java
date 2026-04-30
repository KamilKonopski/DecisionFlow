package com.decisionflow.config.data;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.decisionflow.domain.auth.User;
import com.decisionflow.repository.auth.UserRepository;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Bean
    CommandLineRunner initUsers() {
        return args -> {
            if (userRepository.count() == 0) {

                User user1 = User.builder()
                        .fullName("Alex Kovac")
                        .email("alex-kovac@company.com")
                        .password(passwordEncoder.encode("Alexkovac123$"))
                        .build();

                User user2 = User.builder()
                        .fullName("Barbara Stranger")
                        .email("barbara-stranger@company.com")
                        .password(passwordEncoder.encode("Barbarastranger123$"))
                        .build();

                userRepository.save(user1);
                userRepository.save(user2);
            }
        };
    }
}