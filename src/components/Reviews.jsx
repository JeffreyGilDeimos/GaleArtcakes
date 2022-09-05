import React from "react";
import feedback1 from "./img/feedback1.PNG";
import feedback2 from "./img/feedback2.PNG";
import feedback3 from "./img/feedback3.PNG";
import feedback4 from "./img/feedback4.PNG";
import feedback5 from "./img/feedback5.PNG";
import feedback6 from "./img/feedback6.PNG";
import feedback7 from "./img/feedback7.PNG";
import feedback8 from "./img/feedback8.PNG";
import feedback9 from "./img/feedback9.png";

export default function Reviews() {
  return (
    <div>
      <section id="fb_review" className="bg-danger bg-opacity-10">
        <div className="text-center py-5">
          <h4 className="text-dark">
            <i className="bi bi-facebook me-4 fs-2"></i>FACEBOOK REVIEWS
          </h4>
        </div>
        <div className="container pb-5">
          <div className="row g-4 justify-content-center">
            <div className="col-sm-10 col-md-6 col-lg-4 py-1">
              <img
                src={feedback1}
                alt="feedback 1"
                className="fb-img img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4 py-1">
              <img
                src={feedback2}
                alt="feedback 2"
                className="fb-img img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4 py-1">
              <img
                src={feedback3}
                alt="feedback 3"
                className="fb-img img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4 py-1">
              <img
                src={feedback4}
                alt="feedback 4"
                className="fb-img img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4 py-1">
              <img
                src={feedback5}
                alt="feedback 5"
                className="fb-img img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4 py-1">
              <img
                src={feedback6}
                alt="feedback 6"
                className="fb-img img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4 py-1">
              <img
                src={feedback7}
                alt="feedback 7"
                className="fb-img img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4 py-1">
              <img
                src={feedback8}
                alt="feedback 8"
                className="fb-img img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4 py-1">
              <img
                src={feedback9}
                alt="feedback 9"
                className="fb-img img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
