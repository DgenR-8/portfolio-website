import React from 'react'
import HeroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>Derick Tabios</span>
            , Software engineer graduate
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            Proficient level in Java, Springboot, Python and Html/CSS.
        </p>
    </div>
  )
}

export default Hero