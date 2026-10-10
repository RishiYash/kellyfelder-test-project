# Handover

## Purpose
Practice automation project covering an online-shop journey.

## What is covered
- Automated: sign-up, login, dashboard, add to cart, checkout, order placed (practice shop).
- Automated, read-only: kellyfelder home, login page, add to cart, checkout page opens.
- Manual only: kellyfelder sign-up and login (email one-time code), kellyfelder payment and order.

## How to run
See README.md. CI runs the sandbox suite on every push.

## Settings and secrets
- `.env` holds site addresses only (copy from `.env.example`).
- `.auth/kellyfelder.json` holds a personal login session. It is gitignored. Never commit it.
- No passwords or email accounts are stored in this repo.

## Known limitations
- Tests depend on third-party sites; their pages can change.
- Locators need re-checking with codegen if a test breaks.
- No real orders or payments are placed on kellyfelder.

## Next steps
Add tags (smoke/regression), negative tests (wrong password), accessibility checks.

## Owner
RishiYash (https://github.com/RishiYash/)