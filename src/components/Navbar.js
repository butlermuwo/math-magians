import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div>
        <h2>Math Magicians</h2>
        <nav>
          <Link to="/">Home </Link>
          <Link to="/calculator">Calculator </Link>
          <Link to="/quote">Quote</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
