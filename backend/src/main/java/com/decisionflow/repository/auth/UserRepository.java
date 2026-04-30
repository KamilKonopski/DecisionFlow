package com.decisionflow.repository.auth;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.decisionflow.domain.auth.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
