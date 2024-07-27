import React from "react";
import { Link } from "react-router-dom";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto py-4">
        <Link
          to="/"
          className="flex items-center gap-2 hover:text-blue-600 transition-all duration-200"
        >
          <FontAwesomeIcon icon={faShieldHalved} className="h-7 w-7" />{" "}
          <h1 className="font-bold">Auth App</h1>
        </Link>
        <ul className="flex gap-4">
          <Link
            to="/"
            className="hover:text-blue-600 transition-all duration-200 font-medium"
          >
            <li>Home</li>
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-600 transition-all duration-200 font-medium"
          >
            <li>About</li>
          </Link>
          {currentUser ? (
            <Link
              to="/profile"
              className="hover:text-blue-600 transition-all duration-200 font-medium"
            >
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="h-7 w-7 rounded-full object-cover border-2 border-slate-600 hover:border-blue-600 transition-all duration-200"
              />
            </Link>
          ) : (
            <Link
              to="/signin"
              className="hover:text-blue-600 transition-all duration-200 font-medium"
            >
              <li>Sign In</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}
