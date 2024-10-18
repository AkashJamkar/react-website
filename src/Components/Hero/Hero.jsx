import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import main_image from '../Assets/main_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        <h2>NEW ARRIVALS ONLY akash</h2>
        <div>
            <div className="hero-hand-icon">
                <p>Make Your Fashion Look</p>
            </div>
            <p className='change'>Mire <span className='color'>Charming</span></p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
        </div>
        <div className="hero-right">
            <img src={main_image} alt="" />
        </div>
    
        

    </div>
  )
}

export default Hero
