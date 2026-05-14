# Portfolio (Frontend)

This is the frontend for a personal portfolio website built with React, Vite, and Tailwind CSS.

It showcases full-stack development work with a focus on backend systems, infrastructure, and automation.

---

## Tech Stack

- React (TypeScript)
- Vite
- Tailwind CSS
- Framer Motion (animations)
- Vitest + React Testing Library (testing)

---

## Features

- Single-page portfolio layout
- Section-based structure (Hero, About, Projects, Systems, Experience, Education, Contact)
- Responsive design
- Animated Hero section using Framer Motion
- Reusable styling system using Tailwind-based primitives
- Component-driven architecture

---

## Project Structure
```text
src/
  components/
    Hero.tsx
    About.tsx
    Projects.tsx
    Systems.tsx
    Experience.tsx
    Education.tsx
    Contact.tsx
    Navbar.tsx
    Footer.tsx

  api/
    contact.ts
    project.ts

  pages/
    Home.tsx

  styles/
    layout.ts
    ui.ts
    motion.ts

  data/
    projects.ts

  App.tsx
  main.tsx
```
---

## Sections

### Hero
Intro section with name, role, and navigation links.

### About
Summary of skills across infrastructure, backend development, and tooling.

### Projects
List of software projects with descriptions, tech stack, and links.

### Systems & Infrastructure
Highlights homelab, CI/CD pipelines, and cloud infrastructure work.

### Experience
Professional experience with impact-focused descriptions.

### Education
Academic background and degrees.

### Contact
Links for email, GitHub, and LinkedIn.

---

## Styling Approach

This project uses a lightweight Tailwind-based design system:

- `container` → consistent page width and alignment
- `section` → consistent vertical spacing between sections
- `card` → reusable UI blocks
- Shared typography classes for consistent hierarchy

The goal is consistency and maintainability without over-engineering a full UI framework.

---

## Development

### Install dependencies

```bash
pnpm install
```

### Run development Server

```bash
pnpm dev
```

### Run test
```bash
pnpm test
```

### Build for production
```bash
pnpm build
```

## Testing

Tests are written using Vitest and React Testing Library.

Current coverage:

- Component rendering
- Basic UI structure validation
- Section presence checks

## Notes
This frontend is designed to be extended over time with:
- Improved animations
- Project filtering
- Better accessibility
- Potential backend integration
- Optional CMS-driven content
