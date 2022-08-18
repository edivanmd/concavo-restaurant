import React, { useState } from 'react';
 import { RiMenu5Line } from 'react-icons/ri';
 import { IoRestaurantSharp } from 'react-icons/io5';
 import images from '../../constants/images';

import './NavBar.css';

const Menu = () => (
  <>
    <ul>
      <li><a href="#aboutUs">About Us</a></li>
      <li><a href="#headChef">Chef</a></li>
      <li><a href="#awards">Awards</a></li>
      <li><a href="#photoGallery">Gallery</a></li>
      <li><a className='concavo__navbar-booking' href="https://google.com" target="_blank" rel="noreferrer">Booking</a></li>
    </ul>
  </>
)

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <div className='concavo__navbar-bigScreen'>
        <Menu />
      </div>

      <div className='concavo__navbar-smallScreen'>
        <RiMenu5Line color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (
          <div className='concavo__navbar-smallScreen-overlay flex__center slide-bottom'>
            <IoRestaurantSharp fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <Menu />
          </div>
        )}

      </div>
    </nav>
  )
}

export default NavBar