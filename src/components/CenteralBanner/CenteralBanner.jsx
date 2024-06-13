import React from 'react'
import image from '../../assets/images/centeralbanner.jpg'
import './CenteralBanner.css'



function CenteralBanner() {
  return (
    <div className='centeral__banner__wrapper'>
        <div className="centeral__banner__img" style={{ backgroundImage: `url(${image})` }}></div>
    </div>
  )
}

export default CenteralBanner