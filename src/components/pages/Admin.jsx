import React from "react";
import AdminProducts from "../AdminProducts";
import AdminReviews from "../AdminReviews";
import Footer from "../Footer";
import Navigation from "../Navigation";

export default function Admin() {
  return (
    <>
      <Navigation />
      <section id="admin">
        <AdminProducts />
        <AdminReviews />
      </section>
      <Footer />
    </>
  );
}
