'use client'
import React from 'react'
import Navbar2 from '../../component/Navbar2'
import Navbar1 from '../../component/Navbar1'
import Navbar3 from '../../component/Navbar3'
import { FaAngleLeft } from "react-icons/fa6";
import { MdOutlineBakeryDining } from 'react-icons/md'
import { GiFruitBowl } from 'react-icons/gi'
import { RiCake3Line, RiDrinks2Line } from 'react-icons/ri'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosStar } from "react-icons/io";
import { DeCrement, InCrement } from '../../Redux/Cartslice'
import { useParams } from 'next/navigation'
import data from '../../Data'
import Slider2 from '@/app/component/Slider2'
import Slider3 from '@/app/component/Slider3'
import Footer from '@/app/component/Footer'

const SingleProduct = () => {

  const { productId }:any = useParams();

  console.log(productId);
  
    const obj = data.find((item:any, idx:any) => idx === parseInt(productId));

  console.log(obj);
  
  
    if (!obj) {
      return <h1>Product Not Found</h1>;
    }

  const { cart } = useSelector((state: any) => state.Cart);
  const dispatch = useDispatch();

  const IncrementValue = (e: any) => {
    dispatch(InCrement(e));
  }

  const DecrementValue = (e: any) => {
    dispatch(DeCrement(e));
    console.log("IncrementValue called");
  }

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />

      <div className='w-[85%] border p-5  mt-2 pt-2 pb-2 flex md:flex-row items-center flex-col m-auto justify-between'>
        <p className='text-[15px] font-[700] mt-2 cursor-pointer'>Product Page</p>
        <p className='flex gap-2 text-[14px] font-[500] mt-2 cursor-pointer'>Home <span className='ab flex items-center'><FaAngleLeft /> Product Page </span></p>
      </div>

      <div className='w-[85%]   m-auto mt-5  lg:flex   justify-between'>
        <div className='lg:w-[25%] w-[100%] h-max border bg-[#F8F8FB] rounded-md'>
          <div>
            <ul className="space-y-4">
              <li className="text-left">
                <label htmlFor="accordion-1" className="relative flex flex-col" defaultChecked>
                  <input className="peer hidden" type="checkbox" id="accordion-1" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                    <h3 className="text-[17px] font-[800]">Category</h3>
                  </div>
                  <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                    <div className="p-5">
                      <div className="bg-white w-full border flex items-center gap-4 p-3 rounded-md border-[#5CAF90]">
                        <input type="checkbox" checked />
                        <p className='text-black ab text-[14px]'><MdOutlineBakeryDining /></p>
                        <p className='text-black ab text-[14px]'>Dairy & Bakery</p>
                      </div>
                      <div className="bg-white w-full border mt-2 flex items-center gap-4 p-3 rounded-md border-[#5CAF90]">
                        <input type="checkbox" />
                        <p className='text-black text-[14px]'><GiFruitBowl /></p>
                        <p className='text-black text-[14px]'>Fruits & Vegetable</p>
                      </div>
                      <div className="bg-white w-full border mt-2 flex items-center gap-4 p-3 rounded-md border-[#5CAF90]">
                        <input type="checkbox" />
                        <p className='text-black text-[14px]'><RiCake3Line /></p>
                        <p className='text-black text-[14px]'>Snack & Spice</p>
                      </div>
                      <div className="bg-white w-full mt-2 border flex items-center gap-4 p-3 rounded-md border-[#5CAF90]">
                        <input type="checkbox" />
                        <p className='text-black text-[14px]'><RiDrinks2Line /></p>
                        <p className='text-black text-[14px]'>Juice & Drink</p>
                      </div>
                    </div>
                  </div>
                </label>
              </li>

              <li className="text-left">
                <label htmlFor="accordion-2" className="relative flex flex-col">
                  <input className="peer hidden" type="checkbox" id="accordion-2" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                    <h3 className="text-[17px] font-[800]">Color</h3>
                  </div>
                  <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                    <div className="p-5 flex flex-wrap gap-2">
                      <div className='bg-[#D3E0F9] w-[25px] h-[25px] rounded-full'></div>
                      <div className='bg-[#FD9BAC] w-[25px] h-[25px] rounded-full'></div>
                      <div className='bg-[#4A4A4B] w-[25px] h-[25px] rounded-full'></div>
                      <div className='bg-[#68FD7F] w-[25px] h-[25px] rounded-full'></div>
                      <div className='bg-[#FD9F8A] w-[25px] h-[25px] rounded-full'></div>
                      <div className='bg-[#F386FE] w-[25px] h-[25px] rounded-full'></div>
                      <div className='bg-[#FDF14B] w-[25px] h-[25px] rounded-full'></div>
                      <div className='bg-[#D6B9FE] w-[25px] h-[25px] rounded-full'></div>
                      <div className='bg-[#A0FDFA] w-[25px] h-[25px] rounded-full'></div>
                      <div className='bg-[#86FDD2] w-[25px] h-[25px] rounded-full'></div>
                      <div className='bg-[#FDE3BA] w-[25px] h-[25px] rounded-full'></div>
                      <div className='bg-[#B9B9BA] w-[25px] h-[25px] rounded-full'></div>
                      <div className='bg-[#9186FE] w-[25px] h-[25px] rounded-full'></div>
                    </div>
                  </div>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className=' lg:w-[70%] w-[100%]  flex m-auto   justify-between '>
          <div className='lg:flex  justify-between m-auto  '>
           

                  <div className='border h-max'>
                    <div className='lg:w-[400px] w-[100%] '>
                      <Image src={obj.image[0]} alt='' />
                    </div>
                    {/* <div className='flex justify-between'>
                      <div className='w-[90px] border h-[90px]'>
                        <Image width={100} height={100}  className='w-full object-cover  h-full' src={obj.image[0]} alt='' />
                      </div>
                      <div className='w-[90px] border h-[90px]'>
                        <Image width={100} height={100}  className='w-full object-cover h-full' src={obj.image[1]} alt='' />
                      </div>
                      <div className='w-[90px] border h-[90px]'>
                        <Image width={100} height={100}  className='w-full object-cover h-full' src={obj.image[1]} alt='' />
                      </div>
                      <div className='w-[90px] border h-[90px] sm:block hidden'>
                        <Image width={100} height={100}  className='w-full object-cover h-full' src={obj.image[1]} alt='' />
                      </div>

                    </div> */}

                  </div>

                  <div className=' p-3 h-max mt-5'>
                    <p className='text-[22px] text-[700] mt-5'>{obj.name}</p>
                    <div className='flex gap-3 mt-5'>
                      <p className='text-[16px]  text-[#F27D0C]'><IoIosStar /></p>
                      <p className='text-[16px]  text-[#F27D0C]'><IoIosStar /></p>
                      <p className='text-[16px]  text-[#F27D0C]'><IoIosStar /></p>
                      <p className='text-[16px]  text-[#F27D0C]'><IoIosStar /></p>
                      <p><IoIosStar /></p>

                    </div>
                    <p className='mt-5 text-[22px] font-[700]'>${obj.price}.00</p>


                    <p className='text-[14px] font-[400] text-[gray] mt-5'>{obj.description}</p>
                    <div className='sm:flex flex-wrap  gap-4 mt-5 '>
                      <div className=' w-max p-2 border   gap-5'>
                        <button onClick={() => DecrementValue(obj)} className='p-1 px-3 '>-</button>
                        <button className='p-1'></button>
                        <button onClick={() => IncrementValue(obj)} className='p-1 px-3'>+</button>

                      </div>
                      <button className='p-2 px-5 bg-[#4B5966] mt-2 hover:bg-[#5CAF90] text-[white] rounded-sm'>ADD TO CART</button>
                    </div>

                  </div>
            

          </div>
        </div>
      </div>

      <div className='w-[100%]  m-auto mt-10'>
        <div className='w-max  m-auto'>
          <h1 className='text-[26px] font-[600] text-[#4B5966]'>Related <span className='ab'>Product</span></h1>
        </div>
<Slider3/>

      </div>

      <Footer/>
    </>
  )
}

export default SingleProduct
