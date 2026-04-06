# Experiment 7 - Spring Boot RBAC

This Spring Boot project demonstrates:
- User authentication with Spring Security
- Role-based authorization for `USER` and `ADMIN`
- Protected endpoints with proper `401 Unauthorized` and `403 Forbidden` responses
- H2 in-memory database seeded with demo users

## Project Structure

- `src/main/java/com/example/experiment7`
  - `config/SecurityConfig.java`
  - `controller/AuthController.java`
  - `controller/PublicController.java`
  - `controller/UserController.java`
  - `controller/AdminController.java`
  - `dto/LoginRequest.java`
  - `dto/LoginResponse.java`
  - `entity/User.java`
  - `entity/Role.java`
  - `repository/UserRepository.java`
  - `service/CustomUserDetailsService.java`
- `src/main/resources/application.properties`
- `src/main/resources/data.sql`
- `screenshots/`

## Demo Users

| Username | Password | Role |
|----------|----------|------|
| user1    | user123  | ROLE_USER |
| admin1   | admin123 | ROLE_ADMIN |

## Run Locally

1. Open a terminal in `experiment7`
2. Run `mvn spring-boot:run`
3. Application starts on `http://localhost:8080`

## Endpoints

- `GET /api/public/hello` — public endpoint
- `POST /api/auth/login` — authentication request
- `GET /api/user/profile` — accessible to `USER` and `ADMIN`
- `GET /api/admin/dashboard` — accessible to `ADMIN` only

## Postman Test Cases

1. Public endpoint without auth:
   - `GET http://localhost:8080/api/public/hello`
   - Expected: `200 OK`

2. Login request:
   - `POST http://localhost:8080/api/auth/login`
   - Body JSON: `{ "username": "user1", "password": "user123" }`
   - Expected: `200 OK`

3. User endpoint with USER credentials:
   - `GET http://localhost:8080/api/user/profile`
   - Auth: Basic Auth `user1:user123`
   - Expected: `200 OK`

4. Admin endpoint with USER credentials:
   - `GET http://localhost:8080/api/admin/dashboard`
   - Auth: Basic Auth `user1:user123`
   - Expected: `403 Forbidden`

5. Admin endpoint with ADMIN credentials:
   - `GET http://localhost:8080/api/admin/dashboard`
   - Auth: Basic Auth `admin1:admin123`
   - Expected: `200 OK`

6. Access user endpoint without auth:
   - Expected: `401 Unauthorized`

## H2 Console

Open `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:experiment7db`
- User Name: `sa`
- Password: *(blank)*

## Screenshots

Place required screenshots in `screenshots/`:
- `01-login-success.png`
- `02-user-endpoint-success.png`
- `03-admin-endpoint-success.png`
- `04-access-denied.png`

> Add actual images after running Postman tests.
