# Mongoose API

REST API для блога на Express, Mongoose и TypeScript.

📄 [API документация](https://blog-backend-vrgr.onrender.com/api-docs/)

## 🛠️ Technologies

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

## 💻 Features

- Регистрация и авторизация пользователей
- **CRUD** для постов и комментариев
- Загрузка изображений - **Multer + Cloudinary**
- Защита маршрутов - middleware checkAuth
- Валидация данных - **express-validator**
- Централизованная обработка ошибок
- **Swagger** документация
- **Render** - деплой

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

create .env file in the root directory and compile the project:

```bash
npm run build
```

start the server:

```bash
npm start
```
