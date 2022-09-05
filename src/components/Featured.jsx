import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import choco1 from "./img/choco1.png";
import theme1 from "./img/theme1.png";
import character1 from "./img/character1.png";
import number1 from "./img/number1.png";

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
                <NavLink to="/Menu#varities">
                  <img src={choco1} alt="Choco" />
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
                <NavLink to="/Menu#varities">
                  <img src={theme1} alt="Theme Cakes" />
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
                <NavLink to="/Menu#varities">
                  <img src={character1} alt="Choco" />
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
                <NavLink to="/Menu#varities">
                  <img src={number1} alt="Choco" />
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
