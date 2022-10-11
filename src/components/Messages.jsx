import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import TextareaAutosize from "react-textarea-autosize";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";

export default function Messages({
  user,
  userImage,
  message,
  timestamp,
  email,
}) {
  const [action, setAction] = useState("");
  const activeUser = useSelector((state) => state.activeUser);
  const [showModal1, setShowModal1] = useState(false);

  return (
    <div className="col-12 col-md-6 col-lg-4 pt-0 pb-4">
      <div className="review-card bg-white p-3 rounded-3 h-100 position-relative">
        <div className="d-flex mb-3">
          <div className="review-head d-flex align-items-center">
            <img
              src={userImage}
              alt="dp"
              className="review-profile rounded-circle"
            />
            <figure className="ms-3 me-3 mb-0">
              <blockquote className="blockquote m-0 fs-6">
                <p>
                  <strong>{user}</strong>
                </p>
              </blockquote>
              <figcaption className="blockquote-footer m-0">
                &nbsp;{new Date(timestamp?.toDate()).toLocaleString()}
              </figcaption>
            </figure>
          </div>
        </div>

        {activeUser.email === email && activeUser.email ? (
          <>
            <div
              className="review-icon position-absolute p-3"
              onClick={() => setAction(action ? "" : "d")}
            >
              <div className="position-relative">
                <FontAwesomeIcon icon={faEllipsisVertical} />
                <div
                  className={`d-none${action} review-actions position-absolute bg-white p-2 border border-2 rounded`}
                >
                  <button className="edit-review border-0 p-0 bg-white fs-6 px-2">
                    <small>Edit</small>
                  </button>
                  <hr className="mx-0 mt-2 mb-1" />
                  <button
                    className="delete-review border-0 p-0 bg-white fs-6 px-2"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop03"
                  >
                    <small>Delete</small>
                  </button>
                </div>
              </div>
            </div>
            <TextareaAutosize
              defaultValue={message}
              className="m-0 review w-100 h-100 border-0 p-2"
              readOnly
            />

            {/* the Save button should only appear when the Edit button is clicked */}
            <div className="for-save-btn d-flex justify-content-end">
              <button
                className="save-review border-0 p-0 bg-white fs-6 fw-bolder"
                onClick={() => setShowModal1(true)}
              >
                <small>Save</small>
              </button>
            </div>
          </>
        ) : (
          <TextareaAutosize
            defaultValue={message}
            className="m-0 review w-100 h-100 border-0 p-2"
            readOnly
          />
        )}
      </div>
      {/* Modal for Delete */}
      <div
        className="modal fade"
        id="staticBackdrop03"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="staticBackdropLabel">
                Delete review
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body body-delete mx-3 rounded-2 text-danger">
              Are you sure you want to delete this review?
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-target="#staticBackdrop04"
                data-bs-toggle="modal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop04"
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
                Great! The review has been successfully deleted.
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

      {/* MODAL FOR SAVE */}
      <Modal
        show={showModal1}
        id="showModal1"
        tabIndex="-1"
        aria-labelledby="showModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body mx-3 text-center">
              Great! The review has been successfully updated.
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModal1(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
