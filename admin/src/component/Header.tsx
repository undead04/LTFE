import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div>
        <section className="admin_area">
          <nav className="navbar navbar-expand-lg bg-info text-light">
            <div className="container-fluid">
              <button
                className="btn btn-info text-light btn_admin admin_nav_item"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#adminSidebar"
                aria-controls="adminSidebar"
              >
                <i className="fa-solid fa-bars" />
              </button>
              <div className="text-center">
                <span className="display-4">Admin page - Game Store</span>
              </div>
              <div className="text-light admin_nav_item">
                <div className="admin_avatar">AD</div>
              </div>
            </div>
          </nav>
        </section>
        <section>
          <div
            className="offcanvas offcanvas-start admin_sidebar"
            tabIndex={-1}
            id="adminSidebar"
            aria-modal="true"
            role="dialog"
          >
            <div className="w-100">
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title display-3"
                  id="offcanvasExampleLabel"
                >
                  Game Store 3
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <li className="sidebar_item">
                <Link
                  className="sidebar_link"
                  aria-current="page"
                  to="/admin/home"
                >
                  <i className="text-secondary fa-regular fa-compass" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="sidebar_item">
                <Link className="sidebar_link" to="/admin/user">
                  {" "}
                  <i className="text-primary fa-solid fa-user" />
                  <span>User</span>
                </Link>
              </li>
              <li className="sidebar_item">
                <Link className="sidebar_link" to="/admin/game">
                  <i className="text-success fa-solid fa-gamepad" />
                  <span>Games</span>
                </Link>
              </li>
              <li className="sidebar_item">
                <Link className="sidebar_link" to="/admin/benefit">
                  {" "}
                  <i className="text-warning fa-solid fa-coins" />
                  <span>Benefit</span>
                </Link>
              </li>
              <li className="sidebar_item">
                <Link className="sidebar_link" to="/admin/genre">
                  <i className="text-danger fa-solid fa-bars-staggered" />
                  <span>Genres</span>
                </Link>
              </li>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
