import Footer from "../Footer";
import Navigation from "../Navigation";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [selected, setSelected] = useState("");

  return (
    <>
      <Navigation />
      <section id="cart">
        <div className="container p-5">
          <div className="py-md-5">
            <div className="cart-mobile">
              <div className="m-0 cart-title d-flex align-items-center justify-content-between">
                <h6 className="fw-bolder text-uppercase m-0">
                  <strong>Select</strong>
                </h6>
                <h6 className="fw-bolder text-uppercase ms-0 me-5 my-0">
                  <strong>Cake</strong>
                </h6>
                <h6 className="fw-bolder text-uppercase my-0 mx-5">
                  <strong>Name</strong>
                </h6>
                <h6 className="fw-bolder text-uppercase ms-5 me-0 my-0">
                  <strong>Unit Price</strong>
                </h6>
                <h6 className="fw-bolder text-uppercase m-0">
                  <strong>Quantity</strong>
                </h6>
                <h6 className="fw-bolder text-uppercase m-0">
                  <strong>Total Price</strong>
                </h6>
                <h6 className="fw-bolder text-uppercase m-0">
                  <strong>Action</strong>
                </h6>
              </div>
              <hr className="my-4" />
              <br />
            </div>

            {/* RENDER THIS PART */}
            <div
              className={`incart${selected} bg-white p-3 mb-4 d-flex align-items-center rounded-4`}
            >
              <input
                type="checkbox"
                className="select-cake m-2 cart-input"
                onClick={() => setSelected(selected ? "" : "-select")}
              />
              <div className="incart-cake-lg text-center w-100 d-lg-flex align-items-center">
                <Link to="/cake/5">
                  <img
                    src="../images/choco1.png"
                    alt="cake"
                    className="incart-cake d-block m-auto m-lg-0"
                  />
                </Link>
                <h5 className="mt-2 mb-1 m-lg-0">Choco Drip Var1</h5>
                <p className="m-0">₱ 700.00</p>
                <div className="d-flex align-items-center justify-content-center">
                  <button className="cart-circle m-0 p-0 border-0 text-white rounded-circle">
                    -
                  </button>
                  <p className="quantity-cart my-3 my-lg-0 mx-2 fw-semibold rounded-pill">
                    1
                  </p>
                  <button className="cart-circle m-0 p-0 border-0 text-white rounded-circle">
                    +
                  </button>
                </div>
                <span className="fw-bolder text-uppercase mobile-total">
                  <strong>Total Price:</strong>
                </span>
                <p className="m-0">₱ 700.00</p>
              </div>
              <FontAwesomeIcon
                icon={faTrash}
                type="button"
                className="trash-cake fs-5 m-2"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              />
            </div>

            <br />
            <hr className="mb-4 mt-0" />
            <div className="cart-bottom">
              <div className="d-flex align-items-center mb-2 mb-md-0 justify-content-center">
                <h6 className="m-0">Total (0 item):&nbsp;</h6>
                <h5 className="fw-bold m-0">₱ 0.00</h5>
              </div>
              <button
                className="cart-buy rounded-3 text-white text-uppercase fw-bold"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#checkOutModal"
              >
                Check Out
              </button>
            </div>

            {/* Modal for Delete */}
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header border-0">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      Delete <span>Choco Drip Var1</span>
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body body-delete mx-3 rounded-2 text-danger">
                    Are you sure you want to delete this item from your cart?
                  </div>
                  <div className="modal-footer border-0">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal for No Selected Item */}
            <div
              className="modal fade"
              id="checkOutModal"
              tabIndex="-1"
              aria-labelledby="checkOutModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header border-0">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body mx-3 text-center">
                    You have not selected any items for checkout
                  </div>
                  <div className="modal-footer border-0">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
