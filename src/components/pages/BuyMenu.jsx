import React from "react";
import { Link } from "react-router-dom";

export default function BuyMenu() {
  return (
    <section id="buyMenu">
      <div className="container p-5">
        <div className="row py-md-5">
          <div className="col-lg-6">
            <div className="product p-4 m-auto rounded-4">
              <img src="images/choco1.png" alt="Choco" className="d-block m-auto w-100 h-auto" />
            </div>
          </div>
          <div className="col-lg-6">
            <h4 className="text-uppercase text-black-50">
              Chocolate Drip Cake
            </h4>
            <h1 className="display-5">Chocolate Drip Var101</h1>
            <p className="lead fw-bolder">Rating</p>
            <h3 className="display-6 fw-bold my-4">$ 600</h3>
            <p className="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis, numquam a animi expedita sed libero blanditiis
              explicabo doloribus sint ea harum quidem! Dolore, quos
              voluptatibus!
            </p>
            <button className="btn btn-outline-dark px-4 py-2">
              Add to Cart
            </button>
            <Link to="/Cart" className="btn btn-dark ms-2 px-3 py-2">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
