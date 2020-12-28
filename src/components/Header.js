import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/sources">Sources</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default Header;
