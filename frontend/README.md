# AI Virtual Assistant Frontend

This is the frontend application for the AI Virtual Assistant, built with React and Vite. It provides a user-friendly interface for interacting with the AI assistant, including user authentication, customization options, and more.

## Features

- User authentication (Sign Up / Sign In)
- Responsive design with mobile and tablet support
- Custom cursor effects and typing animations
- Tailwind CSS for styling
- Integration with backend API

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This frontend can be deployed to platforms like Vercel, Netlify, or any static hosting service. Ensure the backend API is running and update the `serverUrl` in the context accordingly.

## Technologies Used

- React 19
- Vite
- Tailwind CSS
- Axios for API calls
- React Router for navigation
