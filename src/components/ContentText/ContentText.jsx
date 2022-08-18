import React from 'react';
import images from '../../constants/images';

import './ContentText.css';

const ContentText = ( {titleh3, titleh4, titlep} ) => {
  return (
    <div className='concavo__contentText'>
      <h3>{titleh3}</h3>
      <img src={images.spoon} alt="" />
      <h4>{titleh4}</h4>
      <p>{titlep}</p>
      <a href="https://google.com" target="_blank" rel="noreferrer">Explore Menu</a>
    </div>
  )
}

export default ContentText