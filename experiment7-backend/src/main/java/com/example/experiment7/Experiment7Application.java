package com.example.experiment7;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.experiment7.entity.User;
import com.example.experiment7.repository.UserRepository;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class Experiment7Application {

    public static void main(String[] args) {
        SpringApplication.run(Experiment7Application.class, args);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // seed demo users into H2
    @Bean
    public CommandLineRunner seedUsers(UserRepository userRepository, PasswordEncoder encoder) {
        return args -> {
            if (userRepository.findByUsername("user1").isEmpty()) {
                userRepository.save(new User("user1", encoder.encode("user123"), "ROLE_USER"));
            }
            if (userRepository.findByUsername("admin1").isEmpty()) {
                userRepository.save(new User("admin1", encoder.encode("admin123"), "ROLE_ADMIN"));
            }
        };
    }
}
