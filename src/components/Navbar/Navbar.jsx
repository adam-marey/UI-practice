import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="nav">
      <h1>BuildWeb</h1>
      <div className="links">
        <Link className="nav-link" to="/blog">
          Blog
        </Link>
        <Link className="nav-link" to="/learn">
          Learn
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
