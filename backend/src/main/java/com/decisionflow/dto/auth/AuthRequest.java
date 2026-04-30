package com.decisionflow.dto.auth;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class AuthRequest {

    @Email
    @NotBlank
    private String email;

    @Size(min = 8)
    private String password;    
}
