# Portfolio API (Go Backend)

Backend API for the portfolio platform built with Go, Chi, and PostgreSQL.

The API powers project data, contact submissions, and future infrastructure-focused features for the portfolio ecosystem.

---

## Tech Stack

- Go 1.25+
- Chi Router
- PostgreSQL
- pgx / pgxpool
- Docker
- Docker Compose

---

## Features

- REST API architecture
- Layered backend structure
- Repository + Service pattern
- PostgreSQL persistence
- Memory fallback repositories for development
- JSON API endpoints
- Dockerized development environment

---

## Project Structure

```text
cmd/
  server/
    main.go

internal/
  handler/
    contact.go
    project.go

  model/
    contact.go
    project.go

  repository/
    contact.go
    postgres_contact.go
    memory.go

  service/
    contact_service.go
    project_service.go

  db/
    init.sql

Dockerfile
go.mod
```

---

## Architecture

The backend follows a layered architecture:

```text
HTTP Request
    ↓
Handler Layer
    ↓
Service Layer
    ↓
Repository Layer
    ↓
Database
```

### Handler Layer

Responsible for:
- HTTP routing
- JSON decoding/encoding
- status codes
- request validation

### Service Layer

Responsible for:
- business logic
- orchestration
- repository abstraction

### Repository Layer

Responsible for:
- database access
- SQL queries
- persistence abstraction

---

## Endpoints

### Health

```http
GET /health
```

Response:

```json
{
  "status": "ok"
}
```

---

### Projects

```http
GET /projects
```

Returns portfolio project data.

---

### Contact

```http
POST /contact
```

Request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello"
}
```

---

## Database

PostgreSQL is used for persistent storage.

Example schema:

```sql
CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Environment Variables

Local development:

```env
DATABASE_URL=postgres://postgres:postgres@localhost:5432/portfolio?sslmode=disable
```

Docker environment:

```env
DATABASE_URL=postgres://postgres:postgres@db:5432/portfolio?sslmode=disable
```

---

## Running Locally

### Install dependencies

```bash
go mod tidy
```

### Run PostgreSQL

```bash
docker compose up -d
```

### Run API

```bash
go run cmd/server/main.go
```

---

## Testing API

Example request:

```bash
curl -X POST http://localhost:8080/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Hello backend"
  }'
```

---

## Future Improvements

- Authentication
- Admin dashboard
- Project CRUD endpoints
- Rate limiting
- Email integration
- Structured logging
- Metrics + monitoring
- Redis caching
- Kubernetes deployment
- CI/CD pipelines
