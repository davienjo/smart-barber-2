# 💈 Smart Barbershop Booking System

A full-stack barbershop appointment booking and admin management system built with Node.js, Express, MongoDB, and vanilla frontend technologies.

This project demonstrates real-world full-stack development skills including authentication, CRUD operations, REST APIs, and database integration.

---

## 🚀 Live Demo
*(Add link here after deployment)*  
https://your-live-project-link.com

---

## 📸 Screenshots

### 🏠 Home Page
*(Add screenshot here)*

### 📊 Admin Dashboard
*(Add screenshot here)*

### 📅 Booking Form
*(Add screenshot here)*

---

## ✨ Features

### 👤 Customer Side
- Book appointments online
- Select service, barber, date, and time
- Instant booking confirmation
- Clean responsive UI

### 🔐 Admin Side
- Secure login system
- View all bookings
- Edit and delete bookings
- Manage appointments in real-time
- Protected admin dashboard (localStorage auth)

### ⚙️ Backend
- RESTful API built with Express
- MongoDB Atlas database integration
- CRUD operations for bookings
- Authentication using bcrypt & JWT
- Environment variable configuration

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Security
- bcryptjs (password hashing)
- JSON Web Tokens (JWT)

---

## 📁 Project Structure

```text
smart-barbershop/
│
├── frontend/
│   ├── pages/
│   ├── css/
│   ├── js/
│   └── images/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── server.js
│   ├── .env
│
└── README.md

⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/yourusername/smart-barbershop.git

2. Backend setup
cd backend
npm install

3. Create .env file
MONGO_URI=your_mongodb_connection_string

4. Run server
node server.js

🌐 API Endpoints
Bookings
POST /bookings → Create booking
GET /bookings → Get all bookings
GET /bookings/:id → Get single booking
PUT /bookings/:id → Update booking
DELETE /bookings/:id → Delete booking
Auth
POST /api/login → Admin login

🔐 Admin Credentials (Demo)
Email: admin@gmail.com
Password: 1234


📈 Future Improvements
Add analytics dashboard (booking stats & charts)
Real-time notifications
Payment integration
Role-based authentication (admin/customer separation)
React frontend upgrade

💡 What I Learned
Full-stack CRUD application architecture
REST API development with Express
MongoDB database design & integration
Authentication with JWT & bcrypt
Frontend-backend communication
Project structuring for scalability
👨‍💻 Author

David Thairu
Frontend & Backend Developer
GitHub: https://github.com/yourusername

