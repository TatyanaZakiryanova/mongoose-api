# Mongoose API

RESTful API for a blog, built with Express, Mongoose and TypeScript.

⚠️ _Please note: free Render server may take up to 1 minute to wake up on first request._

🌎 [README на русском](./README.ru.md)

📄 [Swagger docs](https://blog-backend-vrgr.onrender.com/api-docs/)

## 🛠️ Technologies

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

## 💻 Features

- User registration and authentication using **JWT tokens**
- **CRUD operations** for posts and comments
- Image upload to **Cloudinary**
- Middleware for **route protection** (checkAuth)
- Data validation with **express-validator**
- Centralized error handling (errorHandler)
- **Swagger-based** API docs
- Hosted via **Render**

## 📁 Architecture

```bash
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── swagger/
├── utils/
├── validators/
```

## 🚀 How to start project

clone the repository:

```bash
git clone
```

in the project directory enter:

```bash
npm install
```

create **.env** file in the root directory and compile the project:

```bash
npm run build
```

start the server:

```bash
npm start
```
