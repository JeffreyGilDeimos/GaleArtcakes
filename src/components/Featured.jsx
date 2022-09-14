import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

export default function Featured() {
  return (
    <section className="featured-bg">
      <div className="container p-5">
        <h1 className="fw-bolder m-0 text-uppercase text-center pb-5">
          <strong>Featured Selections</strong>
        </h1>
        <div className="d-lg-flex justify-content-around align-items-center">
          <div className="first-feature d-flex justify-content-between align-items-center w-100">
            <div className="w-50">
              <div className="featured-card rounded-circle bg-white overflow-hidden d-block m-auto">
                <NavLink to={`/cakes/${1}`}>
                  <img
                    src="../images/choco1.png"
                    alt="Choco"
                    className="featured-img d-block m-auto"
                  />
                </NavLink>
              </div>
              <p className="mt-2 mb-0 text-center fw-bold p-2">
                Chocolate Drip<br /> Cakes
              </p>
            </div>
            <div className="w-50">
              <div className="featured-card rounded-circle bg-white overflow-hidden d-block m-auto">
                <NavLink to={`/cakes/${2}`}>
                  <img
                    src="../images/theme1.png"
                    alt="Theme Cakes"
                    className="featured-img d-block m-auto"
                  />
                </NavLink>
              </div>
              <p className="mt-2 mb-0 text-center fw-bold p-2">
                Chocomoist<br /> Themed Cakes
              </p>
            </div>
          </div>
          <div className="second-feature mt-4 mt-lg-0 d-flex justify-content-between align-items-center w-100">
          <div className="w-50">
              <div className="featured-card rounded-circle bg-white overflow-hidden d-block m-auto">
                <NavLink to={`/cakes/${3}`}>
                  <img
                    src="../images/character1.png"
                    alt="Cartoon/Character Cakes"
                    className="featured-img d-block m-auto"
                  />
                </NavLink>
              </div>
              <p className="mt-2 mb-0 text-center fw-bold p-2">
              Cartoon /<br /> Character Cakes
              </p>
            </div>
            <div className="w-50">
              <div className="featured-card rounded-circle bg-white overflow-hidden d-block m-auto">
                <NavLink to={`/cakes/${4}`}>
                  <img
                    src="../images/number1.png"
                    alt="Number Cakes"
                    className="featured-img d-block m-auto"
                  />
                </NavLink>
              </div>
              <p className="mt-2 mb-0 text-center fw-bold p-2">
                Number<br/> Cakes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
