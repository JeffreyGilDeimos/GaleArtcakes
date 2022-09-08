import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cakeList } from "../../utilities/enums";

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [cakes, setCakes] = useState(cakeList);

  useEffect(() => {
    if (activeFilter !== "ALL") {
      setCakes(cakeList.filter((item) => item.category === activeFilter));
    } else {
      setCakes(cakeList);
    }
  }, [activeFilter]);

  const renderMenu = () => {
    return cakes.map((item) => (
      <div className="col-sm-6 col-md-4 col-lg-3 pb-5" key={item.id}>
        <div className="card-img overflow-hidden rounded">
          <img src={item.image} alt={item.name} className="img-fluid" />
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
    <div>
      {/* <!-- ---- Featured Selection ---- --> */}
      <section id="selection">
        <div className="container">
          <div className="py-3 pt-5 mb-4">
            <div className="container d-flex flex-wrap justify-content-center">
              <div className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto">
                <h4>FEATURED SELECTIONS</h4>
              </div>
              <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search product..."
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
          <div className="row g-0 d-flex justify-content-center">
            <div className="col-sm-6 col-md-4 col-lg-2 pb-3">
              <div className="selection-item text-center">
                <div className="selection-img overflow-hidden">
                  <button
                    className="p-0 border-0"
                    onClick={() => setActiveFilter("Chocolate Drip Cake")}
                  >
                    <img src="images/choco1.png" alt="Choco drip cakes" />
                  </button>
                </div>
                <div className="selection-text">
                  <h5 className="pt-2">Chocolate Drip Cakes</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 pb-3">
              <div className="selection-item text-center">
                <div className="selection-img overflow-hidden">
                  <button
                    className="p-0 border-0"
                    onClick={() => setActiveFilter("Themed Cake")}
                  >
                    <img src="images/theme1.png" alt="Themed Cakes" />
                  </button>
                </div>
                <div className="selection-text">
                  <h5 className="pt-2">Chocomoist Themed Cakes</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 pb-3">
              <div className="selection-item text-center">
                <div className="selection-img overflow-hidden">
                  <button
                    className="p-0 border-0"
                    onClick={() => setActiveFilter("Cartoon/Chartacter Cake")}
                  >
                    <img src="images/character1.png" alt="Character Cakes" />
                  </button>
                </div>
                <div className="selection-text">
                  <h5 className="pt-2">Cartoon/Character Cakes</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 pb-3">
              <div className="selection-item text-center">
                <div className="selection-img overflow-hidden">
                  <button
                    className="p-0 border-0"
                    onClick={() => setActiveFilter("Number Cake")}
                  >
                    <img src="images/number1.png" alt="Number Cakes" />
                  </button>
                </div>
                <div className="selection-text">
                  <h5 className="pt-2">Number Cakes</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ---- Varities ---- --> */}

      <section id="varities" className="bg-danger bg-opacity-10">
        <div className="container py-5">
          <div className="row">{renderMenu()}</div>
        </div>
      </section>
    </div>
  );
}
