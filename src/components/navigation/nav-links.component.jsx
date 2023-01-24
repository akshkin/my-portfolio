import React from 'react'

function NavLinks({ setIsOpen, isOpen, openClass }) {

  function closeNav(){
    if(isOpen) setIsOpen(false)
  }
  
  return (
    <ul className={`${openClass} nav-links-container`}>
      <li onClick={closeNav} className='nav-link-item'><a className="nav-link" href="#about">About</a></li>
      <li onClick={closeNav} className='nav-link-item'><a className="nav-link" href="#education">Skills</a></li>
      <li onClick={closeNav} className='nav-link-item'><a className="nav-link" href="#projects">Projects</a></li> 
      <li onClick={closeNav} className='nav-link-item'><a className="nav-link" href="#contact">Contact</a></li>         
    </ul>
  )
}

export default NavLinks