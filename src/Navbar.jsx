import React, { useState, useEffect } from "react";
import "./Navbar.css"

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.jwt);
  const [userId, setUserId] = useState(localStorage.user_id);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.jwt);
    setUserId(localStorage.user_id);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          QORKD
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              {isLoggedIn ? (
                <a className="nav-link active" aria-current="page" href="/wines">
                  Home
                </a>
              ) : (
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              )}
            </li>
            <li className="nav-item">
              {isLoggedIn ? (
                <a className="nav-link active" href="/users">
                  Epicures
                </a>
              ) : (
                <a className="nav-link active" href="/signup">
                  Signup
                </a>
              )}
            </li>
            <li className="nav-item">
              {!isLoggedIn ? (
                <a className="nav-link active" href="/login">
                  Login
                </a>
              ) : null}
            </li>
            {isLoggedIn ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href={`/users/${userId}`}>
                      My Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/logout">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}
