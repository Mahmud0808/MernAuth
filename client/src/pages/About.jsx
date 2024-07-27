import React from "react";

export default function About() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">About</h1>
      <p className="mb-4 text-slate-700">
        This application is built with the MERN stack (MongoDB, Express, React,
        Node.js) and features authentication. Users can sign up, log in, log
        out, and access protected routes exclusive to authenticated users.
      </p>
      <p className="mb-4 text-slate-700">
        The front end is developed with React and utilizes React Router for
        client-side routing. The back end is created with Node.js and Express,
        using MongoDB as the database. Authentication is managed with JSON Web
        Tokens (JWT).
      </p>
      <p className="mb-4 text-slate-700">
        This application serves as a starting point for developing full-stack
        web applications with authentication using the MERN stack. Feel free to
        use it as a template for your own projects!
      </p>
    </div>
  );
}
