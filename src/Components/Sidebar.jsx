import React from "react";
import "./components.css";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div>
        {/*Main Navigation*/}
        <header>
          {/* Sidebar */}
          <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse xpz"
          >
            <div className="position-sticky xpz">
              <div className="list-group list-group-flush mx-3 mt-4 bg-color">
                <Link
                  to=""
                  className="list-group-item list-group-item-action py-2 ripple bg-color"
                  aria-current="true"
                >
                  <i className="fas fa-tachometer-alt fa-fw me-3" />
                  <span>Main dashboard</span>
                </Link>
                <Link
                  to=""
                  className="list-group-item list-group-item-action py-2 ripple bg-color active"
                >
                  <i className="fas fa-chart-area fa-fw me-3" />
                  <span>Webiste traffic</span>
                </Link>
                <Link
                  to=""
                  className="list-group-item list-group-item-action py-2 ripple bg-color"
                >
                  <i className="fas fa-lock fa-fw me-3" />
                  <span>Password</span>
                </Link>
                <Link
                  to=""
                  className="list-group-item list-group-item-action py-2 ripple bg-color"
                >
                  <i className="fas fa-chart-line fa-fw me-3" />
                  <span>Analytics</span>
                </Link>
                <Link
                  to=""
                  className="list-group-item list-group-item-action py-2 ripple bg-color"
                >
                  <i className="fas fa-chart-pie fa-fw me-3" />
                  <span>SEO</span>
                </Link>
                <Link
                  to=""
                  className="list-group-item list-group-item-action py-2 ripple bg-color"
                >
                  <i className="fas fa-chart-bar fa-fw me-3" />
                  <span>Orders</span>
                </Link>
                <Link
                  to=""
                  className="list-group-item list-group-item-action py-2 ripple bg-color"
                >
                  <i className="fas fa-globe fa-fw me-3" />
                  <span>International</span>
                </Link>
                <Link
                  to=""
                  className="list-group-item list-group-item-action py-2 ripple bg-color"
                >
                  <i className="fas fa-building fa-fw me-3" />
                  <span>Partners</span>
                </Link>
                <Link
                  to=""
                  className="list-group-item list-group-item-action py-2 ripple bg-color"
                >
                  <i className="fas fa-calendar fa-fw me-3" />
                  <span>Calendar</span>
                </Link>
                <Link
                  to=""
                  className="list-group-item list-group-item-action py-2 ripple bg-color"
                >
                  <i className="fas fa-users fa-fw me-3" />
                  <span>Users</span>
                </Link>
                <Link
                  to=""
                  className="list-group-item list-group-item-action py-2 ripple bg-color"
                >
                  <i className="fas fa-money-bill fa-fw me-3" />
                  <span>Sales</span>
                </Link>
              </div>
            </div>
          </nav>
          {/* Sidebar */}
          {/* <Navigation/> */}
        </header>
        {/*Main Navigation*/}
        {/*Main layout*/}
        <main style={{ marginTop: "58px" }}>
          <div className="container pt-4" />
        </main>
        {/*Main layout*/}
      </div>
    </>
  );
};

export default Sidebar;
