import React, { useState , useEffect} from 'react';
import logo from '../../assets/logo.svg';
import './Navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 100 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }

  return (
    <div className={x.join(" ")}>
    <nav className="navbar">
    <div className="navbar-container container">
        <input type="checkbox" name="" id=""/>
        <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
        </div>
        <ul className="menu-items">
            <button type="button" class="btn btn-light" ><li><a className="#/Header">About Us</a></li></button>
            <button type="button" class="btn btn-light">  <li><a className="#/Services">Services</a></li></button>
            <button type="button" class="btn btn-light">  <li><a className="#/cta">Consuting</a></li></button>
            <button type="button" class="btn btn-light"> <li><a className="#/feature">Industries</a></li></button>
            <button type="button" class="btn btn-light"> <li><a className="#/">Contact</a></li></button>  
        </ul>
        
        <img src = {logo} alt ="logo"></img>
      
    
    </div>
    <button type="button" class="btn btn-warning">Sign In</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="button" class="btn btn-secondary">Sign Up</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
</nav>
    </div>
    
  );
};

export default Navbar;