import React from "react";

function NavLinks({ toggleNavigation }) {
  // function closeNav() {
  //   const navList = document.querySelector(".nav-links-container");
  //   navList.classList.add("close");
  //   // setTimeout(() => {
  //   //   navList.classList.remove("close");
  //   // }, 500);
  // }

  return (
    <ul className="nav-links-container">
      <li className="nav-link-item" onClick={toggleNavigation}>
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-link-item" onClick={toggleNavigation}>
        <a className="nav-link" href="#education">
          Skills
        </a>
      </li>
      <li className="nav-link-item" onClick={toggleNavigation}>
        <a className="nav-link" href="#projects">
          Projects
        </a>
      </li>
      <li className="nav-link-item contact" onClick={toggleNavigation}>
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavLinks;
