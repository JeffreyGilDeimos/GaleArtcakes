import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import { Link, useParams } from "react-router-dom";
// import { cakeList } from "../../utilities/enums";
import Featured from "../Featured";
import Skeleton from "react-loading-skeleton";
import * as actionProducts from "../../redux/actions/actionProduct";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

export default function Menu() {
  const { id } = useParams();
  const { getAllProducts } = bindActionCreators(actionProducts, useDispatch());
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [cakes, setCakes] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    if (parseInt(id) === 1) {
      setActiveFilter("Chocolate Drip Cake");
      setCategory("Chocolate Drip Cakes");
    } else if (parseInt(id) === 2) {
      setActiveFilter("Themed Cake");
      setCategory("Themed Cakes");
    } else if (parseInt(id) === 3) {
      setActiveFilter("Cartoon/Character Cake");
      setCategory("Cartoon/Chartacter Cakes");
    } else if (parseInt(id) === 4) {
      setActiveFilter("Number Cake");
      setCategory("Number Cakes");
    } else if (parseInt(id) === 5) {
      setActiveFilter("ALL");
      setCategory("Cakes");
    }

    getAllProducts().then((response) => {
      setTimeout(() => {
        if (activeFilter !== "ALL") {
          const allProducts = response.payload.filter(
            (item) => item.category === activeFilter
          );
          setCakes(allProducts);
          setLoading(false);
        } else {
          const allProducts = response.payload;
          setCakes(allProducts);
          setLoading(false);
        }
      }, 500);
    });
  }, [activeFilter, id]);

  const renderLoading = () => {
    return (
      <div className="row g-3 pb-5">
        <div className="col-md-6 col-lg-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-6 col-lg-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-6 col-lg-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-6 col-lg-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-6 col-lg-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-6 col-lg-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-6 col-lg-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-6 col-lg-3">
          <Skeleton height={300} />
        </div>
      </div>
    );
  };

  const renderMenu = () => {
    return cakes.map((item) => (
      <div className="col-12 col-md-6 col-lg-3 pb-5" key={item.productId}>
        <div className="new-col-card overflow-hidden rounded-4 bg-white position-relative">
          <img
            src={
              item.imageLink
                ? `https://artcakes.herokuapp.com/product/${item.productId}/download`
                : "/images/no-image.png"
            }
            alt={item.productName}
            className="img-fluid"
          />
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
      {/* <!-- ---- Featured Selection ---- --> */}
      <Navigation />
      <section id="selection">
        <Featured />
      </section>

      {/* <!-- ---- Varities ---- --> */}
      <section id="varities">
        <div className="container px-5 pt-5 pb-0 pb-md-5">
          <h2 className="fw-bolder m-0 text-uppercase text-center pb-5">
            <strong>{category}</strong>
          </h2>

          {/* <form
            className=" d-flex align-items-center col-12 col-lg-auto mb-3 mb-lg-0"
            role="search"
          >
            <p className="text-capitalize mb-1 fs-5 me-2">Search:</p>
            <input
              type="search"
              className="form-control"
              placeholder="Search product..."
              aria-label="Search"
            />
          </form> */}

          <div className="row justify-content-center">
            {loading ? renderLoading() : renderMenu()}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
