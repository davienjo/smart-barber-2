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
<p align="center"> <strong>Home Page</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Booking Form</strong> </p> <p align="center"> <img src="screenshots/home.png" width="45%" /> <img src="screenshots/booking.png" width="45%" /> </p> <p align="center"> <strong>Login Page</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Admin Dashboard</strong> </p> <p align="center"> <img src="screenshots/login.png" width="45%" /> <img src="screenshots/admin.png" width="45%" /> </p>
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
   ↓
Netlify Frontend (UI)
   ↓ fetch()
Render Backend (Node.js API)
   ↓
MongoDB Atlas Database
   ↓
Response → UI updates
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
│
├── frontend/
│   ├── pages/
│   ├── css/
│   ├── js/
│   └── images/
│
├── backend/
│   ├── models/
│   ├── server.js
│   └── .env
│
└── README.md
⚙️ Installation & Setup
Clone repository
git clone https://github.com/davienjo/smart-barber-web-app.git
Install backend dependencies
cd backend
npm install
Create .env file
MONGO_URI=your_mongodb_connection_string
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