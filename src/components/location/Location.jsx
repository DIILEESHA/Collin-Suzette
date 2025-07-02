import { Link } from "react-router-dom";
import "./l.css";

const Location = () => {
  return (
    <div className="header_container ui">
      <div className="header_grid two">
        <div className="exact_date kk">
          <h2 className="date maha">location</h2>
        </div>
        <div className="header_sub ty">
          <p className="header_p">Saturday, August 16, 2025</p>
        </div>
        <div className="header_sub jur">
          <div class="image-wrappers">
            <img
              src="https://i.imgur.com/6pMcEAL.png"
              alt=""
              className="r_img nanaa"
            />
          </div>

          {/* <button className="rsvp_btn"></button> */}
        </div>
        <div className="header_sub ty martin">
          <p className="header_p">
            Sheraton Grand London Park Lane
            <br />
            <br />
            55 Piccadilly, Mayfair, London W1J 7BX, United Kingdom
          </p>
          <br />

          <button className="rsvp_btn doty">
            <a
              href="https://maps.app.goo.gl/i4ZS5EozeyBneZUg7"
              style={{
                color: "inherit",
                textDecoration: "none",
                zIndex: "111",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Location
            </a>
          </button>
        </div>
      </div>

      <div className="naughty plyan  ">
        <div className="naughty_sub">
          <p className="header_p bos">Saturday, July 19, 2025</p>
        </div>
        <div className="naughty_sub">
          <p className="header_p boss">
            Sheraton Grand London Park Lane
            <br />
            <br />
            55 Piccadilly, Mayfair, London W1J 7BX, United Kingdom
          </p>

          <button className="rsvp_btn doty">
            <a
              href="https://maps.app.goo.gl/i4ZS5EozeyBneZUg7"
              style={{
                color: "inherit",
                textDecoration: "none",
                zIndex: "111",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Location
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;
