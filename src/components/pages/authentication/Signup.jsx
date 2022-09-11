import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";

export default function Signup() {
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
                <form>
                  <div className="row mb-3">
                    <label
                      for="login-user"
                      className="col-lg-4 col-form-label fw-bold text-lg-center"
                    >
                      Username
                    </label>
                    <div className="col-lg-8">
                      <input
                        className="form-control rounded-3 is-invalid"
                        // the class "is-invalid" activates the invalid-feedback
                        type="text"
                        id="login-user"
                        placeholder="Username"
                        required
                      />
                      <div className="invalid-feedback m-0">
                        <small>
                          Username already exists. Please try again!
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      for="login-email"
                      className="col-lg-4 col-form-label fw-bold text-lg-center"
                    >
                      Email
                    </label>
                    <div className="col-lg-8">
                      <input
                        className="form-control rounded-3"
                        type="email"
                        id="login-email"
                        placeholder="Email Address"
                        required
                      />
                      <div className="invalid-feedback m-0">
                        <small>
                          Email Address already exists. Please try again!
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      for="login-password"
                      className="col-lg-4 col-form-label fw-bold text-lg-center"
                    >
                      Password
                    </label>
                    <div className="col-lg-8">
                      <input
                        className="form-control rounded-3"
                        type="password"
                        id="login-password"
                        placeholder="Password"
                        required
                      />
                      <div className="invalid-feedback m-0">
                        <small>
                          The password confirmation does not match. Please try
                          again!
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <label
                      for="login-confirm-password"
                      className="col-lg-4 col-form-label fw-bold text-lg-center"
                    >
                      Confirm Password
                    </label>
                    <div className="col-lg-8">
                      <input
                        className="form-control rounded-3"
                        type="password"
                        id="login-confirm-password"
                        placeholder="Confirm Password"
                        required
                      />
                      <div className="invalid-feedback m-0">
                        <small>
                          The password confirmation does not match. Please try
                          again!
                        </small>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="signup-btn w-100 border-0 text-white p-2 rounded-pill my-4 fw-bolder"
                    data-bs-toggle="modal"
                    data-bs-target="#signupModal"
                  >
                    REGISTER
                  </button>
                  <p className="text-center m-0 fs-6">
                    <small>
                      Already have an account?&nbsp;
                      <Link to="/login" className="text-muted">
                        <strong>
                          <em>Login now</em>
                        </strong>
                      </Link>
                    </small>
                  </p>

                  {/* Modal for Successful Registration */}
                  <div
                    className="modal fade"
                    id="signupModal"
                    tabIndex="-1"
                    aria-labelledby="signupModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header border-0">
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body mx-3 text-center">
                          Greate! Your account has been registered successfully.
                        </div>
                        <div className="modal-footer border-0">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
