# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Project Folder Structure

This document explains the folder structure of this React project, detailing the purpose of each folder and the types of files they should contain. Use this as a guide to maintain consistency and clarity throughout the codebase.

## Folder Structure

```
└── src/
    ├── assets/
    ├── api/
    ├── configs/
    ├── components/
    ├── hooks/
    ├── lib/
    ├── services/
    ├── stores/
    └── utils/
```

### 1. `assets/`
**Purpose:** Contains static assets like images, fonts, and other media files used in the project.

**General Example:**
- If your project has a company logo displayed across multiple pages, it can be stored here (e.g., `logo.png`).

**Example Files:**
- `logo.png`
- `background.jpg`
- `customFont.woff`

---

### 2. `api/`
**Purpose:** Centralized folder for API interactions. Defines functions for making HTTP requests to backend endpoints.

**General Example:**
- A function to fetch a list of employees from the backend API can be placed here (e.g., `getEmployees()`).

**Example Files:**
- `authApi.ts` - Functions for authentication (e.g., login, register).
- `employeeApi.ts` - Functions for managing employee data (e.g., fetch, update, delete).
- `index.ts` - Centralized export for all API modules.

---

### 3. `configs/`
**Purpose:** Stores configuration files such as environment-specific settings, constants, or third-party library configurations.

**General Example:**
- Configuring Axios for API requests with base URLs and headers can be done here (e.g., `axiosConfig.ts`).

**Example Files:**
- `axiosConfig.ts` - Axios instance with default settings.
- `env.ts` - Environment variables and keys.
- `themeConfig.ts` - Configuration for application themes.

---

### 4. `components/`
**Purpose:** Contains reusable UI components. These components should be presentational and focus on rendering the UI based on the data passed via props.

**General Example:**
- A `Button` component that is used in multiple places across the app should be placed here (e.g., `Button.tsx`).

**Example Files:**
- `SignUpForm.tsx` - Component for user registration.
- `Employees.tsx` - Displays a list of employees.
- `PaymentForm.tsx` - Handles payment input and submission.
- `Button.tsx` - A reusable button component.

---

### 5. `hooks/`
**Purpose:** Contains custom React hooks for encapsulating reusable logic.

**General Example:**
- A custom hook for managing user authentication logic can be added here (e.g., `useAuth.tsx`).

**Example Files:**
- `usePayment.ts` - Custom hook for managing payment-related logic.
- `useUpdateEmployee.ts` - Hook for updating employee data.
- `useEmployees.ts` - Hook for fetching and managing employee data.
- `useAuth.tsx` - Hook for authentication logic.

---

### 6. `lib/`
**Purpose:** Contains reusable libraries, utilities, or helpers that are more domain-specific and not tied to the UI. Often includes code shared across multiple features.

**General Example:**
- A utility function for formatting dates to be displayed in the UI can be stored here (e.g., `dateFormatter.ts`).

**Example Files:**
- `dateFormatter.ts` - Formats dates in various styles.
- `validation.ts` - Input validation utilities.

---

### 7. `services/`
**Purpose:** Contains higher-level business logic or workflows that use APIs and handle more complex operations (e.g., data aggregation or transformation).

**General Example:**
- A service that fetches employee data and processes it to calculate salaries before returning it to the component (e.g., `employeeService.ts`).

**Example Files:**
- `employeeService.ts` - Fetches and processes employee data from APIs.
- `paymentService.ts` - Combines payment APIs and applies business rules.

---

### 8. `stores/`
**Purpose:** Manages the application's global state using tools like Context API, Redux, or Zustand.

**General Example:**
- A Redux store managing the logged-in user's state, such as their token and role, should be placed here (e.g., `authStore.ts`).

**Example Files:**
- `authStore.ts` - State management for authentication (e.g., current user, token).
- `employeeStore.ts` - State for managing employee-related data.

---

### 9. `utils/`
**Purpose:** Contains general-purpose utility functions that are not tied to specific features or modules. These functions should be pure and reusable throughout the project.

**General Example:**
- A function to debounce input changes in a search bar can be added here (e.g., `debounce.ts`).

**Example Files:**
- `debounce.ts` - Debouncing utility for optimizing repetitive actions.
- `logger.ts` - Utility for logging errors or information.
- `apiHelpers.ts` - Helper functions for API calls, such as error handling.

---

## Summary
By following this folder structure, you can:
- Keep the codebase modular and maintainable.
- Separate concerns effectively, making the application easier to scale.
- Improve collaboration by providing clear guidelines for where to place new files or features.

Feel free to extend or modify this structure as the project evolves, but ensure that changes are well-documented to maintain consistency.
