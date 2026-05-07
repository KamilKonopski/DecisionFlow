# DecisionFlow

DecisionFlow is a web application for managing technical team decisions in a structured and transparent way.

The project focuses on reducing decision chaos in software projects by providing a centralized place to:
- create and discuss decisions,
- compare multiple options,
- organize PRO / CONTRA arguments,
- vote on solutions,
- and track the full decision history.

The goal is to make engineering decisions easier to understand, review, and revisit over time.

---

# Project Status

This project is currently in an early development phase.

Core architecture and domain modeling are the primary focus at the moment.

---

# Main Features

## Decision Management
- Create decisions with title and description
- Assign decisions to projects
- Set deadlines
- Track decision status

## Decision Lifecycle
DecisionFlow uses a backend-controlled state machine for decision statuses:

- `PROPOSED`
- `DISCUSSING`
- `VOTING`
- `APPROVED`
- `REJECTED`
- `SUPERSEDED`

The backend validates all state transitions to ensure consistent business logic.

## Decision Options
- Add multiple solution options
- Edit/remove options before voting starts
- Compare alternatives in one place

Example:
- Monolith
- Microservices
- Modular Monolith

## PRO / CONTRA Argument System
Instead of classic comments, discussions are structured as:
- `PRO` arguments
- `CONTRA` arguments

Features:
- Upvote/downvote arguments
- Mark important arguments
- Sort by popularity

This is one of the core features of the project.

## Voting System
- One user = one vote
- Vote changes allowed before deadline
- Multiple voting strategies:
  - Majority vote
  - Weighted vote

## Results & Analytics
Automatic summaries:
- total votes,
- percentages,
- winning option,
- activity overview.

## Audit Log / History
Track all important events:
- decision creation,
- status changes,
- vote updates,
- timeline of actions.

## Decision Relationships
Decisions can:
- depend on other decisions,
- replace previous decisions (`SUPERSEDED`).

## Dashboard
- Decision overview
- Filtering by project/status
- Quick activity preview

## (Optional) Realtime Features
- Live vote updates
- Live discussion updates via WebSocket

---

# Tech Stack

## Frontend
- React
- TypeScript
- TanStack Query
- Zustand
- Tailwind CSS

## Backend
- Java
- Spring Boot
- Spring Security (JWT Authentication)
- WebSocket (optional)

## Database
- PostgreSQL

## DevOps / Infrastructure
- Docker
- Vercel / Render

---

# Technical Focus

This project is designed to showcase more than simple CRUD operations.

Main engineering topics:
- Domain-driven thinking
- State machine implementation
- Business rule validation
- Transaction handling during voting
- Unique vote constraints
- DTO vs Entity separation
- Clean architecture
- Pagination & filtering
- Audit logging

Architecture example:

```text
Controller → Service → Domain → Repository
```

---

# Example Use Cases

- Architecture decision records (ADR)
- Team technical voting
- Product/engineering discussions
- RFC-style decision processes
- Internal engineering governance

---

# Planned Repository Content

- Backend API
- Frontend application
- Architecture diagrams
- Example API endpoints
- UI screenshots
- CI/CD configuration

---

# Project Goals

DecisionFlow is intended to demonstrate:
- software engineering skills,
- backend architecture design,
- domain modeling,
- business-oriented application design,
- scalable decision workflows.

---

# 📄 License

This project is currently developed for learning and portfolio purposes.
