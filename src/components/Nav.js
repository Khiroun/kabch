import React from "react";

const Nav = () => {
  return (
    <div className="nav-container">
      <nav>
        <h1 className="logo">Kebch.com</h1>
        <ul>
          <li>
            <a href="/">Soug</a>
          </li>

          <li>
            <a href="/" className="order">
              Nechri
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
