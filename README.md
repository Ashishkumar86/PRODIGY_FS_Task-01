# PRODIGY_FS_Task-01

---

# 🛡️ Simple Authentication App

This is a basic user authentication system built with **Node.js**, **Express.js**, and **MongoDB**, with session handling and role-based access (user/admin). It includes both frontend (HTML/CSS) and backend (REST API) components.

## 🔧 Features

* User Registration & Login
* Session-based authentication using `express-session`
* Role-based access control (User / Admin)
* MongoDB for persistent storage
* Password hashing with `bcrypt`
* Frontend with login & registration forms (pure HTML/CSS)

## 📁 Project Structure

```
├── .env               # Environment variables
├── Sever.js           # Main server file (entry point)
├── backend.js         # Middleware for authentication
├── routes.js          # Routes for login, register, logout
├── User.js            # Mongoose model for users
├── Index.html         # Frontend HTML (login/registration)
├── Style.css          # Frontend styling
```

## 🔐 Environment Variables

Add a `.env` file with the following:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/authApp
SESSION_SECRET=supersecret
```

## 🚀 Getting Started

### Prerequisites

* Node.js
* MongoDB installed and running locally

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install express mongoose express-session connect-mongo bcrypt dotenv
```

3. Start the server:

```bash
node Sever.js
```

4. Open `Index.html` in your browser.

## 🌐 API Endpoints

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| POST   | `/api/register`  | Register a new user     |
| POST   | `/api/login`     | Log in a user           |
| GET    | `/api/logout`    | Log out current user    |
| GET    | `/api/dashboard` | Authenticated user view |
| GET    | `/api/admin`     | Admin-only access page  |

## 🧪 Example Roles

You can choose `User` or `Admin` while registering. The `/api/admin` route is protected and accessible only to admin users.

## 🖼️ UI Overview

* Simple login and registration form
* Responsive design using basic CSS

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---
