import React from "react";
import { Carousel } from "react-bootstrap";

export default function Hero() {
  return (
    <section id="hero">
      <Carousel className="d-flex ">
        <Carousel.Item>
          <img
            src="images/dripCakes.jpg"
            alt="Cake1"
            className="cake-no-zoom img-fluid w-100"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="images/themeCakes.jpg"
            alt="Cake2"
            className="img-fluid w-100"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="images/characterCakes.jpg"
            alt="Cake3"
            className="img-fluid w-100"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
