package com.example.experiment7.controller;

import com.example.experiment7.dto.LoginRequest;
import com.example.experiment7.dto.LoginResponse;
import com.example.experiment7.entity.User;
import com.example.experiment7.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;

    public AuthController(AuthenticationManager authenticationManager, UserRepository userRepository) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
            );

            User user = userRepository.findByUsername(loginRequest.getUsername())
                    .orElseThrow(() -> new IllegalStateException("User not found"));

            return ResponseEntity.ok(new LoginResponse(
                    user.getUsername(),
                    user.getRole().name(),
                    "Login successful"
            ));
        } catch (AuthenticationException ex) {
            return ResponseEntity.status(401).body(new LoginResponse(null, null, "Invalid username or password"));
        }
    }
}
