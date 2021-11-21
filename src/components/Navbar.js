import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  


 
  const changeNavbarColor = () =>{
    if(window.scrollY >= 80){
      setColorchange(true);

     
    }
    else{
      setColorchange(false);
   
    }
 };
 
 window.addEventListener('scroll', changeNavbarColor);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      
    } else {
      setDropdown(true);
     
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
     
    } else {
      setDropdown(false);
    
    }
  };
  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
      
    } else {
      setDropdown1(true);
     
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
     
    } else {
      setDropdown1(false);
    
    }
  };
  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
      
    } else {
      setDropdown2(true);
     
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
     
    } else {
      setDropdown2(false);
    
    }
  };

  return (
    <>
      <nav className={colorChange ? 'navbar  colorChange':''}>
        <div><br/>
         <a href="/Support"  style={{textDecoration:'none', color:'#413E3E',marginLeft:'10%'}}><i class="fas fa-headset"></i> Support</a>&nbsp;&nbsp;
         <a href="/Support" style={{textDecoration:'none', color:'#413E3E',margin:'auto '}}><i class="fas fa-envelope"></i> info@ehealthflex.com</a>
        
      
         <a href="/Support" style={{textDecoration:'none', color:'#413E3E',marginLeft:'50%'}}><i class="fas fa-user-circle"></i> Sign in</a>&nbsp;&nbsp;&nbsp;&nbsp;
         <a href="/Support" style={{textDecoration:'none', color:'#413E3E',margin:'auto '}}><i class="fas fa-user-plus"></i> Register</a>
        </div>
      </nav>
      
      <nav className={colorChange ? 'navbar  colorChange':'navbar'}>
          <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img   src={process.env.PUBLIC_URL + "/logo.jpg"} />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/aboutus'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About us <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Tourism Package <i className='fas fa-caret-down' />
            </Link>
            {dropdown1 && <Dropdown1 />}
          </li>
         
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Find a Medic
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Blog <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
         
         
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              CONTACT US
            </Link>
          </li>
        </ul>
        <Button />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
