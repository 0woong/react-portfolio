import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Nav() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className={scrollPosition > 0 ? "navbar navbar-change" : "navbar"}>
      <div className="container">
        <p className="navbar-logo" onClick={scrollToTop}>
          Eroe's Portfolio
        </p>
        <div className="navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="about" spy={true} smooth={true}>
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="services" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
