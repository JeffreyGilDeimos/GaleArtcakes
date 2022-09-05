import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCake, faComments, faUserGroup, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavHashLink as NavLink } from "react-router-hash-link";
import myLogo from "./img/GaleLogo_png2.png";

export default function Navigation() {
  return (
    <header id="header">
      <div className="p-2 p-lg-3 nav-bg-color fixed-top shadow-lg">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink
              to="/"
              className="d-flex align-items-center my-1
              my-lg-0 me-lg-auto text-decoration-none"
            >
              <img src={myLogo} width="180" height="75" alt="Gale Logo" />
            </NavLink>
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-lg-1 text-small fw-bold">
              <li>
                <NavLink to="/" className="nav-link">
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="bi bi-house-door d-block d-flex justify-content-center mb-1 mx-auto fs-5"
                  />
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/Menu" className="nav-link">
                  <FontAwesomeIcon
                    icon={faCake}
                    className="bi bi-menu-button-wide-fill d-block d-flex justify-content-center mb-1 mx-auto fs-5"
                  />
                  MENU
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#fb_review"
                  activeClassName="selected"
                  className="nav-link"
                >
                  <FontAwesomeIcon
                    icon={faComments} className="bi bi-megaphone d-block d-flex justify-content-center mb-1  mx-auto fs-5" />
                  REVIEWS
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" className="nav-link">
                <FontAwesomeIcon
                    icon={faUserGroup} className="bi bi-people d-block d-flex justify-content-center mb-1 mx-auto fs-5" />
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink to="/Login" className="nav-link">
                <FontAwesomeIcon
                    icon={faCartShopping} className="bi bi-people d-block d-flex justify-content-center mb-1 mx-auto fs-5" />
                  CART
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
