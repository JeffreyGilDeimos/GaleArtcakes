import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import { Link, useParams } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cakeList } from "../../utilities/enums";
import Skeleton from "react-loading-skeleton";

export default function Cake() {
  const { id } = useParams();
  const [activeFilter] = useState(parseInt(id));
  const [cakes, setCakes] = useState(cakeList);
  const [like, setLike] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setCakes(cakeList.filter((item) => item.id === activeFilter));
      setLoading(false);
    }, 600);
  }, [activeFilter]);

  const renderCake = () => {
    return cakes.map((item) => (
      <div className="row py-md-5" key={item.id}>
        <div className="col-lg-6">
          <div className="product p-4 m-auto rounded-4 bg-white">
            <img
              src={`../${item.image}`}
              alt={item.name}
              className="d-block m-auto w-100 h-auto"
            />
          </div>
        </div>
        <div className="col-lg-6 pt-5 pt-lg-0">
          <h5 className="text-uppercase text-black-50">{item.category}</h5>
          <h1 className="display-6 cake-name fw-bolder">{item.name}</h1>
          <h2 className="fw-bolder my-4">{`₱ ${item.price}`}</h2>
          <p className="lead fw-normal m-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,
            numquam a animi expedita sed blanditiis sint ea harum quidem!
            Dolore, quos voluptatibus!
          </p>
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
          <button className="cake-btn-add rounded-3 mb-3 mb-md-0 me-3 text-uppercase fw-bold">
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
                onClick={() => setLike(like ? "" : "d")}
              >
                <FontAwesomeIcon icon={faHeart} className={`like${like}`} />
              </button>
              <p className="m-0 fw-semibold">
                <small>10 likes</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const renderLoading = () => {
    return (
      <div className="d-flex py-5">
        <div className="col-md-6 px-5">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
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

  return (
    <>
      <Navigation />
      <section id="cake">
        <div className="container p-5">
          {loading ? renderLoading() : renderCake()}
        </div>
      </section>
      <Footer />
    </>
  );
}
