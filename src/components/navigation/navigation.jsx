import "./navigation.style.scss"

function Navigation(){
  return (
    <nav>
        {/* <button>&#9776;</button> */}
        <ul className="nav-links-container">
          <li className='nav-link-item'><a className="nav-link" href="">Home</a></li>
          <li className='nav-link-item'><a className="nav-link" href="#about">About</a></li>
          <li className='nav-link-item'><a className="nav-link" href="#education">Skills</a></li>
          <li className='nav-link-item'><a className="nav-link" href="#projects">Projects</a></li> 
          <li className='nav-link-item'><a className="nav-link" href="#contact">Contact</a></li>         
        </ul>
      </nav>
  )
}

export default Navigation