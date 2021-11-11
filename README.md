# Boilerplate

This is a boilerplate to quickly start building fullstack apps using Nextjs with Prisma as ORM. It also has Jest setup for unit tests and Cypress for E2E

## Get started

- Run `yarn`
- Create an `.env` file in the root for prisma with the
- Generate DB migrations using `npx prisma generate`
- Migrate DB using `npx prisma migrate-dev`
- Seed DB using `npx prisma db seed --preview-feature`

## Testing

### Run unit test

All components should have a `__tests__` folder where all `*.test.tsx` lives for the component

- Run `yarn test` to run all tests
- Run `yarn test Button` to run tests that have Button as part of their name

### Run E2E test

All components should have a `__tests__` folder where all `*.test.tsx` lives for the component

- Run `yarn test-e2e-local` to run all specs with cypress open
- Run `yarn test-e2e` to run e2e tests silently and show logs in console

## Docker

You can run project in a docker container mapped to your local dev folder by running `docker-compose up`
