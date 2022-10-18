import { useState, React, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Messages from "./Messages";
import TextareaAutosize from "react-textarea-autosize";
import { Modal } from "react-bootstrap";
import * as actionReview from "../redux/actions/actionReview";
import { bindActionCreators } from "redux";

export default function Reviews() {
  const [input, setInput] = useState("");
  const activeUser = localStorage;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef(null);
  const { addReview } = bindActionCreators(actionReview, useDispatch());

  useEffect(() => {
    inputRef.current.focus();
  });

  const sendMessage = (e) => {
    e.preventDefault();

    if (!input) {
      setShowModal(false);
      return null;
    } else if (activeUser.email) {
      const requestBody = {
        message: input,
        email: activeUser.email,
      };
      addReview(requestBody)
        .then((response) => {
          console.log(response, "response");
          setShowModal(true);
          setInput("");
        })
        .catch((error) => {
          console.log(error, "error");
        });
    }
  };

  const checkUser = () => {
    if (!activeUser.email) {
      navigate("/login");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="review">
      <div className="container px-5 pt-5 pb-4 pb-lg-5">
        <div className="pb-md-4">
          <h1 className="fw-bolder m-0 text-uppercase text-center">
            <strong>Reviews</strong>
          </h1>
          <div className="mt-5">
            <form
              onSubmit={sendMessage}
              className="d-md-flex justify-content-center align-items-center"
            >
              <TextareaAutosize
                name="review-input"
                id="review-input"
                value={input}
                ref={inputRef}
                onChange={(e) => setInput(e.target.value)}
                onClick={() => checkUser()}
                placeholder="Write your review here!"
                className="rounded-3"
                required
              />
              <button className="submit-review text-decoration-none rounded-3 text-white d-block mx-auto m-md-0 mt-2 mt-md-0 ms-md-4 text-uppercase fw-bold">
                Submit
              </button>
            </form>

            <Modal
              show={showModal}
              className="h-100 d-flex justify-content-center align-items-center"
              id="reviewModal"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered m-4 rounded-3">
                <div className="modal-content">
                  <div className="modal-body mx-3 text-center">
                    Great! Your review has been added successfully.
                  </div>
                  <div className="modal-footer border-0">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => closeModal()}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </Modal>

            <hr className="my-4 mx-5" />
            <div className="row justify-content-center">
              {/* REVIEWS */}

              <Messages />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
