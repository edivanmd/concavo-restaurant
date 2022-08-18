import React from 'react';
import { NavBar } from '../../components';

import './Header.css'

const Header = () => {
  return (
    <header className='section__padding gradient__bg'>
      <div className='header__concavo-innerDiv concavo-innerDiv'>
        <h1><a href="#home">Côncavo</a></h1>
        <NavBar />
      </div>
    </header>
  )
}

export default Header