import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import { Link, useParams } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cakeList } from "../../utilities/enums";
import Skeleton from "react-loading-skeleton";
<<<<<<< Updated upstream
import * as actionProduct from "../../redux/actions/actionProduct";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase";
=======

// import { useAuthState } from "react-firebase-hooks/auth";
// import { db, auth } from "../../firebase";
>>>>>>> Stashed changes
import * as cartAction from "../../redux/actions/actionCart";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";

export default function Cake() {
  // const { addToCart } = bindActionCreators(cartAction, useDispatch());
  // const cartLists = useSelector((state) => state.cartLists);
  // const [user] = useAuthState(auth);
  const { id } = useParams();
  const [cakes, setCakes] = useState([]);
  const [like, setLike] = useState("");
<<<<<<< Updated upstream
  const [numLike, setNumLike] = useState(0);
=======
  const [numLike, setNumLike] = useState(1)
>>>>>>> Stashed changes
  const [loading, setLoading] = useState(false);
  const { getProduct } = bindActionCreators(actionProduct, useDispatch());
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
   
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getProduct(id).then((response) => {
        setCakes(response.payload);
        setLoading(false);
      }, 1000);
    });
  }, [id])  

  const handlelikes = () => {
    setNumLike((prev) => 
      prev + 1
    )
  }
  // const checkItem = (item) => {
  //   if(!cartLists.find((cart) => cart.id === item.id)) { // you can also change `name` to `id`
  //     arr.push(item);
  //   }
  // }

  // const handleAddToCart = (item) => {
  //   console.log(cartLists);
  //   if (cartLists.find((cart) => cart.id === item.id)) {
  //     setShowModal2(true);
  //     return null;
  // return alert("Product has already been added to cart.");
  // }
  // item.quantity = 1;
  // addToCart(item);
  // setShowModal1(true);

  const handlelikes = () => {
    setNumLike((prev) => {
      return prev + 1
    })
  }

  const renderCake = () => {
    return (
      <div className="row py-md-5">
        <div className="col-lg-6">
          <div className="product p-4 m-auto rounded-4 bg-white">
            <img
              src={
                cakes.imageLink
                  ? `http://localhost:8080/product/${cakes.productId}/download`
                  : "/images/empty-img.png"
              }
              alt={cakes.productName}
              className="d-block m-auto w-100 h-auto rounded-3"
            />
          </div>
        </div>
        <div className="col-lg-6 pt-5 pt-lg-0">
          <h5 className="text-uppercase text-black-50">{cakes.category}</h5>
          <h1 className="display-6 cake-name fw-bolder">{cakes.productName}</h1>
          <h2 className="fw-bolder my-4">{`₱ ${cakes.price}`}</h2>
          <p className="lead fw-normal m-0">{cakes.description}</p>
          <ul className="my-4 ps-4 ps-lg-5">
            <li>Prices may vary according to sizes.</li>
            <li>Prices may change without any prior notice.</li>
            <li>
              <strong>
                <em>Additional disclaimer: </em>
              </strong>
              Actual food presentation may vary.
            </li>
          </ul>
          <button
            className="cake-btn-add rounded-3 mb-3 mb-md-0 me-3 text-uppercase fw-bold"
            // onClick={(e) => {
            //   handleAddToCart(item);
            // }}
          >
            Add to Cart
          </button>
          <Link
            to="/cart"
            className="cake-btn-go text-decoration-none rounded-3 text-white m-0 text-uppercase fw-bold"
          >
            Go to Cart
          </Link>
          <hr className="mt-4 mb-3" />
          <div className="d-md-flex justify-content-space-between align-items-center">
            <p className="w-100 m-0 text-center d-md-flex justify-content-start">
              <small>
                <em>Don't forget to give this cake a like</em>
              </small>
            </p>
            <div className="w-100 text-center d-md-flex justify-content-end align-items-center">
              <button
                className="me-md-2 mt-2 mt-md-0 fs-5 border-0 bg-transparent p-0"
<<<<<<< Updated upstream
                // hearts = {() => setLike(like ? "" : "d")}
                onClick={handlelikes}
              >
                <FontAwesomeIcon icon={faHeart} className={`like${like}`} />
              </button>
              <p className="m-0 fw-semibold">
              <small> {numLike} {numLike >= 2  ? "Likes" : "Like"} </small>                
              </p>
=======
                // onClick={() => setLike(like ? "" : "d")}
                onClick={handlelikes}
              >
                <FontAwesomeIcon icon={faHeart} className={`like${like}`} />
                <span className="m-0 fw-semibold">
                <small> {numLike} like/s</small>
                </span>
                </button>
>>>>>>> Stashed changes
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLoading = () => {
    return (
      <div className="d-lg-flex py-md-5">
        <div className="col-12 col-lg-6 pb-5 pb-lg-0 pe-lg-5">
          <Skeleton height={400} />
        </div>
        <div className="col-12 col-lg-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={200} />
          <Skeleton height={75} width={300} />
          <Skeleton height={35} width={150} />
          <Skeleton height={75} />
          <Skeleton height={60} width={350} />
          <Skeleton height={50} width={200} />
        </div>
      </div>
    );
  };

  const closeModal = () => {
    setShowModal1(false);
    setShowModal2(false);
  };

  return (
    <>
      <Navigation />
      <section id="cake">
        <div className="container p-5">
          {loading ? renderLoading() : renderCake()}
        </div>
      </section>
      <Footer />

      {/* Modals */}
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
              Great! Product has been added to your cart successfully.
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

      <Modal
        show={showModal2}
        className="h-100 d-flex justify-content-center align-items-center"
        id="cakeModal2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered m-4 rounded-3">
          <div className="modal-content">
            <div className="modal-body mx-3 text-center">
              This product has already been added to your cart.
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
    </>
  );
}
