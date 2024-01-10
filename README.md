# ResumeSphere by CodeWithBharat (Live Preview May Not work due to free hosting plan)

ResumeSphere is a MERN (MongoDB, Express.js, React, Node.js) stack application for building and managing resumes online.

## Project Overview

The project allows users to create and customize their resumes, including personal information, education, experience, skills, and projects. It provides a user-friendly interface for managing and sharing resumes.

## Backend

### Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT) for authentication
- bcrypt for password hashing
- CORS for handling cross-origin requests

### Getting Started

1. Navigate to the `server` directory.
2. Clone the repository.
3. Install dependencies: `npm install`
4. Create a `.env` file based on the provided `.env-example`.
5. Start the server:
   - Development: `npm run dev`
   - Production: `npm start`

### API Endpoints

- User routes for profile management
- Education, Experience, Skill, and Project routes for managing related data
- Authentication routes (Register and Login)

### Example API Routes

- Update User: `PUT /update-user`
- Get User by ID: `GET /:user_id`
- Add Education: `POST /:user_id/education`
- Delete Education: `DELETE /:user_id/education/:education_id`
- ... (similar routes for other entities)

## Frontend

### Technologies Used

- React.js
- Vite for build and development
- Axios for handling HTTP requests
- React Router for navigation
- Tailwind CSS for styling

### Getting Started

1. Navigate to the `client` directory.
2. Install dependencies: `npm install`
3. Create a `.env` file based on the provided `.env-example`.
4. Start the development server: `npm run dev`

### Example Routes

- Home: `/`
- Register: `/register`
- Login: `/login`
- Dashboard: `/dashboard`
  - Basic Info: `/dashboard/basic-info`
  - Social Links: `/dashboard/social-links`
  - Education: `/dashboard/education`
  - Experience: `/dashboard/experience`
  - Skills: `/dashboard/skills`
  - Projects: `/dashboard/projects`
  - Resume: `/dashboard/resume`
- Shared Resume: `/resume/:userId`

## Project Deployment

The project is hosted on Vercel. You can access it at [ResumeSphere](https://resume-sphere.vercel.app/).

## Contact

For any inquiries or support, please contact the project maintainers.
