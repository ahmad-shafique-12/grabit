'use client';
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import data from "@/app/Data";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "@/app/Redux/Cartslice";



import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import ViewCard from "../Viewpage";
import { ModelOpen } from "@/app/Redux/Sidebar1";

const Slider3 = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: any) => state.Cart);

  const Add_cart = (e: any) => {
    dispatch(AddToCart({ ...e, quantity: 1 }));
    // <toast className="success"></toast>
    toast.success("Add Product In Cart Successfully!")
    console.log(cart);
  };

  const [filterdata, setFilterData]: any = useState([]);
  
  useEffect(() => {
    setFilterData(data.filter((e: any, i: any) => e.all === "all"));

  
  }, []);

  const [model,setModele]=useState({})
  const IdxGEt=(e:any)=>{
    setModele(e)
    console.log(model)
   //  ModelOpen();
    dispatch(ModelOpen())
  }
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
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
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
    <div><Toaster/></div>
    
    <div className='w-[85%] m-auto mt-10'>
      <div className='w-max flex flex-col flex-wrap'>
        <h1 className='text-[25px] font-[600]'>
          Day Of The <span className='ab'>Deal</span>
        </h1>
        <p className='text-[13.5px] font-[300] mt-2 text-center'>
          Don&apos;t wait. The time will never be just right
        </p>
      </div>

      <div className="slider-container w-full mt-5">
        <Slider {...settings}>
          {filterdata.map((e: any, i: any) => (
            <div key={i}  className="p-2">
              <div className="  pb-5 border">
                <div>
                  <div className="w-full border relative overflow-hidden group h-[180px] object-cover transition-all duration-300">
                    <Image
                      className="absolute group-hover:opacity-100 opacity-0"
                      src={e.image[0]}
                      alt={e.name}
                      layout="fill"
                      objectFit="cover"
                    />
                    <Image
                      className="absolute group-hover:opacity-0 opacity-100"
                      src={e.image[1]}
                      alt={e.name}
                      layout="fill"
                      objectFit="cover"
                    />

                    <div className="w-full justify-center absolute flex m-auto bottom-[-50px] group-hover:bottom-[20px] transition-all duration-300 gap-2">
                      <div className="bg-white border p-3 rounded-[5px] cursor-pointer hovr">
                        <p className="text-[16px] font-[400]"  onClick={()=>Add_cart(e)}><CiHeart /></p>
                      </div>
                      <div className="bg-white border p-3 rounded-[5px] cursor-pointer hovr">
                        <p className="text-[16px] font-[400]" onClick={()=>IdxGEt(e)} ><IoEyeOutline /></p>
                      </div>
                      <div onClick={() => Add_cart(e)} className="bg-white border p-3 rounded-[5px] cursor-pointer hovr">
                        <p className="text-[16px] font-[400]"><FaShoppingBasket /></p>
                      </div>
                    </div>
                  </div>
                  <div className="px-8 ">
                    <p className="text-[13px] font-[400] cursor-pointer ag mt-3 text-gray-500">{e.item}</p>
                    <Link href={`/singlepage/${i}`}>
                    <p className="text-[15px] font-[400] cursor-pointer ag mt-3 text-gray-500">{e.name}</p>
                    </Link>
                    <div className="flex mt-7 gap-2">
                      <p className="text-[15px] font-[400] text-[#F6A454]"><FaStar /></p>
                      <p className="text-[15px] font-[400] text-[#F6A454]"><FaStar /></p>
                      <p className="text-[15px] font-[400] text-[#F6A454]"><FaStar /></p>
                      <p className="text-[15px] font-[400] text-[#A0A0A0]"><FaStar /></p>
                      <p className="text-[15px] font-[400] text-[#A0A0A0]"><FaStar /></p>
                    </div>
                    <p className="text-[15px] font-[400] cursor-pointer ag mt-3 text-gray-500">${e.price}.00</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    <ViewCard Viewcard={model}/>
    </>
  );
};

export default Slider3;
