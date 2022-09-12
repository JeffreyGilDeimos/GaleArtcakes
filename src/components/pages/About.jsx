import React from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";

export default function About() {
  return (
    <>
      <Navigation />
      <section id="about">
        <div className="container p-5">
          <div className="py-md-5">
            <div className="container about-bg-color rounded-5">
              <div className="row p-4 align-items-center">
                <div className="col-lg-6 p-0 m-0">
                  <img
                    src="images/about.png"
                    alt="about"
                    className="img-fluid w-100 rounded-4 about-img"
                  />
                </div>
                <div className="col-lg-6 p-0 ps-lg-4 text-light">
                  <div className="px-md-4 pb-0 pb-md-4 pb-lg-0">
                    <h2 className="fw-bolder m-0 text-uppercase text-center mb-4 mt-4 mt-lg-0">
                      <strong>Our Story</strong>
                    </h2>
                    <p className="mb-3">
                      &emsp;&emsp;In 2020, we started making cakes as a pastime
                      just to satisfy our cravings. Several family occasions
                      passed, and we posted some finished products on social
                      media. Some in our neighborhood and friends admired and
                      wanted to order from us to become part of their
                      celebrations. From there on, referrals and orders are
                      coming in until now.
                    </p>
                    <p className="m-0">
                      &emsp;&emsp;A big appreciation to our social media friends
                      for their efforts in sharing. We promise to deliver
                      quality and sweet cakes to make every moment sweeter and
                      every celebration more memorable and special.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container pt-5">
              <div className="row justify-content-center align-items-center px-md-4">
                <div className="col-lg-6 p-0 pe-lg-4">
                  <div className="px-md-4 pb-0 pb-md-5 pb-lg-0">
                    <h2 className="fw-bolder m-0 text-uppercase text-center mb-4 mt-4 mt-lg-0">
                      <strong>Contact Info</strong>
                    </h2>
                    <ul className="list-group list-group-flush fs-6 lead">
                      <li className="list-group-item">
                        <span className="fw-bold">Location:</span> Lower 1A,
                        Tamugan, Marilog District, Davao City Philippines 8000
                      </li>
                      <li className="list-group-item">
                        <span className="fw-bold">Contact number:</span> +63
                        9382339108
                      </li>
                      <li className="list-group-item">
                        <span className="fw-bold">Facebook: </span>
                        <a
                          href="https://www.facebook.com/sweetnhory"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-decoration-none"
                        >
                          https://www.facebook.com/sweetnhory
                        </a>
                      </li>
                      <li className="list-group-item">
                        <span className="fw-bold">Inqury Email: </span>
                        nhoryjanedeimos@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 p-0">
                  <div className="d-none d-md-block border border-2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2798.6655621258033!2d125.39134787419323!3d7.250993067739964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1660904112654!5m2!1sen!2sph"
                      title="myPlace"
                      className="w-100"
                      height="400"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
