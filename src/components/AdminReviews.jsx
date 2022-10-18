import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionReview from "../redux/actions/actionReview";
import { bindActionCreators } from "redux";

export default function AdminReviews() {
  const { getAllReviews, deleteReview } = bindActionCreators(
    actionReview,
    useDispatch()
  );
  const reviewList = useSelector((state) => state.reviewList);

  useEffect(() => {
    console.log(getAllReviews());
    getAllReviews();
  }, []);

  const renderMessages = () => {
    return (
      <>
        {reviewList.map((review) => (
          <div
            className="col-12 col-md-6 col-lg-4 pt-0 pb-4"
            key={review.reviewId}
          >
            <div className="review-card bg-white p-3 rounded-3 h-100 position-relative">
              <div className="d-flex mb-3">
                <div className="review-head d-flex align-items-center">
                  <img
                    src="https://th.bing.com/th/id/R.d268b238932809e18b85a7820184220f?rik=ahExR0U%2fu2zHyQ&riu=http%3a%2f%2ficon-library.com%2fimages%2fno-profile-picture-icon%2fno-profile-picture-icon-2.jpg&ehk=4X8pLfMkepeJcdTMZ8L033nQ2hfH0gJN3qGTpg62g00%3d&risl=&pid=ImgRaw&r=0"
                    alt="dp"
                    className="review-profile rounded-circle"
                  />
                  <figure className="ms-3 me-3 mb-0">
                    <blockquote className="blockquote m-0 fs-6">
                      <p>
                        <strong>{review.email}</strong>
                      </p>
                    </blockquote>
                    <figcaption className="blockquote-footer m-0">
                      &nbsp;{review.createdDate.substring(0, 10)}
                    </figcaption>
                  </figure>
                </div>
              </div>
              <p className="m-0 review w-100 border-0 p-2">{review.message}</p>
              <div className="for-save-btn d-flex justify-content-end">
                <button
                  className="delete-review border-0 p-0 bg-white fs-6"
                  data-bs-toggle="modal"
                  onClick={() => deleteReview(review.reviewId)}
                  data-bs-target="#staticBackdrop01"
                >
                  <small>Delete</small>
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <section id="admin-review">
      <div className="container px-5 pt-5 pb-4 pb-lg-5">
        <div className="pb-md-5">
          <h1 className="fw-bolder m-0 text-uppercase text-center">
            <strong>Reviews</strong>
          </h1>
          <div className="mt-5">
            <div className="row justify-content-center">
              {/* REVIEWS */}
              {renderMessages()}
              {/* Modal for Delete */}
              <div
                className="modal fade"
                id="staticBackdrop01"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content p-4 border-0">
                    <div className="border border-1 rounded-3">
                      <div className="modal-body mx-3 text-center">
                        Great! The review has been deleted successfully.
                      </div>
                      <div className="modal-footer border-0">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
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
