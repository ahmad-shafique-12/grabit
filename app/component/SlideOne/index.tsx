'use client'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import { FaShoppingBasket } from "react-icons/fa";
import data from '@/app/Data';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '@/app/Redux/Cartslice';

// const NextArrow = ({ onClick }) => {
//     return (
//         <p
//             onClick={onClick}
//             className="text-[40px] top-0 absolute cursor-pointer  w-max"
//         >
//              <FaAngleLeft />
//         </p>
//     );
// };

// const PrevArrow = ({ onClick }) => {
//     return (
//         <p
//             onClick={onClick}
//             className="text-[40px] absolute top-0 right-10 cursor-pointer w-max"
//         >
//             <FaAngleRight />

//         </p>
//     );
// };


const SlideOne = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
    };
    const [filterdata, setFilterData]: any = useState(data.slice(0, 3));
    // const [filterdata2, setFilterData]: any = useState(data.slice(0,3));
    // const [filterdata3, setFilterData]: any = useState(data.slice(0,3));

    console.log(filterdata);

    const { cart } = useSelector((state: any) => state.Cart);
    const dispatch = useDispatch();
    const Add_cart = (e: any) => {
        dispatch(AddToCart({ ...e, quantity: 1 }));
        console.log(cart);
    };

    return (
        <>
            <div className='xl:w-[25%] sm:w-[49%] w-[100%]   relative'>
                <h1 className='text-[#303030] text-[25px] font-[600]'>Trending <span className='text-[#5CAF90]'>Item</span></h1>
                <div className="slider-container ">
                    <Slider {...settings}>

                        {
                            filterdata.map((e: any, i: any) => {
                                return (<>
                                    <div className='p-2 '>

                                        {
                                            filterdata.map((e: any, i: any) => {
                                                return (<>
                                                    <div className='p-2'>

                                                        <div className='border p-2  flex items-center gap-5 justify-between group'>
                                                            <div className='w-[70px] h-[70px] '>
                                                                <Image className='w-full h-full' src={e.image[1]} alt="" />
                                                            </div>
                                                            <div className='w-max '>
                                                                <p className='text-[13px] font-[500] text-[gray]'>{e.name.length > 7 ? `${e.name.substring(0, 7)}...` : e.name}</p>
                                                                <p className='text-[13px] font-[300] text-[gray]'>{e.item}</p>
                                                                <p>${e.price}00</p>

                                                            </div>

                                                            <button className='border w-max text-[20px]  p-2  opacity-0 group-hover:opacity-100 transition-opacity right-2 top-2'><p onClick={() => Add_cart(e)} className=''><FaShoppingBasket /></p></button>
                                                        </div>

                                                    </div>
                                                </>)

                                            })
                                        }

                                    </div>
                                </>)

                            })
                        }

                    </Slider>
                </div>
            </div>


        </>
    )
}

export default SlideOne