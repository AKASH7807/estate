import React from 'react'
import {assets} from "../assets/assets"

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.logo_dark} alt="" />
            <p className='text-gray-400 mt-4'>Explore affordable dream homes with luxury designs on our estate website, showcasing modern properties that blend elegance and value for discerning buyers.</p>
        </div>
        <div className='w-full md:w-1/5 md:8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <a href="#Header" className='hover:text-white'>Home</a>
                <a href="#About" className='hover:text-white'>About Us</a>
                <a href="#Contact" className='hover:text-white'>Contact Us</a>
                <a href="#Header" className='hover:text-white'>Privacy Policy</a>
            </ul>
        </div>
        <div className='w-full md:w-1/3'>
            <h3 className="text-white text-lg font-bold mb-4">Subscribe to Our newsletter</h3>
            <p className='text-gray-400 mb-4 max-w-80'>The Latest news, articles, and resources, sent to your inbox weekly.</p>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Footer
