import { useCallback } from "react";
import NavLinks from "./nav-links.component";
import "./navigation.style.scss";

function Navigation() {
  const toggleNavigation = useCallback(() => {
    const navbar = document.querySelector(".nav-links-container");

    navbar.classList.toggle("open");
  }, []);

  return (
    <header>
      <nav>
        <div className="logo-container">
          {/* <img className="logo" src="/images/logo.png" alt="logo" /> */}
          <span className="logo">AK</span>
          <button className="toggle-btn" onClick={toggleNavigation}>
            &#9776;
          </button>
        </div>
        <NavLinks toggleNavigation={toggleNavigation} />
      </nav>
    </header>
  );
}

export default Navigation;
