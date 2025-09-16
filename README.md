AI Virtual Assistant

This is a full-stack AI Virtual Assistant application built with the MERN stack (MongoDB, Express.js, React, Node.js).
It provides a seamless experience for interacting with the AI assistant through a modern frontend and a powerful backend.

Features

User authentication (Sign Up / Sign In)

AI-powered voice and text responses

Responsive design with mobile and tablet support

Custom cursor effects and typing animations

RESTful API integration between frontend and backend

MongoDB database for storing user data

Installation

Clone the repository:

git clone <repository-url>
cd AI-Virtual-Assistant


Setup backend:

cd backend
npm install
npm start


Setup frontend:

cd frontend
npm install
npm run dev


Open your browser and navigate to http://localhost:5173 for frontend.
Backend runs on http://localhost:5000.

Build for Production

Frontend build:

cd frontend
npm run build


The built files will be in the dist directory.

Backend can be deployed on services like Render, Railway, or Heroku.

Deployment

Frontend: Deployable on Vercel, Netlify, or any static hosting service.

Backend: Deployable on services like Render, Railway, or VPS.

Ensure the backend API URL is correctly updated in the frontend context (serverUrl).

Technologies Used

Frontend: React 19, Vite, Tailwind CSS, Axios, React Router

Backend: Node.js, Express.js, MongoDB, Mongoose

Other: GitHub for version control, REST APIs
