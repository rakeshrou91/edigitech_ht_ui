import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import Dropdown1 from "./Dropdown1";
/* import Dropdown2 from "./Dropdown2"; */
import BasicModal from "../components/pages/UI/Model";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  // const [dropdown2, setDropdown2] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const [colorChange1, setColorchange1] = useState(false);
  const [buttonchange , setButtonchange] = useState(false);
  const [button] = useState(true);

  const changeNavbarButton= () => {
    if (window.scrollY >= 80) {
      setButtonchange(true);
    } else {
      setButtonchange(false);
    }
  };
 
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  const changeNavbaritemColor = () => {
    if (window.scrollY >= 80) {
      setColorchange1(true);
    } else {
      setColorchange1(false);
    }
  };
  
  window.addEventListener("scroll", changeNavbarColor);
  window.addEventListener("scroll", changeNavbaritemColor);
  window.addEventListener("scroll", changeNavbarButton);
  
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
      <nav className={colorChange ? "navbar  colorChange" : ""}>
        <div>
          <br />
          <BasicModal />
         
          
        </div>
      </nav>
      
      <nav className={colorChange ? "navbar  colorChange" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={process.env.PUBLIC_URL + "/logo.jpg"} alt="navbar-logo"/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className={
                  colorChange1 ? "nav-links colorChange1" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/aboutus"
                className={
                  colorChange1 ? "nav-links colorChange1" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                About us <i className="fas fa-caret-down" />
              </Link>
              {dropdown && <Dropdown />}
             </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter1}
              onMouseLeave={onMouseLeave1}
            >
              <Link
                to=""
                className={
                  colorChange1 ? "nav-links colorChange1" : "nav-links"
                }
                onClick={closeMobileMenu}
             
              >
                Tourism Package <i className="fas fa-caret-down" />
              </Link>
              {dropdown1 && <Dropdown1 />}
            </li>

            <li className="nav-item">
              <Link
                to="/products"
                className={
                  colorChange1 ? "nav-links colorChange1" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                Find a Medic
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://ehealthflex.com/healthcareblog.php"
                className={
                  colorChange1 ? "nav-links colorChange1" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                Blogs
              </a>
            </li>
            {/* <li
              className="nav-item"
              onMouseEnter={onMouseEnter2}
              onMouseLeave={onMouseLeave2}
            >
              <Link
                href="https://ehealthflex.com/healthcareblog.php"
                className={
                  colorChange1 ? "nav-links colorChange1" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                Blogs <i className="fas fa-caret-down" />
              </Link>
              {dropdown2 && <Dropdown2 />}
            </li> */}
            <li>
              <Link
                to='/contact-us'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
               Contact us
              </Link>
              <Link
                to='/'
                className='nav-links-mobile1'
                onClick={closeMobileMenu}
              >
               Sign In
              </Link>
              <Link
                to='/'
                className='nav-links-mobile1'
                onClick={closeMobileMenu}
              >
               Register
              </Link>
            </li>
          </ul>
          {button && <a  href="/contact-us" className={buttonchange ? "btn down": "btn" }>CONTACT US</a>}
           {/* <li>
              
            <a href="/contact-us" className={buttonchange ? "btn down": "btn" }>
            Contact us
            </a>
               <Link
              to='/contact-us'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              CONTACT US
            </Link> 
            </li>
          </ul>*/}
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;

