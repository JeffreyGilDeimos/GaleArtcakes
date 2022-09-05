import React from "react";
import Carousel from "../Carousel";
import Featured from "../Featured";
import Reviews from "../Reviews";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Featured />
      <Reviews />
    </div>
  );
}
