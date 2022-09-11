import React from "react";
import "./auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth">
      <div className="page-content d-flex align-items-center">
        <div className="container d-flex justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
            <div className="auth-card bg-white rounded-4">
              <img
                src="images/auth-card-bg.png"
                alt="auth"
                className="w-100 h-auto rounded-4"
              />
              <div className="p-4 p-lg-5">
                <button className="service-btn border-0 w-100 text-white p-2 rounded-pill">
                  <FontAwesomeIcon icon={faGoogle} className="me-2" />
                  <span className="m-0"> Login with Google</span>
                </button>
                <br />
                <hr className="my-4" />
                <form>
                  <div className="row mb-3">
                    <label
                      for="login-email"
                      className="col-lg-3 col-form-label fw-bold text-lg-center"
                    >
                      Email
                    </label>
                    <div className="col-lg-9">
                      <input
                        className="form-control rounded-3"
                        type="email"
                        id="login-email"
                        placeholder="Email Address"
                        required
                      />
                      <div className="invalid-feedback m-0">
                        <small>Invalid Email. Please try again!</small>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <label
                      for="login-password"
                      className="col-lg-3 col-form-label fw-bold text-lg-center"
                    >
                      Password
                    </label>
                    <div className="col-lg-9">
                      <input
                        className="form-control rounded-3 is-invalid"
                        // the class "is-invalid" activates the invalid-feedback
                        type="password"
                        id="login-password"
                        placeholder="Password"
                        required
                      />
                      <div className="invalid-feedback m-0">
                        <small>Invalid Password. Please try again!</small>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="login-btn w-100 border-0 text-white p-2 rounded-pill my-4 fw-bolder"
                  >
                    LOGIN
                  </button>
                  <p className="text-center m-0 fs-6">
                    <small>
                      Don't have an account?&nbsp;
                      <Link to="/signup" className="text-muted">
                        <strong>
                          <em>Register here</em>
                        </strong>
                      </Link>
                    </small>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
