import React from "react";

export default function Reviews() {
  return (
    <section id="reviews">
      <div className="container p-5">
        <div className="pb-md-5">
          <h1 className="fw-bolder m-0 text-uppercase text-center">
            <strong>Reviews</strong>
          </h1>
          <div className="mt-5">
            <div className="d-md-flex justify-content-center align-items-center">
              <textarea
                name="review-input"
                id="review-input"
                placeholder="Write your review here!"
                className="rounded-3"
              ></textarea>
              <button className="submit-review text-decoration-none rounded-3 text-white d-block mx-auto m-md-0 mt-2 mt-md-0 ms-md-4 text-uppercase fw-bold">
                Submit
              </button>
            </div>
            <hr className="my-4 mx-5" />
            <div className="grid-col-span-2">
              <div className="for-grid-review">
                {/* REVIEWS */}
                <div className="p-0 m-0">
                  <div className="review-card bg-white p-3 rounded-3">
                    <div className="review-head d-flex align-items-center mb-3">
                      <img
                        src="images/no-profile-review.jpg"
                        alt="profile-review"
                        className="review-profile rounded-circle"
                      />
                      <figure className="ms-3 mb-0">
                        <blockquote class="blockquote m-0 fs-6">
                          <p>
                            <strong>Jeda Martinez-Pkro</strong>
                          </p>
                        </blockquote>
                        <figcaption class="blockquote-footer m-0">
                          &nbsp;09/14/2022
                        </figcaption>
                      </figure>
                    </div>
                    <div className="review-body p-2">
                      <p className="m-0 review">Thank you sa yummy cake 😘</p>
                    </div>
                  </div>
                </div>

                <div className="p-0 m-0">
                  <div className="review-card bg-white p-3 rounded-3">
                    <div className="review-head d-flex align-items-center mb-3">
                      <img
                        src="images/no-profile-review.jpg"
                        alt="profile-review"
                        className="review-profile rounded-circle"
                      />
                      <figure className="ms-3 mb-0">
                        <blockquote class="blockquote m-0 fs-6">
                          <p>
                            <strong>Cj Alicaba Sepada</strong>
                          </p>
                        </blockquote>
                        <figcaption class="blockquote-footer m-0">
                          &nbsp;09/14/2022
                        </figcaption>
                      </figure>
                    </div>
                    <div className="review-body p-2">
                      <p className="m-0 review">Thank you sa lami na cake te</p>
                    </div>
                  </div>
                </div>

                <div className="p-0 m-0">
                  <div className="review-card bg-white p-3 rounded-3">
                    <div className="review-head d-flex align-items-center mb-3">
                      <img
                        src="images/no-profile-review.jpg"
                        alt="profile-review"
                        className="review-profile rounded-circle"
                      />
                      <figure className="ms-3 mb-0">
                        <blockquote class="blockquote m-0 fs-6">
                          <p>
                            <strong>Ain Loquias</strong>
                          </p>
                        </blockquote>
                        <figcaption class="blockquote-footer m-0">
                          &nbsp;09/14/2022
                        </figcaption>
                      </figure>
                    </div>
                    <div className="review-body p-2">
                      <p className="m-0 review">Ka gwapa sa cake 😍</p>
                    </div>
                  </div>
                </div>

                <div className="p-0 m-0">
                  <div className="review-card bg-white p-3 rounded-3">
                    <div className="review-head d-flex align-items-center mb-3">
                      <img
                        src="images/no-profile-review.jpg"
                        alt="profile-review"
                        className="review-profile rounded-circle"
                      />
                      <figure className="ms-3 mb-0">
                        <blockquote class="blockquote m-0 fs-6">
                          <p>
                            <strong>Enchang Lendio Regidor - Astilla</strong>
                          </p>
                        </blockquote>
                        <figcaption class="blockquote-footer m-0">
                          &nbsp;09/14/2022
                        </figcaption>
                      </figure>
                    </div>
                    <div className="review-body p-2">
                      <p className="m-0 review">
                        Thanks always sa ummy ckae ma'am 😋❤
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-0 m-0">
                  <div className="review-card bg-white p-3 rounded-3">
                    <div className="review-head d-flex align-items-center mb-3">
                      <img
                        src="images/no-profile-review.jpg"
                        alt="profile-review"
                        className="review-profile rounded-circle"
                      />
                      <figure className="ms-3 mb-0">
                        <blockquote class="blockquote m-0 fs-6">
                          <p>
                            <strong>Melecyn Regidor Lamban</strong>
                          </p>
                        </blockquote>
                        <figcaption class="blockquote-footer m-0">
                          &nbsp;09/14/2022
                        </figcaption>
                      </figure>
                    </div>
                    <div className="review-body p-2">
                      <p className="m-0 review">
                        Thank you so much ma'am sa pina abrupt na cake...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-0 m-0">
                  <div className="review-card bg-white p-3 rounded-3">
                    <div className="review-head d-flex align-items-center mb-3">
                      <img
                        src="images/no-profile-review.jpg"
                        alt="profile-review"
                        className="review-profile rounded-circle"
                      />
                      <figure className="ms-3 mb-0">
                        <blockquote class="blockquote m-0 fs-6">
                          <p>
                            <strong>Jeneda Dela Torre Palalimpa</strong>
                          </p>
                        </blockquote>
                        <figcaption class="blockquote-footer m-0">
                          &nbsp;09/14/2022
                        </figcaption>
                      </figure>
                    </div>
                    <div className="review-body p-2">
                      <p className="m-0 review">
                        Sulit ang kalami...dili kamahayan...pm me or contact for
                        more details...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-0 m-0">
                  <div className="review-card bg-white p-3 rounded-3">
                    <div className="review-head d-flex align-items-center mb-3">
                      <img
                        src="images/no-profile-review.jpg"
                        alt="profile-review"
                        className="review-profile rounded-circle"
                      />
                      <figure className="ms-3 mb-0">
                        <blockquote class="blockquote m-0 fs-6">
                          <p>
                            <strong>Ruth Isagun Allones</strong>
                          </p>
                        </blockquote>
                        <figcaption class="blockquote-footer m-0">
                          &nbsp;09/14/2022
                        </figcaption>
                      </figure>
                    </div>
                    <div className="review-body p-2">
                      <p className="m-0 review">
                        Thanks Norya ❤❤❤ Hanna likes it.. Nice daw kaay iya cake
                        gahapon. Order kami ulit next time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-0 m-0">
                  <div className="review-card bg-white p-3 rounded-3">
                    <div className="review-head d-flex align-items-center mb-3">
                      <img
                        src="images/no-profile-review.jpg"
                        alt="profile-review"
                        className="review-profile rounded-circle"
                      />
                      <figure className="ms-3 mb-0">
                        <blockquote class="blockquote m-0 fs-6">
                          <p>
                            <strong>Amynhor Lumagbas</strong>
                          </p>
                        </blockquote>
                        <figcaption class="blockquote-footer m-0">
                          &nbsp;09/14/2022
                        </figcaption>
                      </figure>
                    </div>
                    <div className="review-body p-2">
                      <p className="m-0 review">
                        Absolutely beautiful!!! Naka kaon k sa imoha cake
                        gahapon jane,sarap oi...ako man to pinsan gi kasal...c
                        aisa nag order,db?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-0 m-0">
                  <div className="review-card bg-white p-3 rounded-3">
                    <div className="review-head d-flex align-items-center mb-3">
                      <img
                        src="images/no-profile-review.jpg"
                        alt="profile-review"
                        className="review-profile rounded-circle"
                      />
                      <figure className="ms-3 mb-0">
                        <blockquote class="blockquote m-0 fs-6">
                          <p>
                            <strong>Eunice Alipan - Royo</strong>
                          </p>
                        </blockquote>
                        <figcaption class="blockquote-footer m-0">
                          &nbsp;09/14/2022
                        </figcaption>
                      </figure>
                    </div>
                    <div className="review-body p-2">
                      <p className="m-0 review">
                        Thank you my dear classmate, order jud mo sa iya cake
                        lami kaayo.bisan layu kaayo ko diha jud ko ga order sa
                        iya.😍❤❤❤ Barato pa lami pa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
