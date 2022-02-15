import React from 'react';
import BackgroundImage from '../../images/aboutus.png'


const BackGroundImage = () => {
  return (
    <div id="hero" className="hero">
         <img className="logo" Style src={BackgroundImage}/>
    </div>
  )
}

export default BackGroundImage