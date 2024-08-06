import React from "react";

function MobileNav({ setOpenNav, style }) {
  return (
    <ul style={style} className="nav-links-container">
      <li className="nav-link-item" onClick={() => setOpenNav(false)}>
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-link-item" onClick={() => setOpenNav(false)}>
        <a className="nav-link" href="#education">
          Skills
        </a>
      </li>
      <li className="nav-link-item" onClick={() => setOpenNav(false)}>
        <a className="nav-link" href="#projects">
          Projects
        </a>
      </li>
      <li className="nav-link-item contact" onClick={() => setOpenNav(false)}>
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default MobileNav;
