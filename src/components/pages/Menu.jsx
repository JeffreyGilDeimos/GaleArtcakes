import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import { Link, useParams } from "react-router-dom";
import { cakeList } from "../../utilities/enums";
import Featured from "../Featured";
import Skeleton from "react-loading-skeleton";

export default function Menu() {
  const { id } = useParams();
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [cakes, setCakes] = useState(cakeList);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (parseInt(id) === 1) {
        setActiveFilter("Chocolate Drip Cake");
        setCategory("Chocolate Drip Cake");
      } else if (parseInt(id) === 2) {
        setActiveFilter("Themed Cake");
        setCategory("Themed Cake");
      } else if (parseInt(id) === 3) {
        setActiveFilter("Cartoon/Chartacter Cake");
        setCategory("Cartoon/Chartacter Cake");
      } else if (parseInt(id) === 4) {
        setActiveFilter("Number Cake");
        setCategory("Number Cake");
      } else if (parseInt(id) === 5) {
        setActiveFilter("ALL");
        setCategory("");
      }
      if (activeFilter !== "ALL") {
        setCakes(cakeList.filter((item) => item.category === activeFilter));
        setLoading(false);
      } else {
        setCakes(cakeList);
        setLoading(false);
      }
    }, 400);
  }, [activeFilter, id]);

  const renderLoading = () => {
    return (
      <div className="row g-3 pb-5">
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
      </div>
    );
  };

  const renderMenu = () => {
    return cakes.map((item) => (
      <div className="col-sm-6 col-md-4 col-lg-3 pb-5" key={item.id}>
        <div className="card-img overflow-hidden rounded">
          <img src={`../${item.image}`} alt={item.name} className="img-fluid" />
        </div>
        <div className="text-center">
          <p className="text-capitalize mb-1 fs-5">{item.name}</p>
          <span className="fw-bold d-block mt-1 mb-2">{`₱ ${item.price}`}</span>

          <Link to={`/cake/${item.id}`} className="btn btn-danger">
            More details
          </Link>
        </div>
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
        <div className="container d-flex justify-content-between pb-4 pt-5">
          <h4>{category}</h4>
          <form
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
          </form>
        </div>
        <div className="container pb-5">
          <div className="row">{loading ? renderLoading() : renderMenu()}</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
