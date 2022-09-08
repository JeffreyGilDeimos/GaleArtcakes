import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="p-4 position-relative">
      <div className="container">
        <div className="footer text-center d-lg-flex align-items-center justify-content-space-between">
          <p className="m-0 fw-bold text-decoration-capitalize">
            ©2022 GALE ARTCAKES. ALL RIGHTS RESERVED.
          </p>
          <div className="d-lg-flex align-items-center">
            <p className="my-3 my-lg-0 me-lg-3 fw-bold text-decoration-capitalize">
              FOLLOW GALE ARTCAKES AT
            </p>
            <div className="text-center">
              <a
                href="https://www.facebook.com/sweetnhory"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} className="socials fs-5" />
              </a>
              <FontAwesomeIcon
                icon={faInstagram}
                className="socials fs-5 mx-3 mx-lg-2"
              />
              <FontAwesomeIcon icon={faTwitter} className="socials fs-5" />
            </div>
          </div>
        </div>
      </div>
      <img
        src="../images/layered-footer.png"
        alt="layered"
        className="layered-footer img-fluid w-100 position-absolute m-0"
      />
    </footer>
  );
}
