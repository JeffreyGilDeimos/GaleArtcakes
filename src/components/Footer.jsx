import React from "react";

export default function Footer() {
  return (
    <footer class="p-4 bg-danger position-relative shadow-lg">
      <div class="container">
        <div class="d-flex align-items-center flex-column text-light">
          <p class="m-0 fs-6">Follow Gale ArtCakes at</p>
          <a
            href="https://www.facebook.com/sweetnhory"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <i class="bi bi-facebook text-light fs-5"></i>
          </a>
          <p class="text-light fs-6 lead pt-2">
            &copy;2022 Gale ArtCakes. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
