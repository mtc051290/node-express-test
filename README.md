# 🚀 Tasks API

A **simple RESTful API** built with **Node.js** and **Express.js** for managing tasks. This project includes a **Swagger UI** for easy API documentation and testing.

---

![Tasks API Overview](https://i.imgur.com/oqLQ3ji.png)

---

## 📋 **Table of Contents**

- [Features](#features)
- [Installation](#installation)
- [Development](#development)
- [Swagger UI](#swagger-ui)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)

---

## ✨ **Features**

- RESTful API for managing tasks (CRUD operations: Create, Read, Update, Delete).
- Swagger documentation integrated for testing and exploring API endpoints.
- Prettier and ESLint configurations for clean and consistent code.
- Middleware setup with **CORS** and **Body Parser**.

---

## ☝️ **Future Improvements**

- Migration to **Nest.js** to maintain a clean and efficient architecture.
- Middleware for handling errors in the response of endpoints.
- Adaptation to **typescript** to maintain readability and typing during development.
- Integration of unit tests using **Jest** to automate testing and system operation.
- Integration with a relational or non-relational database.

---

## ⚙️ **Installation**

To set up and run this project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mtc051290/node-express-test
   cd node-express-test
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

---

## 🛠️ **Development**

To start the development server, use:

```bash
npm run dev
```

This will run the server using **nodemon**, which automatically restarts the server on file changes.

---

## 📄 **Swagger UI**

The API is documented using **Swagger UI**.

1. Start the server with:
   ```bash
   npm start
   ```

2. Open your browser and go to:

   👉 **Swagger UI**: [http://localhost:8000/api-docs](http://localhost:8000/api-docs)

---

## 🚀 **Scripts**

The following scripts are available in the project:

| Script          | Command                   | Description                                  |
|-----------------|---------------------------|----------------------------------------------|
| `start`         | `npm start`               | Start the server.                            |
| `dev`           | `npm run dev`             | Start the development server with nodemon.   |
| `format`        | `npm run format`          | Format all files using Prettier.             |
| `format:check`  | `npm run format:check`    | Check file formatting without modifying.     |

---

## 🔥 **API Endpoints**

### Base URL
The base URL for all endpoints is:

```http
http://localhost:8000/tasks
```

### Endpoints Overview

| Method | Endpoint     | Description              |
|--------|--------------|--------------------------|
| `GET`  | `/`          | Retrieve all tasks.      |
| `POST` | `/`          | Create a new task.       |
| `PUT`  | `/{id}`      | Update an existing task. |
| `DELETE`| `/{id}`     | Delete a task.           |

---

### Example JSON Schema for a Task

**Task Object**:
```json
{
  "id": 1,
  "title": "My Task",
  "completed": false
}
```

**Request Body for Create/Update Task**:
```json
{
  "title": "Updated Task Title",
  "completed": true
}
```

---

## 🛠️ **Technologies**

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework.
- **Swagger UI**: API documentation and testing.
- **Prettier**: Code formatter.
- **Nodemon**: Development tool for auto-reloading.
- **CORS**: Middleware to enable Cross-Origin requests.

---

## 👨‍💻 **Author**

Created by **mtc590**.

