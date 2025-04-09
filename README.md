# Wash 'n Go - Full Stack Application

## Overview

This project is a full-stack application for a laundry service platform called "Wash 'n Go." It includes user registration, login, service booking, and more. The backend is built with Express.js and PostgreSQL, while the frontend uses React. The application connects the frontend to the backend APIs, manages user authentication, and performs CRUD operations for users and services.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Express.js
- **Database**: PostgreSQL with Sequelize
- **Authentication**: JWT (JSON Web Token)
- **Postman**: Used for API testing

## Features

- **User Authentication**: Register, Login, and Logout functionality.
- **Service Booking**: Users can view and book laundry services.
- **Admin PostmanTesting**: Admins can add, update, and delete services.
- **CRUD Operations**: APIs for managing users and services.
- **Toast Notifications**: To provide success/failure feedback to users.

## Frontend Development

### Components:
- **Navbar**: Display links for Home, About, Services, and Contact, as well as a login/logout button that changes depending on the user's login status.
- **Login Page**: Allows users to log in using their credentials and navigate to the home page upon successful login.
- **Register Page**: Provides a registration form for new users to create an account.
- **Home Page**: Display available services for users to choose from.
- **Booking Modal**: Displays booking details, including the selected services and form submission to confirm the booking.
- **Admin Features**: Admins can view and manage services.

### Key Features Implemented:
- User registration and login, with JWT token storage for authentication.
- Integration with backend APIs to allow users to book services.
- Dynamic navigation (login/logout buttons based on user state).
- Toast notifications for feedback on successful or failed actions.


### Frontend Setup

Navigate to the frontend directory:

cd frontend

Install the necessary dependencies:

npm install

---

### Backend Setup

Navigate to the backend directory:

cd backend

Install the necessary dependencies:

npm install

Make sure to configure your .env file with appropriate values for database connection and JWT secret. (Refer to .env.example)

---

### Database Setup

Make sure you have *PostgreSQL* installed and running.

Create a database named washngo and ensure your .env file has correct database credentials.

Run migrations to create the necessary tables:

npx sequelize-cli db:migrate

---

### Database Config Sample (config/config.js)

Here's a sample development config for Sequelize:

// config/config.js
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres"
  }
};

### .enV
DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=WashNgo
DB_USER=postgres
DB_PASS=maeann
JWT_SECRET=supersecretjwt


---

### Run the Application

Start the backend server:

npm run dev

For the frontend, in a separate terminal, run:

npm start

Then open your browser and go to:

[http://localhost:3000]

---

## Backend Development

### Express.js Server Setup:
- **Routes**:
  - **POST /api/users/register**: Registers a new user.
  - **POST /api/users/login**: Authenticates a user and returns a JWT.
  - **POST /api/users/logout**: Logs the user out by removing the JWT token.
  - **GET /api/users**: Retrieves all users.
  - **GET /api/services**: Fetches available services.
  - **POST /api/services**: Admin functionality to add services.
  - **DELETE /api/services/:id**: Admin functionality to delete a service.
  - **PUT /api/services/:id**: Admin functionality to update a service.

- **JWT Authentication**: Used to secure certain routes (e.g., booking, adding services).
- **Sequelize ORM**: Used for interacting with PostgreSQL to manage users and services data.

### Database Setup:
- **PostgreSQL** database connected via Sequelize.
- **User Model**: Stores user information like email and password.
- **Service Model**: Stores laundry services offered by the platform.

### Testing APIs with Postman:
- **User Authentication**: Tested register and login endpoints using Postman.
- **CRUD Operations**: Tested add, update, delete services APIs via Postman.
- **JWT Token**: Verified that JWT token was stored and passed correctly for authentication on protected routes.

## Steps to Run the Project Locally

### Service Pricing

- *Wash & Fold* – ₱110 per kilo  
- *Wash & Iron* – ₱120 per kilo  
- *Dry Clean* – ₱150 per kilo  
- *Full Service (Pickup & Delivery)* – ₱250 per kilo  



### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/WashNgo.git
cd WashNgo
