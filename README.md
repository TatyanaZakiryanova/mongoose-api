# Blog backend API

RESTful API for a blog, built with Express and TypeScript.

[README на русском](./README.ru.md)

[API Documentation](https://blog-backend-vrgr.onrender.com/api-docs/)

## Technologies

- **Node.js + Express**
- **TypeScript**
- **MongoDB** (mongoose)
- **JWT** - authentication and authorization
- **bcrypt** - password hashing
- **Multer + Cloudinary** - image uploading
- **CORS, dotenv** - environment configuration
- **express-validator** — request data validation
- **Render** - deployment
- **Swagger** - API documentation

## Features

- User registration and authentication using **JWT tokens**
- **CRUD operations** for posts and comments
- Image upload to **Cloudinary**
- Middleware for **route protection** (checkAuth)
- Data validation with **express-validator**
- Centralized error handling (errorHandler)

## How to start project

in the project directory enter:

```bash
npm install
```

create .env file in the root directory and compile the project:

```bash
npm run build
```

start the server:

```bash
npm start
```
