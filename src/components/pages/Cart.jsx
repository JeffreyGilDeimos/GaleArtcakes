import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import * as actionCart from "../../redux/actions/actionCart";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { Form, Modal } from "react-bootstrap";
import Footer from "../Footer";
import Navigation from "../Navigation";
import utils from "../../utilities/utils";
import CartCakes from "../CartCakes";

export default function Cart() {
  const [total, setTotal] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const activeUser = localStorage;
  const navigate = useNavigate();
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const { getAllProductsByUser, checkOut, deleteFromCart } = bindActionCreators(
    actionCart,
    useDispatch()
  );
  const cartLists = useSelector((state) => state.cartLists);

  useEffect(() => {
    if (!activeUser.email) {
      navigate("/login");
    }
  });

  useEffect(() => {
    if (localStorage.email) {
      getAllProductsByUser(activeUser.email).then((response) => {
        setCartProducts(response.payload);
      });
    }
  }, []);

  useEffect(() => {
    let value = 0;
    cartProducts?.forEach((product) => {
      const productValue =
        product.price * (product.quantity ? product.quantity : 1);
      value = value + productValue;
    });
    setTotal(value);
  }, [cartProducts]);

  const handleCheckOut = (e) => {
    e.preventDefault();
    checkOut(activeUser.email).then((response) => {
      setShowModal1(true);
      setCartProducts(response.payload);
    });
  };

  const closeModal = (e) => {
    e.preventDefault();
    setShowModal1(false);
    setShowModal2(false);
    window.location.reload();
  };

  const setQuantity = (productId, quantity) => {
    const newProductList = [];

    cartProducts.forEach((data) => {
      if (productId === data.productId) {
        newProductList.push({
          productId: data.productId,
          productName: data.productName,
          imageLink: data.imageLink,
          price: data.price,
          quantity: quantity,
        });
      } else {
        newProductList.push(data);
      }
    });
    setCartProducts(newProductList);
  };

  return (
    <>
      <Navigation />
      <section id="cart">
        <div className="container cart-container p-5">
          <div className="py-md-5">
            <div className="cart-mobile">
              <div className="m-0 cart-title d-flex align-items-center justify-content-around">
                <h6 className="fw-bolder text-uppercase m-0 text-center" style={{ width: "120px" }}>
                  <strong>Cake</strong>
                </h6>
                <h6 className="fw-bolder text-uppercase m-0 text-center" style={{ width: "140px" }}>
                  <strong>Name</strong>
                </h6>
                <h6 className="fw-bolder text-uppercase m-0 text-center">
                  <strong>Unit Price</strong>
                </h6>
                <h6 className="fw-bolder text-uppercase m-0 text-center">
                  <strong>Quantity</strong>
                </h6>
                <h6 className="fw-bolder text-uppercase m-0 text-center">
                  <strong>Total Price</strong>
                </h6>
                <h6 className="fw-bolder text-uppercase m-0 text-center">
                  <strong>Action</strong>
                </h6>
              </div>
              <hr className="my-4" />
              <br />
            </div>
            {cartProducts && cartProducts?.length === 0 && (
              <div>
                <h6 className="text-center d-block m-0">
                  No product has been added to your cart. Please continue
                  shopping...
                </h6>
                <br />
              </div>
            )}

            {/* RENDER THIS PART */}
            {cartProducts?.map((item) => (
              <div
                key={item.productId}
                className="incart bg-white p-3 mb-4 d-flex justify-content-between align-items-center rounded-4"
              >
                <div className="incart-cake-lg text-center w-100 d-lg-flex align-items-center justify-content-around">
                  <img
                    src={
                      item.imageLink
                        ? `http://localhost:8080/product/${item.productId}/download`
                        : "/images/no-image.png"
                    }
                    alt={item.productName}
                    className="incart-cake d-block m-auto m-lg-0 rounded-3"
                  />

                  <h5 className="mt-3 mb-1 m-lg-0">
                    {item.productName.substring(0, 10)}...
                  </h5>
                  <p className="m-0">{utils.toPhp.format(item.price)}</p>
                  <div className="cart-select d-flex align-items-center justify-content-center my-3 mx-auto m-lg-0">
                    <Form.Select
                      aria-label="QTY"
                      onChange={(e) =>
                        setQuantity(item.productId, e.target.value)
                      }
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </Form.Select>
                  </div>
                  <span className="fw-bolder text-uppercase mobile-total">
                    <strong>Total Price:</strong>
                  </span>
                  <p className="m-0">
                    {utils.toPhp.format(
                      item.price * (item.quantity ? item.quantity : 1)
                    )}
                  </p>
                <FontAwesomeIcon
                  icon={faTrash}
                  type="button"
                  className="trash fs-5 mt-3 mt-lg-2 m-2 "
                  // onClick={() =>
                  //   deleteFromCart(activeUser.email, item.productId)
                  // }
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                />
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
                            // onClick={() => window.location.reload()}
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() =>
                              deleteFromCart(activeUser.email, item.productId)
                            }
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
                          The item has been deleted successfully.
                        </div>
                        <div className="modal-footer border-0">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={() => window.location.reload()}
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
                    Total ({cartLists?.length} item/s) : &nbsp;
                  </h6>
                  <h5 className="fw-bold m-0">{utils.toPhp.format(total)}</h5>
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
