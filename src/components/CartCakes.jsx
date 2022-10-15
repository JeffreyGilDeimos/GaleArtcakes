import React from "react";
import { Link } from "react-router-dom";

export default function CartCakes() {
  const renderCakeList = () => {
    return (
      <div className="col-12 col-md-6 col-lg-3 pb-5">
        <div className="cart-cake-card overflow-hidden rounded-4 bg-white position-relative">
          <img
            src="/images/no-image.png"
            alt="item.name"
            className="img-fluid"
          />
        </div>
        <p className="m-0 text-center fw-semibold mt-2 item-name">
          Produt Name
        </p>
        <hr className="w-75 mx-auto my-2" />
        <p className="m-0 fw-bolder text-center">₱ 000.00</p>
        <hr className="w-75 mx-auto my-2" />
        <Link
          to="/cake/5"
          className="cart-cake-btn d-block text-white text-center text-decoration-none p-2 rounded-3 w-50 mx-auto mt-3"
        >
          More details
        </Link>
      </div>
    );
  };

  return (
    <>
      <section id="cart-cake">
        <div className="container px-5 pt-5 pt-md-0 pb-0 pb-md-5">
          <h1 className="fw-bolder m-0 text-uppercase text-center pb-5">
            <strong>You May Also Like</strong>
          </h1>
          <div className="row justify-content-center">{renderCakeList()}</div>
        </div>
      </section>
    </>
  );
}
