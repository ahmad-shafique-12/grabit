'use client'
import data from '@/app/Data';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '@/app/Redux/Cartslice';
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { IoIosStar } from 'react-icons/io';
import { GiIronCross } from 'react-icons/gi';
import ViewCard from '../Viewpage';
import { ModelOpen } from '@/app/Redux/Sidebar1';
const Item = () => {
  const [filterdata, setFilterData]: any = useState([]);
  const [category, setCategory]: any = useState("all");
  const { cart, findValue } = useSelector((state: any) => state.Cart);
  const dispatch = useDispatch();
  const Add_cart = (e: any) => {
    dispatch(AddToCart({ ...e, quantity: 1 }));
    console.log(cart);
    toast.success("Add Product In Cart Successfully!")
  };

  useEffect(() => {
    if (category == "all") {
      setFilterData(data.slice(0, 10));
    }
    else {
      setFilterData(data.filter((e: any, i: any) => e.category === category));
    }
  }, [category]);

  const all_name = (ab: any) => {
    setCategory(ab)
  }

  const [model,setModele]=useState({})
 const IdxGEt=(e:any,i:any)=>{
   setModele(e)
   console.log(model)
  //  ModelOpen();
   dispatch(ModelOpen())
 }

 const OpenModel=()=>{
 console.log( ModelOpen,"woring")
 }
 const CloseModel=()=>{
  console.log( ModelOpen,"woring")
  }
  return (
    <>
      <div><Toaster /></div>
      <div className='w-[85%]  mt-[120px] m-auto'>
        <div className='w-full items-center  lg:flex lg:flex-row flex-col  lg:justify-between'>
          <div className=''> <h1 className='text-[25px] font-[600]'>
            Day Of The <span className='ab'>Deal</span>
          </h1>
            <p className='text-[13.5px] font-[300] mt-2 '>
              Don't wait. The time will never be just right
            </p>
          </div>

          <ul className='w-full lg:justify-end flex flex-wrap gap-5'>
            <li onClick={() => all_name("all")} className='text-[16px] font-[300] ag cursor-pointer'>All</li>
            <li onClick={() => all_name("snack")} className='text-[16px] font-[300] ag cursor-pointer'>SNACK & SPICES</li>
            <li onClick={() => all_name("food")} className='text-[16px] font-[300] ag cursor-pointer'>FRUITS</li>
            <li onClick={() => all_name("vegetable")} className='text-[16px] font-[300] ag cursor-pointer'>VEGETABLES</li>
          </ul>


        </div>

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
                        <p className="text-[16px] font-[400]" onClick={()=>Add_cart(e)}><CiHeart /></p>
                      </div>
                     
                      
                      <div  onClick={()=>IdxGEt(e)}  className="bg-white border p-3 rounded-[5px] cursor-pointer hovr">
                        <p className="text-[16px] font-[400]"><IoEyeOutline /></p>
                      </div>
                     
                      <div onClick={() => Add_cart(e)} className="bg-white border p-3 rounded-[5px] cursor-pointer hovr">
                        <p className="text-[16px] font-[400]"><FaShoppingBasket /></p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[150px] px-6  ">
                    
                    <p className="text-[13px] font-[400] cursor-pointer ag mt-3 text-gray-500">{e.item}</p>
                    <Link href={`/singlepage/${i}`}>
                    <p className="text-[15px] font-[400] cursor-pointer ag mt-3 flex-wrap text-gray-500">{e.name}</p>
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


              </>)
            })
          }



        </div>
      </div>



      {/* {//////////////////////////////////////////////////////////////////////////} */}

<ViewCard Viewcard={model}/>


    </>
  )
}

export default Item
