import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import { Link, useParams } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cakeList } from "../../utilities/enums";
import Skeleton from "react-loading-skeleton";

import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase";
import * as cartAction from "../../redux/actions/actionCart";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Cake() {
  const { addToCart } = bindActionCreators(cartAction, useDispatch());

  const cartLists = useSelector((state) => state.cartLists);
  // const [user] = useAuthState(auth);
  const { id } = useParams();
  const [activeFilter] = useState(parseInt(id));
  const [cakes, setCakes] = useState(cakeList);
  const [like, setLike] = useState("");
  const [loading, setLoading] = useState(false);
  // const activeUser = useSelector((state) => state.activeUser);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setCakes(cakeList.filter((item) => item.id === activeFilter));
      setLoading(false);
    }, 1000);
  }, [activeFilter]);

  // const checkItem = (item) => {
  //   if(!cartLists.find((cart) => cart.id === item.id)) { // you can also change `name` to `id`
  //     arr.push(item);
  //   }
  // }

  const handleAddToCart = (item) => {
    console.log(cartLists);
    if (cartLists.find((cart) => cart.id === item.id)) {
      return console.log("Product has been added to cart");
    }
    item.quantity = 1;
    addToCart(item);

    // if (user) {
    //   db.collection("cartLists").add({
    //     userId: user.uid,
    //     item,
    //   });
    // }
  };

  const renderCake = () => {
    return cakes.map((item) => (
      <div className="row py-md-5" key={item.id}>
        <div className="col-lg-6">
          <div className="product p-4 m-auto rounded-4 bg-white">
            <img
              src={`../${item.image}`}
              alt={item.name}
              className="d-block m-auto w-100 h-auto rounded-3"
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
          <button
            className="cake-btn-add rounded-3 mb-3 mb-md-0 me-3 text-uppercase fw-bold"
            onClick={(e) => {
              handleAddToCart(item);
            }}
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
