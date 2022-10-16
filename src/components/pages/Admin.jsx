import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminProducts from "../AdminProducts";
import AdminReviews from "../AdminReviews";
import Footer from "../Footer";
import Navigation from "../Navigation";

export default function Admin() {
  const localstorage = useSelector((state) => state.localstorage);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.email !== "admin@admin.com") {
      navigate("/");
    }
  }, [navigate, localStorage.email]);

  if (localStorage.email !== "admin@admin.com") {
    return;
  }

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
