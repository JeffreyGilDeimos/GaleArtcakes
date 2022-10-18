import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import * as actionProducts from "../redux/actions/actionProduct";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
// import { cakeList } from "../utilities/enums";

export default function NewCollections() {
  const { getAllProducts } = bindActionCreators(actionProducts, useDispatch());
  const productList = useSelector((state) => state.productList);
  const [activeFilter] = useState("YES");
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    getAllProducts().then((response) => {
      const allCakes = response.payload.filter(
        (item) => item.featured === activeFilter
      );
      setCakes(allCakes);
    });
  }, [activeFilter]);

  // useEffect(() => {
  //   getAllProducts().then((response) => {
  //     const allCakes = response.payload.filter((item) => item.featured === activeFilter));
  //     setCakes(allCakes);
  //   }
  //   });

  // setCakes(cakeList.filter((item) => item.featured === activeFilter));
  // }, [activeFilter]);

  const renderCakeList = () => {
    return cakes.map((item) => (
      <div className="col-12 col-md-6 col-lg-3 pb-5" key={item.productId}>
        <div className="new-col-card overflow-hidden rounded-4 bg-white position-relative">
          <img
            src={
              item.imageLink
                ? `http://localhost:8080/product/${item.productId}/download`
                : "/images/empty-img.png"
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
          className="new-col-btn d-block text-white text-center text-decoration-none p-2 rounded-3 w-50 mx-auto mt-3"
        >
          More details
        </Link>
      </div>
    ));
  };

  return (
    <>
      <section id="varities">
        <div className="container px-5 pt-5">
          <h1 className="fw-bolder m-0 text-uppercase text-center pb-5">
            <strong>New Collections</strong>
          </h1>
          <div className="row justify-content-center">{renderCakeList()}</div>
        </div>
      </section>
    </>
  );
}
