# School Management API

A robust and efficient RESTful API built with Node.js, Express, and MySQL to manage school data. This API allows users to add new schools and retrieve a list of schools sorted by their proximity to a specific geographic location.

## 🚀 Features

- **Add School**: Securely add new schools with details like name, address, latitude, and longitude.
- **List Schools**: Retrieve schools sorted by distance from the user's current location using the Haversine formula.
- **Validation**: Built-in validation for data integrity and coordinate accuracy.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Dependencies**: `mysql2`, `dotenv`, `cors`, `body-parser`

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) installed.
- [MySQL](https://www.mysql.com/) server running.
- A tool like [Postman](https://www.postman.com/) or `curl` for testing.

## ⚙️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DakshPadmavat/School_API.git
   cd School_API
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory (or use the existing one) and fill in your database credentials:
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=school_db
   ```

4. **Database Setup**:
   Run the following SQL command in your MySQL terminal to create the necessary table:
   ```sql
   CREATE DATABASE school_db;
   USE school_db;

   CREATE TABLE schools (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       address VARCHAR(255) NOT NULL,
       latitude FLOAT NOT NULL,
       longitude FLOAT NOT NULL
   );
   ```

## 🏃 Execution

- **Start the server**:
  ```bash
  npm start
  ```
- **Run in development mode (with nodemon)**:
  ```bash
  npm run dev
  ```
The server will start on `http://localhost:3000`.

## 🛰️ API Endpoints

### 1. Add School
**Endpoint**: `POST /addSchool`  
**Description**: Adds a new school to the database.

**Request Body**:
```json
{
  "name": "Global International School",
  "address": "123 Education Lane, City",
  "latitude": 28.6139,
  "longitude": 77.2090
}
```

### 2. List Schools
**Endpoint**: `GET /listSchools`  
**Description**: Fetches all schools and sorts them by distance from the provided coordinates.

**Query Parameters**:
- `latitude`: The user's current latitude (e.g., `28.7041`)
- `longitude`: The user's current longitude (e.g., `77.1025`)

**Example Request**:
`GET http://localhost:3000/listSchools?latitude=28.7041&longitude=77.1025`

## 📄 License
This project is licensed under the ISC License.
