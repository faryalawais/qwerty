# qwerty

Full-stack SSR web application built with NestJS and React.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000 (web) and http://localhost:3333 (api).

## Scripts

- `npm run dev` – start dev servers
- `npm run build` – build for production
- `npm run test` – unit tests (Vitest)
- `npm run test:e2e` – E2E tests (Playwright)
- `npm run storybook` – component docs
- `npm run lint` – ESLint
- `npm run typecheck` – TypeScript check

## Structure

```
apps/
api/     # NestJS backend
web/     # Next.js React frontend
```

## Deploy

GitHub Actions deploys to AWS Lambda on push to main (OIDC).