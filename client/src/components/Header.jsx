import React from "react";
import { Link } from "react-router-dom";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
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
        </ul>
      </div>
    </div>
  );
}
