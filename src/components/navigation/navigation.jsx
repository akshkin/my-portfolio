import { useState } from "react";
import "./navigation.style.scss";
import MobileNav from "./nav-links.component";

function Navigation() {
  const [openNav, setOpenNav] = useState(false);

  function toggleNav() {
    setOpenNav(!openNav);
  }

  return (
    <header>
      <nav>
        <div className="logo-container">
          <span className="logo">AK</span>
          <div>
            <button className="toggle-btn" onClick={toggleNav}>
              &#9776;
            </button>
          </div>
        </div>
        <MobileNav
          style={{
            transform: openNav ? "translate(0%, 0)" : "translate(100%, 0)",
          }}
          setOpenNav={setOpenNav}
        />
        <ul className="desktop-nav">
          <li className="nav-link-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-link-item">
            <a className="nav-link" href="#education">
              Skills
            </a>
          </li>
          <li className="nav-link-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-link-item contact">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
