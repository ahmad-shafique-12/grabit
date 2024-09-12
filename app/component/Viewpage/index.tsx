'use client'
import { AddToCart, DeCrement, InCrement, RemoveIdx } from '@/app/Redux/Cartslice';
import { ModelClose } from '@/app/Redux/Sidebar1';
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast';
import { GiIronCross } from 'react-icons/gi';
import { IoIosStar } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';

const ViewCard = ({ Viewcard }: any) => {
  const { cart } = useSelector((state: any) => state.Cart);
  const { Sidebar1,Model } = useSelector((state: any) => state.sidebar1);
  const dispatch = useDispatch();

  const Add_cart = (e: any) => {
    dispatch(AddToCart({ ...e, quantity: 1 }));
    console.log(cart);
    toast.success("Add Product In Cart Successfully!")
  };

  const IncrementValue = (e: any) => {
    dispatch(InCrement(e));
  }

  const DecrementValue = (e: any) => {
    dispatch(DeCrement(e));
    console.log("IncrementValue called");
  }


  const CloseModel=()=>{
    console.log("working")
    dispatch(ModelClose())


  }
  
  
  const handleOverlay=(event:any)=>{
    if(event.target.classList.contains("overlay")){
        dispatch(ModelClose())
          // dispatch(closeSidebar())
      }
  }


  return (
    <>

      <div onClick={handleOverlay} className={`w-full ${Model ? "block" : "hidden"} h-screen overlay bg-[rgb(0,0,0,0.7)] fixed top-0  left-0 z-20 cursor-crosshair flex items-center justify-between`}>
        <div className={`bg-white w-[60%] lg:flex justify-around m-auto pt-10 pb-10 overflow-auto cursor-pointer relative`}>
          <p onClick={CloseModel} className='text-[20px] absolute top-6 right-10'><GiIronCross /></p>
          <div className='lg:w-[48%] w-[100%] p-5'>
            <Image className='w-full h-full' src={Viewcard.image} alt='' />

          </div>
          <div className='lg:w-[48%] w-[100%]  p-5'>
            <h1 className='text-[20px] font-[600]'>{Viewcard.name}</h1>
            <h1 className='text-[20px] font-[600]'>{Viewcard.price}</h1>

            <div className='flex gap-3 mt-5'>
              <p className='text-[16px]  text-[#F27D0C]'><IoIosStar /></p>
              <p className='text-[16px]  text-[#F27D0C]'><IoIosStar /></p>
              <p className='text-[16px]  text-[#F27D0C]'><IoIosStar /></p>
              <p className='text-[16px]  text-[#F27D0C]'><IoIosStar /></p>
              <p><IoIosStar /></p>

            </div>
            <p className='text-[16px] font-[18px]'>{Viewcard.description}</p>

            <div className='sm:flex flex-wrap  gap-4 mt-5 '>
              <div className='border w-max p-1 gap-5'>
                <button className='p-1'>-</button>
                <button ></button>
                <button className='p-1'>+</button>
              </div>
              <button onClick={Add_cart} className='p-2 px-5 bg-[#4B5966] mt-2 hover:bg-[#5CAF90] text-[white] rounded-sm'>ADD TO CART</button>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default ViewCard