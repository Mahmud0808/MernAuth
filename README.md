<div align="center">
    <img src="https://i.postimg.cc/J0fwDNPW/Mern-Auth-Banner.png" alt="Project Banner">
  <br />
  <br />

  <div>
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=1FAD58" alt="mongodb" />
    <img src="https://img.shields.io/badge/-Express-black?style=for-the-badge&logoColor=white&logo=express&color=292929" alt="express" />
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=1082A7" alt="react" />
    <img src="https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logoColor=white&logo=nodedotjs&color=58A149" alt="nodedotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=3FBFF8" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=393939" alt="firebase" />
  </div>

  <h2 align="center">MernAuth</h2>

  <div align="center">
     <b>MernAuth</b> is a base template for adding authentication to any MERN (MongoDB, Express, React.js, Node.js) project using React.js, JWT, Redux Toolkit, and cookies. This project covers crucial aspects to ensure your success in implementing robust authentication and CRUD operations.
  </div>
  <br />
  <a href="https://mernauth-mwjp.onrender.com/"><strong>➥ Visit MernAuth App</strong></a>
</div>

## Features ✨

- **Frontend Setup**: Installation of React.js with Tailwind CSS and React Router Dom for routing.
- **Authentication**: Email and password authentication using JSON Web Tokens (JWT) and integration with Google OAuth.
- **State Management**: Efficient state management using Redux Toolkit.
- **Secure Profile Pages**: Dual-layer protection for profile pages on both client and backend sides.
- **Profile Management**: Update user profiles, including username, email, password, and profile images with Firebase Storage.
- **Account Deletion**: Safe deletion of user accounts with JWT cookie checks.
- **CRUD Operations**: Create, Read, Update, and Delete operations using MongoDB.
- **Deployment**: Deploy the full-stack authentication app using Render.

## Tech Stack 🛠️

- **Frontend**: React.js, Tailwind CSS, React Router Dom, Redux Toolkit
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT), Google OAuth
- **Storage**: Firebase Storage
- **Deployment**: Render

## Getting Started 🚀

### Prerequisites

- Node.js
- MongoDB
- Firebase Account (for profile image storage)
- Google OAuth credentials

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Mahmud0808/MernAuth.git
    cd MernAuth
    ```

2. Install dependencies for both client and server:
    ```sh
    npm run build
    ```

3. Set up environment variables:

- Create a `.env` file in the `server` directory and add the following:
    ```env
    PORT=3000
    JWT_SECRET=your_jwt_secret
    MONGODB_URL=your_mongodb_url
    ```

- Create a `.env` file in the `client` directory and add the following:
    ```env
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=yout_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_message_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

4. Start the development servers:
    ```sh
    npm run start
    ```

## Contributing 🤝

Contributions are welcome! Here's how you can contribute:

- Fork the repository.
- Create your feature branch (`git checkout -b feature/AmazingFeature`).
- Commit your changes (`git commit -m 'Add some AmazingFeature'`).
- Push to the branch (`git push origin feature/AmazingFeature`).
- Open a pull request.

## Contact 📬

Wanna reach out to me? DM me at 👇

Email: mahmudul15-13791@diu.edu.bd

## License 📜

This project is licensed under the MIT License.
