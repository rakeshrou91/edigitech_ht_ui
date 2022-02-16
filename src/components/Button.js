import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='contact-us'>
      <button className='btn'>CONTACT US</button>
    </Link>
  );
}
