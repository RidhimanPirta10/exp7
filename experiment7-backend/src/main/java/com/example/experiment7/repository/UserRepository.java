package com.example.experiment7.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.experiment7.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
