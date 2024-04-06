import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg d-flex">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ fontWeight: "600" }}>
            TalentBridge
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse container navbar-collapse"
            id="navbarSupportedContent"
          >
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </div>
              <div className="nav-item">
                <Link className="nav-link" to="/">
                  Services
                </Link>
              </div>
              <div className="nav-item">
                <Link className="nav-link" to="/">
                  Job Openings
                </Link>
              </div>{" "}
              <div className="nav-item">
                <Link className="nav-link" to="/">
                  Contact Us
                </Link>
              </div>{" "}
              <div className="nav-item">
                <Link className="nav-link" to="/">
                  About Us
                </Link>
              </div>
            </div>
            <div className="auth-btn-container">
              <form action="">
                {" "}
                <Link
                  className="btn login-btn mx-1  "
                  role="button "
                  style={{ backgroundColor: "#071952", color: "#ffffff" }}
                >
                  Log in
                </Link>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
