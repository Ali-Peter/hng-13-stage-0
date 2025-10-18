HNG Internship Stage 0 Backend Task
A RESTful API built with Node.js and Express that provides a /me endpoint returning profile information and a random cat fact.
Setup Instructions
Prerequisites

Node.js (v16 or higher)
npm

Installation

Clone the repository:
git clone https://github.com/Ali-Peter/hng-13-stage-0.git
cd hng-stage0-backend


Install dependencies:
npm install


Create a .env file:
PORT=3000


Run the server:
npm run dev



Running Locally
Access the endpoint at http://localhost:3000/me.
Dependencies

express: Web framework for Node.js
axios: For making HTTP requests
dotenv: For environment variables

Environment Variables

PORT: The port the server runs on (default: 3000)

API Endpoint

GET /me: Returns profile information and a random cat fact.

Deployment
Deployed on Railway: https://hng-13-stage-0-production-51a2.up.railway.app/me
Testing

Test the endpoint using Postman or cURL.
Ensure the response matches the required JSON structure.
