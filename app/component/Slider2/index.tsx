'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiApple } from "react-icons/ci";
import { GiBread } from "react-icons/gi";
import { RiFlowerFill } from "react-icons/ri";
import { FaJugDetergent } from "react-icons/fa6";
import { GiFrenchFries } from "react-icons/gi";
import { RiDrinks2Line } from "react-icons/ri";
import { GiFishing } from "react-icons/gi";

import { GiPopcorn } from "react-icons/gi";
import { MdOutlineEgg } from "react-icons/md";

const Slider2 = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,

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
        <div className="slider-container w-[85%]    mt-10 m-auto flex  flex-col justify-around">
            <Slider {...settings}>
                <div className="p-2">

                    <div className=' h-[180px]  relative  '>

                        <div className='w-full shadow-md h-[90px] hover:h-full translate-all duration-300 bg-[#FEF5EB] p-3 top-0 left-0 absolute rounded-[5px]'>
                            <div className='bg-white h-[150px] shadow-md flex items-center flex-col justify-center rounded-[5px] '>
                                <p className="text-[40px] font-[400px] mt-[-20px] ab  "><CiApple /></p>
                                <p className='text-[15px] font-bold mt-2 '>Fruits</p>
                                <p className='text-[13px] font-[300px] mt-2'>302 Items</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-2">
                    <div className=' h-[180px]  relative'>

                        <div className='w-full shadow-md h-[90px] hover:h-full translate-all duration-300 bg-[#E4FDE4] p-3 top-0 left-0 absolute rounded-[5px]'>
                            <div className='bg-white h-[150px] shadow-md flex items-center flex-col justify-center  rounded-[5px]'>
                                <p className="text-[40px] font-[400px] mt-[-20px] ab  "><GiBread /></p>
                                <p className='text-[15px] font-bold mt-2 '>Bakery</p>
                                <p className='text-[13px] font-[300px] mt-2'>65 Items</p>
                            </div>
                        </div>
                    </div>
                </div>
               <div className='p-2'>

               <div className=' h-[180px]  relative'>
                    <div className='w-full shadow-md h-[90px] hover:h-full translate-all duration-300 bg-[#FFEAE9] p-3 top-0 left-0 absolute rounded-[5px]'>
                        <div className='bg-white h-[150px] shadow-md flex items-center flex-col justify-center  rounded-[5px]'>
                            <p className="text-[40px] font-[400px] mt-[-20px] ab  "><RiFlowerFill /></p>
                            <p className='text-[15px] font-bold mt-2 '>Vegetables</p>
                            <p className='text-[13px] font-[300px] mt-2'>548 Items</p>
                        </div>
                    </div>
                </div>
               </div>
               <div className='p-2'>
               <div className=' h-[180px]  relative'>
                    <div className='w-full shadow-md h-[90px] hover:h-full translate-all duration-300 bg-[#FCE4F6] p-3 top-0 left-0 absolute rounded-[5px]'>
                        <div className='bg-white h-[150px] shadow-md flex items-center flex-col justify-center  rounded-[5px]'>
                            <p className="text-[40px] font-[400px] mt-[-20px] ab  "><FaJugDetergent /></p>
                            <p className='text-[15px] font-bold mt-2 '>Dairy & Malik</p>
                            <p className='text-[13px] font-[300px] mt-2'>48 Items</p>
                        </div>
                    </div>
                </div>
               </div>
               <div className="p-2">
               <div className=' h-[180px]  relative'>
                    <div className='w-full shadow-md h-[90px] hover:h-full translate-all duration-300 bg-[#EBEFFE] p-3 top-0 left-0 absolute rounded-[5px]'>
                        <div className='bg-white h-[150px] shadow-md flex items-center flex-col justify-center  rounded-[5px]'>
                            <p className="text-[40px] font-[400px] mt-[-20px] ab  "><GiFrenchFries /></p>
                            <p className='text-[15px] font-bold mt-2 '>Snack & spice</p>
                            <p className='text-[13px] font-[300px] mt-2'>59 Items</p>
                        </div>
                    </div>
                </div>
               </div>
               <div className="p-2">
               <div className=' h-[180px]  relative'>
                    <div className='w-full shadow-md h-[90px] hover:h-full translate-all duration-300 bg-[#F9F9D9] p-3 top-0 left-0 absolute rounded-[5px]'>
                        <div className='bg-white h-[150px] shadow-md flex items-center flex-col justify-center  rounded-[5px]'>
                            <p className="text-[40px] font-[400px] mt-[-20px] ab  "><RiDrinks2Line /></p>
                            <p className='text-[15px] font-bold mt-2 '>Juice & Drink</p>
                            <p className='text-[13px] font-[300px] mt-2'>545 Items</p>
                        </div>
                    </div>
                </div>
               </div>

               <div className='p-2'>
               <div className=' h-[180px]  relative'>
                    <div className='w-full shadow-md h-[90px] hover:h-full translate-all duration-300 bg-[#FDF5EE] p-3 top-0 left-0 absolute rounded-[5px]'>
                        <div className='bg-white h-[150px] shadow-md flex items-center flex-col justify-center  rounded-[5px]'>
                            <p className="text-[40px] font-[400px] mt-[-20px] ab  "><GiFishing /></p>
                            <p className='text-[15px] font-bold mt-2 '>Seafood</p>
                            <p className='text-[13px] font-[300px] mt-2'>665     Items</p>
                        </div>
                    </div>
                </div>
               </div>


               <div className='p-2'>

                <div className=' h-[180px]  relative'>
                    <div className='w-full shadow-md h-[90px] hover:h-full translate-all duration-300 bg-[#FEF6ED] p-3 top-0 left-0 absolute rounded-[5px]'>
                        <div className='bg-white h-[150px] shadow-md flex items-center flex-col justify-center  rounded-[5px]'>
                            <p className="text-[40px] font-[400px] mt-[-20px] ab  "><MdOutlineEgg /></p>
                            <p className='text-[15px] font-bold mt-2 '>Eggs</p>
                            <p className='text-[13px] font-[300px] mt-2'>154 Items</p>
                        </div>
                    </div>
                </div>
                </div>

            </Slider>
        </div>
    );
}

export default Slider2
