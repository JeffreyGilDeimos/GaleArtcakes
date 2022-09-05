import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-danger position-relative shadow-lg">
      <div className="container">
        <div className="d-flex align-items-center flex-column text-light">
          <p className="m-0 fs-6">Follow Gale ArtCakes at</p>
          <a
            href="https://www.facebook.com/sweetnhory"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <i className="bi bi-facebook text-light fs-5"></i>
          </a>
          <p className="text-light fs-6 lead pt-2">
            &copy;2022 Gale ArtCakes. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
