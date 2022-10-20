import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import * as actionProducts from "../redux/actions/actionProduct";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

export default function CartCakes() {
  const { getAllProducts } = bindActionCreators(actionProducts, useDispatch());
  const productList = useSelector((state) => state.productList);
  const [activeFilter] = useState("YES");

  useEffect(() => {
    getAllProducts();
  }, []);

  const renderCakeList = () => {
    return productList
    .filter((item) => item.featured === activeFilter)
    .map((item) => (
      <div className="col-12 col-md-6 col-lg-3 pb-5">
        <div className="cart-cake-card overflow-hidden rounded-4 bg-white position-relative">
          <img
              src={
                item.imageLink
                  ? `http://localhost:8080/product/${item.productId}/download`
                  : "/images/no-image.png"
              }
              alt={item.productName}
              className="img-fluid"
          />
          <span className="position-absolute base-like fs-2">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span className="position-absolute new-col-like fs-4">
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </div>
        <p className="m-0 text-center fw-semibold mt-2 item-name">
        {item.productName}
        </p>
        <hr className="w-75 mx-auto my-2" />
        <p className="m-0 fw-bolder text-center">{`₱ ${item.price}`}</p>
        <hr className="w-75 mx-auto my-2" />
        <Link
          to={`/cake/${item.productId}`}
          className="cart-cake-btn d-block text-white text-center text-decoration-none p-2 rounded-3 w-50 mx-auto mt-3"
        >
          More details
        </Link>
      </div>
    ));
  };

  return (
    <>
      <section id="cart-cake">
        <div className="container px-5 pt-5 pt-md-0 pb-0 pb-md-5">
          <h2 className="fw-bolder m-0 text-uppercase text-center pb-5">
            <strong>You May Also Like Our<br/>New Collections</strong>
          </h2>
          <div className="row justify-content-center">{renderCakeList()}</div>
        </div>
      </section>
    </>
  );
}
