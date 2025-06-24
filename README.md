# SAP Fioneer — Test Automation Assignment

This project contains automated UI tests for SAP Fioneer’s public website, implemented using **Playwright** with **TypeScript**.

## ✅ Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript
- ESLint + Prettier
- GitHub Actions (CI)

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/michalsiedlecki/SAP.git
cd SAP
```
### 2. Install dependencies

```bash
npm ci
```
### 3. Install Playwright browsers
```bash
npx playwright install --with-deps
```

## 🚀 Running the Tests
### 1. To run all tests locally:
```bash
npx playwright test
```
### 2. To open the local HTML test report:
```bash
npx playwright show-report
```
### 3. ☁️ Run via GitHub Actions:
You can also run tests remotely via CI:
1. Go to the [Actions tab in this repository](https://github.com/michalsiedlecki/SAP/actions)
2. Select the latest workflow run — or trigger a manual run if supported
3. Once the tests complete, download the attached **test report artifact**, which may include:
   - HTML report
   - Screenshots
   - Video recordings (for failed tests)

## 🧰 Linting
### 1. Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

The project follows the Page Object Model and is structured as follows:

```
├── tests/                 # Test scenarios (spec files)
├── pages/                 # Page Object classes
├── types/                 # Shared TypeScript types (e.g. page metadata)
├── utils/                 # Helper functions and shared logic
├── .github/workflows/     # GitHub Actions CI configuration
├── playwright.config.ts   # Playwright configuration
├── package.json           # Project metadata and scripts
├── tsconfig.json          # TypeScript configuration
├── .eslintrc / .prettierrc# Code style configuration
```

## ✍️ Author

**Michał Siedlecki**  
GitHub: [@michalsiedlecki](https://github.com/michalsiedlecki)  
