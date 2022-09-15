import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCake,
  faComments,
  faUserGroup,
  faCartShopping,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import * as actionUser from "../redux/actions/actionUser";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "react-spinkit";

export default function Navigation() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const activeUser = useSelector((state) => state.activeUser);
  const { logoutUser } = bindActionCreators(actionUser, useDispatch());

  const logout = (e) => {
    e.preventDefault();
    auth.signOut();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      logoutUser();
      navigate("/login");
    }, 1000);
  };

  const renderNavigation = () => {
    return (
      <Navbar id="header">
        <div className="p-2 p-lg-3 nav-bg-color fixed-top">
          <Container className="position-relative">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <NavLink
                to="/"
                className="d-flex align-items-center my-1
              my-lg-0 me-lg-auto text-decoration-none"
              >
                <img
                  src="../images/Logo.png"
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
                  <NavLink to={`/cakes/${5}`} className="nav-link">
                    <FontAwesomeIcon
                      icon={faCake}
                      className="bi bi-menu-button-wide-fill d-block d-flex justify-content-center mb-1 mx-auto fs-5"
                    />
                    <span className="nav-label">CAKES</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/#review" className="nav-link">
                    <FontAwesomeIcon
                      icon={faComments}
                      className="bi bi-megaphone d-block d-flex justify-content-center mb-1  mx-auto fs-5"
                    />
                    <span className="nav-label">REVIEWS</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="nav-link">
                    <FontAwesomeIcon
                      icon={faUserGroup}
                      className="bi bi-people d-block d-flex justify-content-center mb-1 mx-auto fs-5"
                    />
                    <span className="nav-label">ABOUT</span>
                  </NavLink>
                </li>
                {activeUser.email ? (
                  <>
                    <li>
                      <NavLink
                        to="/cart"
                        className="nav-link position-relative"
                      >
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
                        onClick={logout}
                      >
                        LOGOUT
                        <FontAwesomeIcon
                          icon={faRightFromBracket}
                          className="bi bi-people mx-auto fs-5 ms-2"
                        />
                      </NavLink>
                    </li>
                  </>
                ) : (
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
                )}
              </ul>
            </div>
          </Container>
          <img
            src="../images/layered.png"
            alt="layered"
            className="layered img-fluid w-100 position-absolute m-0"
          />
        </div>
      </Navbar>
    );
  };

  if (loading) {
    return (
      <>
        <div className="loading-base">
          <div className="loading-auth bg-white rounded-circle">
            <Spinner
              name="ball-spin-fade-loader"
              fadeIn="none"
              style={{ color: "#6a2101" }}
            />
          </div>
        </div>
        {renderNavigation()}
      </>
    );
  }

  return <>{renderNavigation()}</>;
}
