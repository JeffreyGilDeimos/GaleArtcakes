import React from "react";

export default function Messages({ user, userImage, message, timestamp }) {
  return (
    <div className="p-0 m-0">
      <div className="review-card bg-white p-3 rounded-3">
        <div className="review-head d-flex align-items-center mb-3">
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
              &nbsp;{new Date(timestamp?.toDate()).toUTCString()}
            </figcaption>
          </figure>
        </div>
        <div className="review-body p-2">
          <p className="m-0 review">{message}</p>
        </div>
      </div>
    </div>
  );
}
