'use client'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import data from '../Data';
import { FaShoppingBasket, FaStar } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import Image from 'next/image';
import { AddToCart } from '../Redux/Cartslice';
import toast from 'react-hot-toast';
import Navbar1 from '../component/Navbar1';
import Navbar2 from '../component/Navbar2';
import Navbar3 from '../component/Navbar3';
import Link from 'next/link';

const ViewProduct = () => {

    const [filterdata, setFilterData] :any = useState([]);
    const { cart,findValue } = useSelector((state:any) => state.Cart);
    
    useEffect(()=>{
        setFilterData(data.filter((e,i)=>{
          return e.name.toLowerCase().includes(findValue.toLowerCase())
        }))
      },[findValue])

      const dispatch = useDispatch();
      const Add_cart = (e: any) => {
        dispatch(AddToCart({ ...e, quantity: 1 }));
        console.log(cart);
        toast.success("Item added to cart")
      };

    console.log(findValue,"findValue")

  return (
    <>
    <Navbar1/>
    <Navbar2/>
    <Navbar3/>
<div className='w-[85%] m-auto flex flex-wrap'>
<div className="w-full  mt-5 flex flex-wrap justify-between">
          {
            filterdata.map((e: any, i: any) => {
              return (<>
                <div className="item_responsive border  mt-5 pb-5">
                  <div className="w-full border relative overflow-hidden group sm:h-[180px] h-[320px] object-cover transition-all duration-300">
                    <Image
                      className="absolute group-hover:opacity-0 opacity-100"
                      src={e.image[1]}
                      alt={e.name}
                      layout="fill"
                      objectFit="cover"
                    />
                    <Image
                      className="absolute group-hover:opacity-100 opacity-0"
                      src={e.image[0]}
                      alt={e.name}
                      layout="fill"
                      objectFit="cover"
                    />

                    <div className="w-full justify-center absolute flex m-auto bottom-[-50px] group-hover:bottom-[20px] transition-all duration-300 gap-2">
                      <div className="bg-white border p-3 rounded-[5px] cursor-pointer hovr">
                        <p className="text-[16px] font-[400]"><CiHeart /></p>
                      </div>
                      <div className="bg-white border p-3 rounded-[5px] cursor-pointer hovr">
                        <p className="text-[16px] font-[400]"><IoEyeOutline /></p>
                      </div>
                      <div onClick={() => Add_cart(e)} className="bg-white border p-3 rounded-[5px] cursor-pointer hovr">
                        <p className="text-[16px] font-[400]"><FaShoppingBasket /></p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[150px] px-6  ">
                    <p className="text-[13px] font-[400] cursor-pointer ag mt-3 text-gray-500">{e.item}</p>

               
                    <p className="text-[15px] font-[400] cursor-pointer ag mt-3 flex-wrap text-gray-500">{e.name}</p>
                  
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


              </>)
            })
          }



        </div>

</div>
    </>
  )
}

export default ViewProduct