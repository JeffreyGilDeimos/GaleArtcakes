import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCake,
  faComments,
  faUserGroup,
  faCartShopping,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { NavHashLink as NavLink } from "react-router-hash-link";

export default function Navigation() {
  return (
    <header id="header">
      <div className="p-2 p-lg-3 nav-bg-color fixed-top">
        <div className="container position-relative">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink
              to="/"
              className="d-flex align-items-center my-1
              my-lg-0 me-lg-auto text-decoration-none"
            >
              <img
                src="images/Logo.png"
                width="180"
                height="75"
                alt="Gale Logo"
              />
            </NavLink>
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-lg-1 text-small fw-bold">
              <li>
                <NavLink to="/" className="nav-link">
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="bi bi-house-door d-block d-flex justify-content-center mb-1 mx-auto fs-5"
                  />
                  <span className="nav-label">HOME</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Menu" className="nav-link">
                  <FontAwesomeIcon
                    icon={faCake}
                    className="bi bi-menu-button-wide-fill d-block d-flex justify-content-center mb-1 mx-auto fs-5"
                  />
                  <span className="nav-label">CAKES</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#fb_review"
                  activeClassName="selected"
                  className="nav-link"
                >
                  <FontAwesomeIcon
                    icon={faComments}
                    className="bi bi-megaphone d-block d-flex justify-content-center mb-1  mx-auto fs-5"
                  />
                  <span className="nav-label">REVIEWS</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" className="nav-link">
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    className="bi bi-people d-block d-flex justify-content-center mb-1 mx-auto fs-5"
                  />
                  <span className="nav-label">ABOUT</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="nav-link position-relative">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="bi bi-people d-block d-flex justify-content-center mb-1 mx-auto fs-5"
                  />
                  <span className="position-absolute cart-number translate-middle badge rounded-pill b-primary">
                    10
                  </span>
                  <span className="nav-label">CART</span>
                </NavLink>
              </li>
              <li className="login">
                <NavLink
                  to="/login"
                  className="nav-link text-white d-flex align-items-center btn-login rounded-pill"
                >
                  <FontAwesomeIcon
                    icon={faRightToBracket}
                    className="bi bi-people mx-auto fs-5 me-2"
                  />
                  LOGIN
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <img
          src="images/layered.png"
          alt="layered"
          className="layered img-fluid w-100 position-absolute m-0"
        />
      </div>
    </header>
  );
}
