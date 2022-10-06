import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import TextareaAutosize from "react-textarea-autosize";
import { useSelector } from "react-redux";

export default function Messages({
  user,
  userImage,
  message,
  timestamp,
  email,
}) {
  const [action, setAction] = useState("");
  const activeUser = useSelector((state) => state.activeUser);

  return (
    <div className="p-0 m-0">
      <div className="review-card bg-white p-3 rounded-3 h-100 position-relative">
        <div className="d-flex mb-3">
          <div className="review-head d-flex align-items-center">
            <img
              src={userImage}
              alt="profile-review"
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
            <div className="review-icon position-absolute p-3">
              <div
                className="position-relative"
                onClick={() => setAction(action ? "" : "d")}
              >
                <FontAwesomeIcon icon={faEllipsisVertical} />
                <div
                  className={`d-none${action} review-actions position-absolute bg-white p-2 border border-2 rounded`}
                >
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
            <TextareaAutosize
              defaultValue={message}
              className="m-0 review w-100 h-100 border-0 p-2"
              readOnly
            />

            {/* the Save button should only appear when the Edit button is clicked */}
            <div className="for-save-btn d-flex justify-content-end">
              <button className="save-review border-0 p-0 bg-white fs-6 fw-bolder">
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
    </div>
  );
}
