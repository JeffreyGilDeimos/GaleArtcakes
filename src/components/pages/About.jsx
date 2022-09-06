import React from "react";

export default function About() {
  return (
    <div>
      <section id="about" class="">
        <div class="container bg-danger rounded-bottom shadow-lg">
          <div class="row align-items-center">
            <div class="col-md-6 my-4">
              <img
                src="images/about.png"
                alt="about"
                class="img-fluid w-100 rounded"
              />
            </div>
            <div class="col-md-6 p-5 text-light">
              <h4>Our Story</h4>
              <p>
                In 2020, we started making cakes as a pastime just to satisfy
                our cravings. Several family occasions passed, and we posted
                some finished products on social media. Some in our neighborhood
                and friends admired and wanted to order from us to become part
                of their celebrations. From there on, referrals and orders are
                coming in until now.
              </p>
              <p>
                A big appreciation to our social media friends for their efforts
                in sharing. We promise to deliver quality and sweet cakes to
                make every moment sweeter and every celebration more memorable
                and special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ---- Contact Details and Map ---- --> */}
      <section class="p-5">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-6 py-3">
              <h2 class="text-center mb-4">Contact Info</h2>

              <ul class="list-group list-group-flush fs-6 lead">
                <li class="list-group-item">
                  <span class="fw-bold">Location:</span> Lower 1A, Tamugan,
                  Marilog District, Davao City Philippines 8000
                </li>
                <li class="list-group-item">
                  <span class="fw-bold">Contact number:</span> +63 9382339108
                </li>
                <li class="list-group-item">
                  <span class="fw-bold">Facebook: </span>
                  <a
                    href="https://www.facebook.com/sweetnhory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    https://www.facebook.com/sweetnhory
                  </a>
                </li>
                <li class="list-group-item">
                  <span class="fw-bold">Inqury Email: </span>
                  nhoryjanedeimos@gmail.com
                </li>
              </ul>
            </div>

            <div class="col-lg-6">
              <div class="d-none d-md-block border border-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2798.6655621258033!2d125.39134787419323!3d7.250993067739964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1660904112654!5m2!1sen!2sph"
                  title="myPlace"
                  className="w-100"
                  height="400"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
