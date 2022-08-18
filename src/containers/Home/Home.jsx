import React from 'react'
import { ContentText } from '../../components';
import images from '../../constants/images';

import './Home.css'

console.log(images.imgHome)

const Home = () => {
  return (
    <section className='concavo__home section__padding' id='home'>
        <div className='concavo-innerDiv'>
           <div className="concavo__wrapper_info">
                <ContentText 
                  titleh3="Chase the new Flavour"
                  titleh4="The key to Fine dining"
                  titlep="Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus."
                />
           </div>
           <div className="concavo__wrapper_img">
                <img src={images.imgHome} alt='Home' />
           </div>
        </div>
    </section>
  )
}

export default Home