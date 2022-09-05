import React from "react";
import carPic1 from "./img/dripCakes.jpg";
import carPic2 from "./img/themeCakes.jpg";
import carPic3 from "./img/characterCakes.jpg";

export default function Carousel() {
  return (
    // <!-- ---- Hero ---- -->
    <section id="hero" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#hero"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#hero"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#hero"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div class="carousel-inner d-flex">
        <div class="carousel-item active" data-bs-interval="5000">
          <img src={carPic1} alt="Cake1" class="img-fluid w-100" />
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src={carPic2} alt="Cake2" class="img-fluid w-100" />
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src={carPic3} alt="Cake3" class="img-fluid w-100" />
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-slide="prev"
          data-bs-target="#hero"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-slide="next"
          data-bs-target="#hero"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}
