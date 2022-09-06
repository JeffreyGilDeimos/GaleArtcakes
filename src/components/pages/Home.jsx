import React from "react";
import Hero from "../Hero";
import Featured from "../Featured";
import Reviews from "../Reviews";
import NewCollections from "../NewCollections";

export default function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <NewCollections />
      <Reviews />
    </div>
  );
}
