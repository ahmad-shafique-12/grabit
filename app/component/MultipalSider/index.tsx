'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import img1 from '../image/sa.jpg'
import SlideOne from '../SlideOne';
import SlideTwo from '../SlideTwo';
import SlideThree from '../SlideThree';




const MultiplaSlider = () => {
  



  return (
    <div className='w-[85%] m-auto  mt-10 flex  flex-wrap justify-between'>
      <div className='relative xl:w-[23%] sm:w-[49%] w-[100%]'>
        <div className='w-full h-[350px] '>
          <Image className='w-full h-full object-cover rounded-md' src={img1} alt="Image 1"  />
        </div>
        {/* <div className='w-full h-full absolute top-0 left-0 flex  px-5 items-start mt-4'>
          <div>
            <h1 className='md:text-[20px] text-[20px] font-[700] text-[#303030]'>Fresh Fruits<br />Healthy Products</h1>
            <h1 className='md:text-[20px] text-[22px] font-[700] text-[#5CAF90]'>30% Off <span className='text-[#303030]'>Hurry up!!!</span></h1>
            <button className='btn2 mt-5 hover:bg-[#5CAF90] text-white p-2 px-3 rounded-[5px]'>
              Shop Now
            </button>
          </div>
        </div> */}
      </div>
      <SlideOne/>
     <SlideTwo/>
     <SlideThree/>
      
    </div>
  );
};

export default MultiplaSlider;
