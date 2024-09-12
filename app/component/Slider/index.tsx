'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import img1 from '../image/1.jpg';
import img2 from '../image/2.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import '../../styles/globals.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Slider1 = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, // 1 second duration
    };

    return (
        <div className="slider-container w-[85%] h-auto m-auto mt-10 ">
            <Slider {...settings}>
                <div className='relative lg:h-[450px] sm:h-[400px] h-[250px] '>
                    <div className='absolute md:top-[20%] lg:top-[25%] top-[60px] md:px-[100px] px-[30px]' >
                        <h1 className='md:text-[20px]  text-[18px] font-[700] text-[#5CAF90]' data-aos="fade-up">Starting at $ 29.99</h1>
                        <h1 className='md:text-[40px]  text-[20px] font-[700] text-[#303030]' data-aos="fade-up">Explore fresh & <br />juicy fruits</h1>
                        <button className='btn2 mt-5 hover:bg-[#5CAF90] text-white p-2 px-3 rounded-[5px]' data-aos="fade-up">
                            Shop Now
                        </button>
                    </div>
                    <Image className='w-full h-full' src={img1} alt="Image 1" />
                </div>
                <div className='relative lg:h-[450px] sm:h-[400px] h-[250px] '>
                    <div className='absolute md:top-[20%] lg:top-[25%] top-[60px] md:px-[100px] px-[30px]' >
                        <h1 className='md:text-[20px]  text-[18px] font-[700] text-[#5CAF90]' data-aos="fade-up">Starting at $ 29.99</h1>
                        <h1 className='md:text-[40px]  text-[20px] font-[700] text-[#303030]' data-aos="fade-up">Explore fresh & <br />juicy fruits</h1>
                        <button className='btn2 mt-5 hover:bg-[#5CAF90] text-white p-2 px-3 rounded-[5px]' data-aos="fade-up">
                            Shop Now
                        </button>
                    </div>
                    <Image className='w-full h-full' src={img2} alt="Image 1" />
                </div>
            </Slider>
        </div>
    );
};

export default Slider1;
