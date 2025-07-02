import React from "react";
import "./r.css";
import { Link } from "react-router-dom";

const Registry = () => {
  return (
    <div className="registry_container">
      <div className="r_grid">
        <div className="r_sub">
          <h2 className="r_title">Support the bride and groom</h2>
          <div className="image-wrapper">
            <img
            src="https://images.pexels.com/photos/10256495/pexels-photo-10256495.jpeg"
              alt=""
              className="r_img"
            />
          </div>
          <p className="jio">
            While your presence at our wedding is the greatest gift, if you wish
            to share in our joy through a gift, please visit our registry.
          </p>
          <button className="rsvp_btn">
            <Link
              to="/gifts"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Registry
            </Link>
          </button>
        </div>

        <div className="r_sub">
          <h2 className="r_title">RSVP</h2>
          <div className="image-wrapper">
            <img
            src="https://images.pexels.com/photos/20767754/pexels-photo-20767754.jpeg"
              alt=""
              className="r_img"
            />
          </div>
          <p className="jio">
            We can’t wait to celebrate with you! Please let us know if you’ll be
            attending by filling out the RSVP form.
          </p>
          <button className="rsvp_btn">
            <Link
              to="/rsvp"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              RSVP Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registry;
