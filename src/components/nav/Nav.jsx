import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./n.css";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="nav">
      <div className="nav_grid">
        {/* Mobile menu button (hidden on desktop) */}
        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes className="bor"/> : <FaBars className="bor"/>}
        </div>

        <div className="nav_sub">
          <ul className="nav_ul">
            <li className="nav_li">
              <Link to="/">Home</Link>
            </li>

            <li className="nav_li">
              <Link to="/story">Our Story</Link>
            </li>
            <li className="nav_li">
              <Link to="/memories">Our Memories</Link>
            </li>
          </ul>
        </div>

        <div className="nav_sub nil">
          <h2 className="couple">Collin & Suzette</h2>
        </div>

        <div className="nav_sub">
          <ul className="nav_ul">
            <li className="nav_li">
              <Link to="/faq">FAQ</Link>
            </li>

            <li className="nav_li">
              <Link to="/gifts">Registry</Link>
            </li>
            <li className="nav_li mafia">
              <Link to="/rsvp">RSVP</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li onClick={toggleMobileMenu}>
            <Link to="/">Home</Link>
          </li>

          <li onClick={toggleMobileMenu}>
            <Link to="/story">Our Story</Link>
          </li>
          <li onClick={toggleMobileMenu}>
            <Link to="/memories">Our Memories</Link>
          </li>
          <li onClick={toggleMobileMenu}>
            <Link to="/faq">FAQ</Link>
          </li>

          <li onClick={toggleMobileMenu}>
            <Link to="/gifts">Registry</Link>
          </li>
          <li onClick={toggleMobileMenu}>
            <Link to="/rsvp">RSVP</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
