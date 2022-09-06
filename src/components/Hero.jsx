import React from "react";
import { Carousel } from "react-bootstrap";

export default function Hero() {
  return (
    <section id="hero">
      <Carousel class="d-flex ">
        <Carousel.Item>
          <img src="images/dripCakes.jpg" alt="Cake1" class="img-fluid w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="images/themeCakes.jpg"
            alt="Cake2"
            class="img-fluid w-100"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="images/characterCakes.jpg"
            alt="Cake3"
            class="img-fluid w-100"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
