# Kellyfelder Test Project

Playwright + TypeScript tests.

- `tests/sandbox`: full journey (sign-up, login, dashboard, cart, checkout, order placed) on a practice shop.
- `tests/kellyfelder`: safe, read-only checks on the kellyfelder store (no payment).

## Install

1. Install Node.js (LTS)
2. `npm install`
3. `npx playwright install`
4. Copy `.env.example` to `.env`

## Run

- Sandbox journey: `npm run test:sandbox`
- Kellyfelder store: `npm run test:kf`
- Report: `npm run report`
- Save your own kellyfelder login (once): `npm run auth:kf`

## CI (GitHub Actions)

CI runs only the signup and add-to-cart tests. The practice site's Cloudflare bot check
blocks GitHub's servers from opening `/auth/login`, so the login, dashboard, checkout and
order tests run locally with `npm run test:sandbox`.