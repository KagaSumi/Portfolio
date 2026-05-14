# Portfolio Monorepo

Monorepo containing the frontend, backend, and infrastructure for the Portfolio platform.

The project focuses on full-stack development, backend systems, cloud infrastructure, and developer tooling.

---

## Repository Structure

```text
apps/
  web/        → React + Vite frontend
  api/        → Go backend API

docker/
  nginx/
  postgres/

docs/
  architecture/
  diagrams/

scripts/
  dev/
  deploy/

docker-compose.yml
README.md
```

---

## Applications

### Web Frontend

Location:

```text
apps/web
```

Tech stack:

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

Responsibilities:

- portfolio UI
- project showcase
- contact form
- frontend animations
- responsive layout

---

### API Backend

Location:

```text
apps/api
```

Tech stack:

- Go
- Chi
- PostgreSQL
- pgxpool

Responsibilities:

- project API
- contact persistence
- backend services
- infrastructure integrations

---

## Monorepo Goals

This repository is designed to demonstrate:

- full-stack architecture
- backend service design
- infrastructure management
- containerized development
- scalable project organization

---

## Development Philosophy

The monorepo uses:
- shared tooling
- centralized infrastructure
- isolated applications
- independent deployment capability

This enables:
- easier local development
- consistent environments
- cleaner dependency management
- scalable project growth

---

## Docker Setup

The repository supports containerized development.

Example services:

```yaml
services:
  web:
    build: ./apps/web

  api:
    build: ./apps/api

  db:
    image: postgres:16
```

---

## Running the Project

### Start infrastructure

```bash
docker compose up -d
```

### Run frontend

```bash
cd apps/web
pnpm dev
```

### Run backend

```bash
cd apps/api
go run cmd/server/main.go
```

---

## Planned Features

### Frontend

- Project filtering
- Blog/thoughts section
- Interactive dashboards
- WebSocket integrations

### Backend

- PostgreSQL persistence
- Authentication
- Metrics APIs
- Admin tooling

### Infrastructure

- Terraform provisioning
- Kubernetes deployment
- GitHub Actions CI/CD
- Monitoring stack
- Reverse proxy + SSL

---

## Technologies Used

### Frontend

- React
- TypeScript
- Tailwind CSS
- Vitest

### Backend

- Go
- Chi
- PostgreSQL

### Infrastructure

- Docker
- Docker Compose
- Linux
- Cloudflare Tunnels

---

## Purpose

This repository serves as:
- a production-style learning environment
- a portfolio platform
- an infrastructure sandbox
- a backend systems project
