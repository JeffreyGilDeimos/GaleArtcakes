import React from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import Hero from "../Hero";
import Featured from "../Featured";
import Reviews from "../Reviews";
import NewCollections from "../NewCollections";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Featured />
      <NewCollections />
      <Reviews />
      <Footer />
    </>
  );
}
