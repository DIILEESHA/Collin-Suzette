import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header_container">
      <div className="header_grid">
        <div className="exact_date">
          <h2 className="date">16 · 08 · 2025</h2>
        </div>
        <div className="header_sub ty">
          <img
            alt=""
            className="header_img nasiya"
            src="https://i.imgur.com/XjhOnc0.png"
          />
        </div>
        <div className="header_sub jur">
          <img
            src="https://i.imgur.com/WoFmz8I.png"
            alt=""
            className="header_img pasiya"
          />

          <p className="header_p hg">
            CELEBRATING A LOVE STORY YEARS IN THE MAKING—WHERE EVERY CHAPTER LED
            US HERE, AND FOREVER BEGINS NOW.
          </p>
        </div>
        <div className="header_sub ty">
          <img
            src="https://i.imgur.com/nI07vvw.png"
            alt=""
            className="header_img nasiya"
          />
        </div>
      </div>

      <div className="naughty">
        <div className="naughty_sub">
          <img
            src="https://i.imgur.com/XjhOnc0.png"

            alt=""
            className="naughty_img"
          />
        </div>
        <div className="naughty_sub">
          <img
            src="https://i.imgur.com/nI07vvw.png"

            alt=""
            className="naughty_img"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
