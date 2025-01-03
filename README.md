Here’s the full file formatted properly for a README.md template:

```markdown
# Posts Application

This repository contains a user-protected application built with TypeScript for managing posts and comments. Users must register and log in to create posts and comments. The API endpoints are documented in the `requests.rest` file and accessible via Swagger at [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

---

## Prerequisites

Ensure the following requirements are met before running the application:

- A locally running MongoDB server.
- [Node.js](https://nodejs.org/) (v23.1.0 or higher).
- [npm](https://www.npmjs.com/) (Node Package Manager).
- [npx](https://www.npmjs.com/package/npx).
- Secret environment files:
  - `.env.tst` for testing.
  - `.env.dev` for running the server.

---

## Getting Started

Follow these steps to set up and run the application:

### Install Dependencies

Install all required dependencies by running the following command:
```bash
npm install
```

### Run Tests

Execute the provided test scripts to ensure the application is functioning as expected:

```bash
npm run test          # Runs all tests with coverage report
npm run testAuth      # Tests authentication APIs (/auth)
npm run testPosts     # Tests posts APIs (/posts)
npm run testComments  # Tests comments APIs (/comments)
```

### Start the Server

Start the server using one of the following commands:

```bash
npm run dev    # Start the server with nodemon (automatic restarts)
npm run start  # Start the server without nodemon
```

---

## Using Swagger for API Calls

To interact with the APIs via Swagger:

1. Register a new user by executing the `/auth/register` API call (an example user is provided).

2. Log in with the newly created user by executing the `/auth/login` API call.

3. Copy the Refresh Token from the API response and use it in the Authorize section (lock icon) within Swagger to authenticate further requests.

---

For more details, refer to the `requests.rest` file or the Swagger documentation.
