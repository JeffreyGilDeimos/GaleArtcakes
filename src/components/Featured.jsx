import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

export default function Featured() {
  return (
    <section class="py-5">
      <div class="container">
        <div class="text-center pb-5">
          <h4>FEATURED SELECTIONS</h4>
        </div>
        <div class="row g-0 d-flex justify-content-center">
          <div class="col-sm-6 col-md-4 col-lg-2 pb-3">
            <div class="selection-item text-center">
              <div class="selection-img overflow-hidden">
                <NavLink to="/Menu">
                  <img src="images/choco1.png" alt="Choco" />
                </NavLink>
              </div>
              <div class="selection-text">
                <h5 class="pt-2">Chocolate Drip Cakes</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2 pb-3">
            <div class="selection-item text-center">
              <div class="selection-img overflow-hidden">
                <NavLink to="/Menu">
                  <img src="images/theme1.png" alt="Theme Cakes" />
                </NavLink>
              </div>
              <div class="selection-text">
                <h5 class="pt-2">Chocomoist Themed Cakes</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2 pb-3">
            <div class="selection-item text-center">
              <div class="selection-img overflow-hidden">
                <NavLink to="/Menu">
                  <img src="images/character1.png" alt="Choco" />
                </NavLink>
              </div>
              <div class="selection-text">
                <h5 class="pt-2">Cartoon/Character Cakes</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2 pb-3">
            <div class="selection-item text-center">
              <div class="selection-img overflow-hidden">
                <NavLink to="/Menu">
                  <img src="images/number1.png" alt="Choco" />
                </NavLink>
              </div>
              <div class="selection-text">
                <h5 class="pt-2">Number Cakes</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
