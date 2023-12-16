import React from "react";
import { Link } from "react-router-dom";

import "../App.jsx"

export function NavBar() {
  return (
    <div className="navbar bg-accent">
      <div className="flex-1 space-x-1">
        <Link to="/" className="btn btn-ghost text-xl font-dhurjati text-secondary">
          AL'S CREATIONS
        </Link>
        <a className="btn btn-secondary text-xl font-dhurjati text-primary">
          Art
        </a>
        <a className="btn btn-secondary text-xl font-dhurjati text-primary">
          Animation
        </a>
        <Link to="/series" className="btn btn-secondary text-xl font-dhurjati text-primary">
          Series
        </Link>
        <Link to="/websites" className="btn btn-secondary text-xl font-dhurjati text-primary">
          Tech
        </Link>
        <Link to="/about" className="btn btn-secondary text-xl font-dhurjati text-primary">
          About
        </Link>
      </div>
    </div>
  );
}
