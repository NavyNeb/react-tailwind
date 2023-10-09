import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Carousel from './Carousel/Caroussel';

const ProductDetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentSlide(0);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

 const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
  ];

  const videos = [
    'https://www.youtube.com/watch?v=Y6nFoHIwXUw',
     'https://www.youtube.com/watch?v=Y6nFoHIwXUw'
  ]

  return (
    <div>
      <div>
        <img
          src={`https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png`}
          alt='Product Main Image'
          onClick={openModal}
          className='w-28 H-28 rounded-sm mx-auto cursor-pointer'
        />
        {/* Render additional images */}
        
        {/* Render videos */}
       
      </div>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50'
          onClick={closeModal}
        >
             <button
                className='absolute top-4 right-4 text-white'
                onClick={closeModal}
                >
                <svg
                    Xmlns="http://www.w3.org/2000/svg"
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                    />
                </svg>
                </button>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='relative w-2/4 h-2/3 bg-white'
            onClick={(e) => e.stopPropagation()}
          >
                {/* Render carousel content */}
                {/* You can use your preferred carousel library or build a custom one */}
                <Carousel />
            </motion.div>
        </motion.div>)};
    </div>
      )
    }

    export default ProductDetailsPage;