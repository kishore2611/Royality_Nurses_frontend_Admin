import React from "react";
import { Link } from "react-router-dom";
import pic from "../images/logo.png";
import Search from "./Search";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light kishore">
      {/* Container wrapper */}
      <div className="container-fluid">
        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar brand */}
          <Link className="navbar-brand mt-2 mt-lg-0" to="">
            <img src={pic} height={45} alt="RN Logo" loading="lazy" />
          </Link>
          {/* Left links */}

          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="">
                Projects
              </Link>
            </li>
          </ul> */}
          {/* Left links */}
        </div>
        {/* Collapsible wrapper */}
        {/* Right elements */}
        <div className="d-flex align-items-center mx-5">
          <Search />
          {/* Icon */}
          <Link className="text-reset me-3 ms-3" to="">
            <i className="fas fa-shopping-cart" />
          </Link>
          {/* Notifications */}
          <div className="dropdown">
            <Link
              className="text-reset me-3 dropdown-toggle hidden-arrow"
              to="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-bell" />
              <span className="badge rounded-pill badge-notification bg-danger">
                1
              </span>
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <Link className="dropdown-item" to="">
                  Some news
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Another news
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Something else here
                </Link>
              </li>
            </ul>
          </div>
          {/* Avatar */}

          <div className="dropdown">
            <Link
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              to=""
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height={25}
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <Link className="dropdown-item" to="">
                  My profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Settings
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Right elements */}
      </div>
      {/* Container wrapper */}
    </nav>
  );
};

export default Navigation;
