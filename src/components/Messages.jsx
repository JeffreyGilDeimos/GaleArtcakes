import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import TextareaAutosize from "react-textarea-autosize";

export default function Messages({ user, userImage, message, timestamp }) {
  const [action, setAction] = useState("");

  return (
    <div className="p-0 m-0">
      <div className="review-card bg-white p-3 rounded-3 h-100 position-relative">
        <div className="d-flex justify-content-between mb-3">
          <div className="review-head d-flex align-items-center">
            <img
              src={userImage}
              alt="profile-review"
              className="review-profile rounded-circle"
            />
            <figure className="ms-3 mb-0">
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
          <div className="position-relative review-icon ps-3" onClick={() => setAction(action ? "" : "d")}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
            <div className={`d-none${action} review-actions position-absolute bg-white p-2 border border-2 rounded`}>
              <button className="edit-review border-0 p-0 bg-white fs-6 px-2">
                <small>Edit</small>
              </button>
              <hr className="mx-0 mt-2 mb-1" />
              <button className="delete-review border-0 p-0 bg-white fs-6 px-2">
                <small>Delete</small>
              </button>
            </div>
          </div>
        </div>
        <div className="for-save-btn d-flex justify-content-end position-absolute pb-3 pe-3">
          <button className="save-review border-0 p-0 bg-white fs-6 fw-bolder">
            <small>Save</small>
          </button>
        </div>
        <div className="review-body p-2">
          <TextareaAutosize
            defaultValue={message}
            className="m-0 review w-100 border-0"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
