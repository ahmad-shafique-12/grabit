'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
import img1 from '../image/a.jpg'
import img2 from '../image/b.jpg'
import img3 from '../image/c.jpg'
import img4 from '../image/d.jpg'
import img5 from '../image/e.jpg'
import img6 from '../image/f.jpg'




const Blog = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
              },
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
              },
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
      ],
      };
    return (
        <>
           <div className="w-[85%] m-auto  mt-10">
            
           <Slider {...settings}>
        <div className='p-2'>
            <div className="w-full">
              <div className="w-full">
                <Image  className='rounded-md' src={img1} alt=''/>
              </div>

            <p className="text-[13px] font-[400] mt-3">30 June,2022 Organic</p>
            <h2 className='text-[17px] font-[500] mt-2'>Marketing Guide:5 Step to Success to way.</h2>
            </div>
          
        </div>
        <div className='p-2'>
            <div className="w-full">
              <div className="w-full">
                <Image className='rounded-md' src={img2} alt=''/>
              </div>

            <p className="text-[13px] font-[400] mt-3">April 02,2022</p>
            <h2 className='text-[17px] font-[500] mt-2'>Best way to solve business deal issue in market</h2>
            </div>
          
        </div>
        <div className='p-2'>
            <div className="w-full">
              <div className="w-full">
                <Image className='rounded-md' src={img3} alt=''/>
              </div>

            <p className="text-[13px] font-[400] mt-3">Mar 90,2020-vegetable</p>
            <h2 className='text-[17px] font-[500] mt-2'>31 grocery custom service stats Know in 2019</h2>
            </div>
          
        </div>
        <div className='p-2'>
            <div className="w-full">
              <div className="w-full">
                <Image className='rounded-md' src={img4} alt=''/>
              </div>

            <p className="text-[13px] font-[400] mt-3">Jaunuary 25,2022</p>
            <h2 className='text-[17px] font-[500] mt-2'>Business ideas to grow your business traffic</h2>
            </div>
          
        </div>
        <div className='p-2'>
            <div className="w-full">
              <div className="w-full">
                <Image className='rounded-md' src={img5} alt=''/>
              </div>

            <p className="text-[13px] font-[400] mt-3">December10,2021</p>
            <h2 className='text-[17px] font-[500] mt-2'>Marketing Guide:5 Step to Success to way.</h2>
            </div>
          
        </div>
        <div className='p-2'>
            <div className="w-full">
              <div className="w-full">
                <Image className='rounded-md' src={img6} alt=''/>
              </div>

            <p className="text-[13px] font-[400] mt-3">Augest 08,2021-vegetable</p>
            <h2 className='text-[17px] font-[500] mt-2'>15 custom service stats idea Know in 2023</h2>
            </div>
          
        </div>
       
        
      </Slider>
            
            </div> 
        </>
    )
}

export default Blog