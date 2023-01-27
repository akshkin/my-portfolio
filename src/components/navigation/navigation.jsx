import { useMemo, useState } from "react";
import NavLinks from "./nav-links.component";
import "./navigation.style.scss";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  //const [openClass, setOpenClass] = useState("close")
  let openClass = "";

  function handleToggleBtn() {
    setIsOpen((prevOpen) => !prevOpen);
  }
  openClass = isOpen ? "open" : "close";

  return (
    <header>
      <nav className="mobile">
        <img className="logo" src="/images/logo.png" alt="logo" />
        <button className="toggle-btn" onClick={handleToggleBtn}>
          &#9776;
        </button>
        {isOpen && (
          <NavLinks
            openClass={openClass}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
      </nav>

      <nav className="desktop">
        <img className="logo" src="/images/logo.png" alt="logo" />
        <NavLinks />
      </nav>
    </header>
  );
}

export default Navigation;
