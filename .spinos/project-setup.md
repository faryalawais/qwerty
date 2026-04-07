## Summary
A full-stack SSR web application named "qwerty" built with NestJS (backend) and React (frontend) using server-side rendering, TypeScript in strict mode, Vitest for unit tests, Playwright for E2E, Storybook for component docs, Prisma ORM, Supabase for auth/data, and AWS Lambda deployment via OIDC. GitHub Actions enforce lint, typecheck, unit tests, and build on PRs and main.

## Proposed files (brief)
- Root README, package.json, tsconfig, .gitignore
- NestJS backend in apps/api with Prisma schema, Dockerfile, serverless.yml
- React frontend in apps/web with Next.js, pages router, Storybook
- Shared ESLint, Prettier, Vitest, Playwright configs
- GitHub Actions workflows for CI/CD, OIDC-based AWS deploy
- Prisma seed script, Supabase client, env templates

## Commands
```bash
npm install
npm run dev        # start dev servers (api + web)
npm run build      # build both apps
npm run test       # unit tests (Vitest)
npm run test:e2e   # Playwright E2E
npm run storybook  # component docs
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

## CI / automation (optional)
GitHub Actions workflows:
- `.github/workflows/ci.yml` – lint, typecheck, unit, build on PR/push
- `.github/workflows/deploy.yml` – build & deploy to AWS Lambda (OIDC)

## Follow-ups
- Configure Supabase project and add keys to GitHub secrets
- Set up AWS OIDC provider and IAM role for GitHub Actions
- Add domain and SSL for production deploy
- Add Sentry or CloudWatch for observability
- Write ADRs for major decisions