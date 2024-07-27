import React from "react";

export default function Home() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        Welcome to My Auth App!
      </h1>
      <p className="mb-4 text-slate-700">
        This is a full-stack web application built with the MERN stack (MongoDB,
        Express, React, Node.js). It features authentication, allowing users to
        sign up, log in, log out, and access protected routes exclusively for
        authenticated users.
      </p>
      <p className="mb-4 text-slate-700">
        The front-end is built with React and uses React Router for client-side
        routing. The back-end is developed with Node.js and Express, utilizing
        MongoDB as the database. Authentication is implemented with JSON Web
        Tokens (JWT).
      </p>
      <p className="mb-4 text-slate-700">
        This application serves as a starting point for creating full-stack web
        applications with authentication using the MERN stack. Feel free to use
        it as a template for your own projects!
      </p>
    </div>
  );
}
