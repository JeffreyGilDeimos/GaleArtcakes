import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
//import { useCollection } from "react-firebase-hooks/firestore";
import * as cartAction from "../../redux/actions/actionCart";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";

import Footer from "../Footer";
import Navigation from "../Navigation";
import utils from "../../utilities/utils";
import CartCakes from "../CartCakes";

export default function Cart() {
  const [selected, setSelected] = useState("");
  const [user] = useAuthState(auth);
  const localstorage = useSelector((state) => state.localstorage);
  const navigate = useNavigate();
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  // const [fbCartLists] = useCollection(db.collection("cartLists"));
  const cartLists = useSelector((state) => state.cartLists);
  const { removeFromCart, updateQuantity } = bindActionCreators(
    cartAction,
    useDispatch()
  );

  // console.log(fbCartLists);

  const handlePlusCart = (item) => {
    const quantity = item.quantity;
    updateQuantity({
      ...item,
      quantity: quantity + 1,
    });
  };

  useEffect(() => {
    if (!user || !localstorage.email) {
      navigate("/login");
    }
  }, [navigate, user, localstorage.email]);

  if (!user || !localstorage.email) {
    return;
  }

  const handleMinusCart = (item) => {
    const quantity = item.quantity;
    if (item.quantity <= 1) {
      return;
    }
    updateQuantity({
      ...item,
      quantity: quantity - 1,
    });
  };

  const handleCheckOut = () => {
    setShowModal1(true);
  };

  const closeModal = () => {
    setShowModal1(false);
    setShowModal2(false);
  };

  return (
    <>
      <Navigation />
      <section id="cart">
        <div className="container cart-container p-5">
          <div className="py-md-5">
            <div className="cart-mobile">
              <div className="m-0 cart-title d-flex align-items-center justify-content-between">
                <h6 className="fw-bolder text-uppercase m-0">
                  <strong>Select</strong>
                </h6>
                <h6 className="fw-bolder text-uppercase ms-5 me-5 my-0">
                  <strong>Cake</strong>
                </h6>
                <h6 className="fw-bolder text-uppercase my-0 mx-5">
                  <strong>Name</strong>
                </h6>
                <h6 className="fw-bolder text-uppercase ms-4 me-3 my-0">
                  <strong>Unit Price</strong>
                </h6>
                <h6 className="fw-bolder text-uppercase me-3 ms-0 my-0">
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
            {cartLists && cartLists.length === 0 && (
              <div>
                <h6 className="text-center d-block m-0">
                  No product has been added to your cart. Please continue
                  shopping...
                </h6>
                <br />
              </div>
            )}

            {/* RENDER THIS PART */}
            {cartLists?.map((item) => (
              <div
                className={`incart${selected} bg-white p-3 mb-4 d-flex justify-content-between align-items-center rounded-4`}
              >
                <input
                  type="checkbox"
                  className="select-cake m-2 cart-input"
                  onClick={() => setSelected(selected ? "" : "-select")}
                />
                <div className="incart-cake-lg text-center w-100 d-lg-flex align-items-center justify-content-evenly">
                  <img
                    src={`../${item.image}`}
                    alt={item.name}
                    className="incart-cake d-block m-auto m-lg-0"
                  />

                  <h5 className="mt-2 mb-1 m-lg-0">
                    {item.name.substring(0, 12)}...
                  </h5>
                  <p className="m-0">{utils.toPhp.format(item.price)}</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <button
                      className="cart-circle m-0 p-0 border-0 text-white rounded-circle"
                      onClick={(e) => handleMinusCart(item)}
                    >
                      -
                    </button>
                    <p className="quantity-cart my-3 my-lg-0 mx-2 fw-semibold rounded-pill">
                      {item.quantity}
                    </p>
                    <button
                      className="cart-circle m-0 p-0 border-0 text-white rounded-circle"
                      onClick={(e) => {
                        handlePlusCart(item);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <span className="fw-bolder text-uppercase mobile-total">
                    <strong>Total Price:</strong>
                  </span>
                  <p className="m-0">
                    {utils.toPhp.format(item.price * item.quantity)}
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faTrash}
                  type="button"
                  className="trash fs-5 m-2"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                />

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
                    <div className="modal-content p-2 border-0">
                      <div className="border-0">
                        <div className="modal-header border-0">
                          <h5 className="modal-title" id="staticBackdropLabel">
                            Delete item
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body body-delete mx-3 rounded-2 text-danger">
                          Are you sure you want to delete this item from your
                          cart?
                        </div>
                        <div className="modal-footer border-0">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => removeFromCart(item.id)}
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop05"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="staticBackdrop05"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4 border-0">
                      <div className="border border-1 rounded-3">
                        <div className="modal-body mx-3 text-center">
                          Great! The item has been deleted successfully.
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
            ))}

            <br />
            <hr className="mb-4 mt-0" />
            <div className="cart-bottom">
              <Link
                to={`/cakes/${5}`}
                className="cont-shop rounded-3 text-center text-uppercase fw-bold mb-4 mb-md-0 text-decoration-none"
              >
                Continue Shopping
              </Link>
              <div className="for-checkout d-md-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center mb-2 mb-md-0 justify-content-center">
                  <h6 className="m-0">
                    Total ({cartLists.length} item):&nbsp;
                  </h6>
                  <h5 className="fw-bold m-0">{utils.calcTotal(cartLists)}</h5>
                </div>
                <button
                  className="cart-buy rounded-3 text-white text-uppercase fw-bold"
                  type="button"
                  onClick={() => handleCheckOut()}
                  data-bs-toggle="modal"
                  data-bs-target="#checkOutModal"
                >
                  Check Out
                </button>
              </div>
            </div>

            {/* Modal for No Selected Item */}
            <Modal
              show={showModal1}
              className="h-100 d-flex justify-content-center align-items-center"
              id="cakeModal1"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered m-4 rounded-3">
                <div className="modal-content">
                  <div className="modal-body mx-3 text-center">
                    You have not selected any items for checkout.
                  </div>
                  <div className="modal-footer border-0">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => closeModal()}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </Modal>

            {/* Modal for Successful Checkout*/}
            <Modal
              show={showModal2}
              className="h-100 d-flex justify-content-center align-items-center"
              id="cakeModal1"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered m-4 rounded-3">
                <div className="modal-content">
                  <div className="modal-body mx-3 text-center">
                    Congratulation! Successful Checkout.
                  </div>
                  <div className="modal-footer border-0">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => closeModal()}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </section>
      <CartCakes />
      <Footer />
    </>
  );
}
