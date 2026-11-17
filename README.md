# Student Record Management API

## Project Description
A REST API for managing student records using Node.js and Express.js.

All student records are stored in an in-memory JavaScript array.

## Technologies Used
- Node.js
- Express.js
- JavaScript
- Postman

## Student Record Structure
Each student contains:
- id
- rollNumber
- name
- branch
- semester
- email

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/students | Get all students |
| POST | /api/students | Add a new student |
| GET | /api/students/:id | Get student by ID |
| PUT | /api/students/:id | Update student |
| DELETE | /api/students/:id | Delete student |
| GET | /api/students/filter?branch=CSE | Filter by branch |

## How to Run the Project

1. Install dependencies:

   npm install

2. Start the server:

   node server.js

3. Server runs at:

   http://localhost:3000

## Testing
All API endpoints can be tested using Postman.

## Author
Shivmani Goswami