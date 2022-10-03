import React from 'react'
import './Navbar.css';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg fixed-top">
    <div className="container-fluid">
      <Link smooth={true}  className="navbar-brand" href="#/" style ={{fontSize :'2rem', color:'#000'}}>Insure Technologies</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link smooth = {true} to ='header' offset ={-55} className="nav-link active" aria-current="page" href="#/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" smooth ={true} to ='About' offset ={-55} href="#/">About Us</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" smooth ={true} to = 'consulting' offset ={-55} href="#/">Consulting</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" smooth ={true} to = 'services' offset ={-55} href="#/">Services</Link>
      </li>
        <li className="nav-item">
        <Link className="nav-link" smooth ={true} to = 'industries' offset ={-55} href="#/">Industries</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" smooth ={true} to = 'reviews' offset ={-55} href="#/">Client Reviews</Link>
    </li>
    <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#/">Contact Us</a>
    </li>
        </ul>

      </div>
    </div>
  </nav>
      
    </div>
  )
}

export default Navbar
