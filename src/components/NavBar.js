// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/Tools">Tools</Link>
        </li>
        <li className="nav-item">
          <Link to="/Tutorial">Tutorial</Link>
        </li>
      </ul>
    </nav>
  );
};