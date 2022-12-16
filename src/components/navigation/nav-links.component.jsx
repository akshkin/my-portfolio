import React from 'react'

function NavLinks({ setIsOpen, openClass }) {
  function closeNav(){
    setIsOpen(false)
  }
  
  console.log(openClass)
  return (
    <ul className={`nav-links-container ${openClass ? "open" : null}`}>
      <li onClick={closeNav} className='nav-link-item'><a className="nav-link" href="#about">About</a></li>
      <li onClick={closeNav} className='nav-link-item'><a className="nav-link" href="#education">Skills</a></li>
      <li onClick={closeNav} className='nav-link-item'><a className="nav-link" href="#projects">Projects</a></li> 
      <li onClick={closeNav} className='nav-link-item'><a className="nav-link" href="#contact">Contact</a></li>         
    </ul>
  )
}

export default NavLinks