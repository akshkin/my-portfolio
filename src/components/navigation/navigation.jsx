import { useState } from "react"
import NavLinks from "./nav-links.component"
import "./navigation.style.scss"

function Navigation(){
  const [isOpen, setIsOpen] = useState(false)
  const openClass = isOpen ? "open" : ""
  // const [openClass, setOpenClass] = useState(false)

  function handleToggleBtn(){
    setIsOpen(prevOpen => !prevOpen)
    // setOpenClass(prevOpenClass => !prevOpenClass)
  }
  // console.log(openNavClass)
  console.log(openClass)

  return (
    <header>
      <nav className="mobile">
        <img className="logo" src="/images/logo.png" alt="logo"/>
        <button className="toggle-btn" onClick={handleToggleBtn}>&#9776;</button>
        {isOpen && <NavLinks setIsOpen={setIsOpen} openClass={openClass} />}
      </nav>

      <nav className="desktop">
        <img className="logo" src="/images/logo.png" alt="logo"/>
        <NavLinks />
      </nav>

    </header>

        
  )
}

export default Navigation