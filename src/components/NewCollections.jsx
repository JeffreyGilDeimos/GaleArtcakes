import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { cakeList } from "../utilities/enums";

export default function NewCollections() {
  const [activeFilter] = useState("YES");
  const [cakes, setCakes] = useState(cakeList);

  useEffect(() => {
    setCakes(cakeList.filter((item) => item.featured === activeFilter));
  }, [activeFilter]);

  const renderCakeList = () => {
    return cakes.map((item) => (
      <div className="col-sm-6 col-md-4 col-lg-3 pb-4" key={item.id}>
        <div className="card-img-new overflow-hidden rounded position-relative">
          <img src={item.image} alt={item.name} className="img-fluid " />
          <span className="position-absolute d-flex align-items-center justify-content-center text-danger fs-3">
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </div>
        <div className="text-center">
          <p className="text-capitalize mt-3 mb-1 fs-5">{item.name}</p>
          <span className="fw-bold d-block">{item.price}</span>

          <Link to={`/Cake/${item.id}`} className="btn btn-danger mt-3">
            More details
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <section id="varities">
        <div className="text-center py-5">
          <h4>NEW COLLECTIONS</h4>
        </div>
        <div className="container pb-5">
          <div className="row">{renderCakeList()}</div>
        </div>
      </section>
    </div>
  );
}
