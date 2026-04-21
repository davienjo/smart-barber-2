💈 Smart Barbershop Booking System

A full-stack barbershop appointment booking and admin management system built with Node.js, Express, MongoDB, and vanilla JavaScript.

This project demonstrates real-world full-stack development including authentication, REST APIs, CRUD operations, and cloud deployment.

🌐 Live Demo
🖥️ Frontend (Customer App)

https://smart-barber-web-app.netlify.app

🔐 Admin Login

https://smart-barber-web-app.netlify.app/pages/login.html

📊 Admin Dashboard

https://smart-barber-web-app.netlify.app/pages/admin.html

⚙️ Backend API

https://smart-barber-web-app.onrender.com

📸 Screenshots
## 📸 Screenshots

### 🏠 Home Page
<p align="center">
  <img src="screenshots/home-page.png" width="800" />
</p>

### 📅 Booking Form
<p align="center">
  <img src="screenshots/booking.png" width="800" />
</p>

### 🔐 Login Page
<p align="center">
  <img src="screenshots/login.png" width="500" />
</p>

### 📊 Admin Dashboard
<p align="center">
  <img src="screenshots/admin.png" width="900" />
</p>

✨ Features


👤 Customer Side

Book barber appointments online

Select service, barber, date, and time

Instant booking confirmation

Clean and responsive UI


🔐 Admin Side


Secure login system (JWT authentication)

View all bookings

Edit and delete appointments

Real-time booking management

Protected dashboard (localStorage + token flow)


⚙️ Backend


RESTful API built with Express.js

MongoDB Atlas integration

Full CRUD operations

Authentication using bcrypt & JWT

Environment variables for security


🧠 System Architecture


User (Browser)

↓ Netlify Frontend (UI)

↓ fetch()

Render Backend (Node.js API)

↓ MongoDB Atlas Database

↓ Response → UI updates


🛠️ Tech Stack


Frontend

HTML5
CSS3
JavaScript (Vanilla JS)

Backend

Node.js
Express.js
MongoDB Atlas
Mongoose

Security

bcryptjs
JSON Web Tokens (JWT)

Deployment

Netlify (Frontend)
Render (Backend)
GitHub (Version Control)


📁 Project Structure


smart-barber-web-app/

│ ├── frontend/
│ ├── pages/
│ ├── css/
│ ├── js/
│ └── images/

│ ├── backend/
│ ├── models/
│ ├── server.js
│ └── .env

│ └── README.md


⚙️ Installation & Setup

Clone repository


git clone https://github.com/davienjo/smart-barber-web-app.git


Install backend dependencies

cd backend
npm install

Create .env file

MONGO_URI=mongodb://admin:footwear@ac-y6snq5w-shard-00-00.senypos.mongodb.net:27017,ac-y6snq5w-shard-00-01.senypos.mongodb.net:27017,ac-y6snq5w-shard-00-02.senypos.mongodb.net:27017/barbershop?ssl=true&replicaSet=atlas-a3e65v-shard-0&authSource=admin&retryWrites=true&w=majority

JWT_SECRET=your_secret_key


Run server


node server.js


🌐 API Endpoints


Bookings

POST /bookings

GET /bookings

GET /bookings/:id

PUT /bookings/:id

DELETE /bookings/:id


Auth

POST /api/login



🔐 Demo Admin Credentials


Email: admin@gmail.com

Password: 1234



📈 Future Improvements



Analytics dashboard with charts


Real-time updates (WebSockets)


Payment integration


Role-based authentication


React frontend upgrade



💡 What I Learned



Full-stack application architecture


REST API development with Express


MongoDB database integration


JWT authentication flow


Frontend-backend communication


Deployment with Netlify & Render


Building production-style projects



👨‍💻 Author


David Thairu

GitHub: https://github.com/davienjo



⭐ Support

If you like this project, give it a ⭐ and feel free to explore or fork it!

 You're using a less powerful model until your limit resets after 8:09 PM. Upgrade to get more access.
Claim free offer