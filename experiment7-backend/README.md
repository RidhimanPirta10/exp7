# Experiment 7 — RBAC with Spring Boot

This project demonstrates role-based authorization (RBAC) using Spring Boot, Spring Security and H2.

Demo users (seeded on startup):

- user1 / user123 → ROLE_USER
- admin1 / admin123 → ROLE_ADMIN

Endpoints:

- GET /api/public/hello → public
- GET /api/user/profile → requires ROLE_USER or ROLE_ADMIN
- GET /api/admin/dashboard → requires ROLE_ADMIN

Run locally:

1. cd `experiment7-backend`
2. mvn spring-boot:run
3. Use Postman (HTTP Basic) to test the endpoints above.

Postman tests to collect screenshots (required):

1. Login request with valid credentials (use Basic Auth)
2. Successful response after login/accessing secured endpoint
3. USER accessing user endpoint successfully
4. USER denied access to admin endpoint (403) / ADMIN success

Notes on deployment:
- This repository contains the backend project. I can help deploy to a hosting provider (Railway, Render, Heroku) if you tell me which one and provide required deploy settings or allow me to set up using repository secrets.
