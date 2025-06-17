# Blog backend API

REST API для блога на Express и TS.

[API документация](https://blog-backend-vrgr.onrender.com/api-docs/)

## Technologies

- **Node.js + Express**
- **TypeScript**
- **MongoDB** (mongoose)
- **JWT** - авторизация и аутентификация
- **bcrypt** - хеширование паролей
- **Multer + Cloudinary** - загрузка изображений
- **CORS, dotenv** - настройка окружения
- **express-validator** — валидация входящих данных
- **Render** - деплой
- **Swagger** - документация

## Features

- Регистрация и авторизация пользователей
- **CRUD** для постов и комментариев
- Загрузка изображений (Cloudinary)
- Защита маршрутов (middleware checkAuth)
- Валидация данных (express-validator)
- Централизованная обработка ошибок (errorHandler)

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
