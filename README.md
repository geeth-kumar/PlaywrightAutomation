
# Playwright Automation Framework

## Overview
A UI automation testing framework built using Playwright and TypeScript. This project demonstrates Page Object Model (POM), data-driven testing, assertions, and automated test reporting.

## Tech Stack
- Playwright
- TypeScript
- Node.js and npm
- HTML test reports
- Git and GitHub

## Project Structure
```text
PlaywrightAutomation/
├── pages/
│   └── LoginPage.ts
├── test-data/
│   └── loginData.ts
├── test-pages/
│   └── login.html
├── tests/
│   ├── final-login.spec.ts
│   └── data-driven-login.spec.ts
├── playwright.config.ts
├── package.json
└── README.md
```

## Test Scenarios
- Successful login
- Invalid username and password
- Empty login fields
- Reusable Page Object Model
- Data-driven test execution

## Setup
Install dependencies:

```bash
npm install
npx playwright install
```

## Run Tests
Run the main login tests:

```bash
npx playwright test tests/final-login.spec.ts tests/data-driven-login.spec.ts --project=chromium
```

Run tests in all configured browsers:

```bash
npx playwright test
```

Open the HTML report:

```bash
npx playwright show-report
```

## Reporting
The Playwright configuration supports HTML reports, screenshots on failure, video retention on failure, and trace collection on retry.
