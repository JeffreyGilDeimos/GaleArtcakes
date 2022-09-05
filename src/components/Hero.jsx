import React from "react";
import { Carousel } from "react-bootstrap";
import carPic1 from "./img/dripCakes.jpg";
import carPic2 from "./img/themeCakes.jpg";
import carPic3 from "./img/characterCakes.jpg";

export default function Hero() {
  return (
    <section id="hero">
      <Carousel class="d-flex ">
        <Carousel.Item>
          <img src={carPic1} alt="Cake1" class="img-fluid w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={carPic2} alt="Cake2" class="img-fluid w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={carPic3} alt="Cake3" class="img-fluid w-100" />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
