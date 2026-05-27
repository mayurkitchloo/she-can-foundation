# 🌸 She Can Foundation — Official Website

A modern full-stack web application built for She Can Foundation, a government-registered NGO under the Indian Society Registration Act of 1860, dedicated to empowering underprivileged women through education, skill development, awareness programs, and community support initiatives.

The platform serves as the official digital presence of the organization while also providing a secure admin system to manage public submissions and inquiries.

---

# ✨ Features

## 🌐 Public Website

* Beautiful and responsive modern UI
* Smooth animations using Framer Motion
* NGO introduction and mission showcase
* Programs & initiatives section
* Image gallery
* Contact / inquiry form
* Fully mobile responsive

## 🔐 Admin Dashboard

* Secure JWT-based authentication
* Hidden admin panel route for added security
* View and manage website form submissions
* Auto logout on token expiration
* Refresh latest submissions instantly

---

# 🛠️ Tech Stack

## Frontend

* React + Vite
* Tailwind CSS
* Framer Motion
* React Router DOM
* React Icons

## Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Bcrypt
* CORS

---

# 📁 Project Structure

```text
she-can-foundation
│
├── backend
│   ├── config
│   │   └── db.js
│   │
│   ├── models
│   │   ├── Admin.js
│   │   └── Submission.js
│   │
│   ├── routes
│   │   ├── auth.js
│   │   └── submissions.js
│   │
│   ├── seeder.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── assets
│   │   │
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Programs.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Form.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── context
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── AdminLogin.jsx
│   │   │   └── AdminDashboard.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env.development
│   ├── .env.production
│   ├── vercel.json
│   └── package.json
│
└── README.md
```text

---

# 🚀 Getting Started

# 📋 Prerequisites

* Node.js v18+
* MongoDB Atlas account (or local MongoDB)

---

# ⚙️ Backend Setup

* Navigate to backend

cd backend

* Install dependencies

npm install

* Create a .env file inside backend/

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
CLIENT_URL=http://localhost:5173
PORT=5000

* Seed the admin account

node seeder.js

* Start backend server

npm run dev

Backend runs on:

http://localhost:5000

---

# 🎨 Frontend Setup

* Navigate to frontend

cd frontend

* Install dependencies

npm install

* Create a .env.development file inside frontend/

VITE_API_URL=http://localhost:5000

* Start frontend

npm run dev

Frontend runs on:

http://localhost:5173

---

# 🔐 Admin Panel

The admin panel is intentionally not linked publicly on the website for additional security.

## 📍 Admin Login Route

http://localhost:5173/admin/login

Use the credentials configured in backend .env:

ADMIN_EMAIL
ADMIN_PASSWORD

---

# 🧩 Admin Features

* View all public form submissions
* See sender details:

  * Name
  * Email
  * Message
  * Submission Date
* Refresh latest submissions
* Secure authentication system
* Logout functionality
* Automatic logout on token expiry

---

# 📦 API Overview

## Authentication Routes

* POST /api/auth/login → Admin Login

## Submission Routes

* POST /api/submissions → Submit public form
* GET /api/submissions → Fetch all submissions (Protected)

---

# 🌟 Future Improvements

* Email notifications for submissions
* Admin analytics dashboard
* Image upload support
* Role-based admin system
* CMS integration
* Donation/payment gateway
* Multi-language support

---

# 🤝 Contributing

* Fork the repository
* Create a feature branch
* Commit your changes
* Push the branch
* Open a Pull Request

---


