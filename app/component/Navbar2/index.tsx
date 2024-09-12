'use client'
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import img1 from '../image/logo.png'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarClose, sidebarOpen } from '@/app/Redux/Sidebar1';
import { searchValue } from '@/app/Redux/Cartslice';
import Link from 'next/link';




const Navbar2 = () => {

    const { Sidebar1 } = useSelector((state: any) => state.sidebar1);
    const { cart } = useSelector((state: any) => state.Cart)
    const dispatch = useDispatch()

    const OpenSidebar = () => {
        dispatch(sidebarOpen())

    }

    const closebar = () => {
        dispatch(sidebarClose())
        console.log("working")
    }

    const handleSearch = (e: any) => {
        dispatch(searchValue(e.target.value))
    }

    return (
        <>
            <div className=''>
                <div className='w-[85%] flex md:flex-row items-center flex-col  m-auto justify-between mt-5'>
                
                   <Link href={'/'}>
                    <div className='logo w-[170px]  text-center'>
                        <Image className='w-full' src={img1} alt='' />
                    </div>
                    </Link>
                    <div className='  md:w-[40%] w-[80%] md:mt-0 mt-5 border flex items-center  gap-5 p-4'>
                        <input onChange={handleSearch} className=' w-full  text-[14px] outline-none text-back' placeholder='search Product' />

                      <Link href={'viewproduct'}>
                            <p className='cursor-pointer text-[16px] font-[400]'><IoSearchOutline /></p>
                            </Link>
                            

                    </div>
                    <div className='w-max  lg:flex hidden gap-5 '>
                        <div className='flex items-center gap-2 color-change cursor-pointer'>
                            <p className='text-[24px] font-[400] aa'><FaRegUser />
                            </p>
                            <div>
                                <p className='text-[12px] font-[400] aa'>Account</p>
                                <p className='text-[13px] font-[500]'>LOGIN</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 color-change cursor-pointer'>
                            <p className='text-[24px] font-[400] aa'><FaRegHeart />
                            </p>

                            <Link href={'/whislist'}>
                            <div>
                                <p className='text-[12px] font-[400] aa'>Whishlist</p>
                                <p className='text-[13px] font-[500]'>{cart.length}-ITEM</p>
                            </div>
                            </Link>
                        </div>
                        <div onClick={OpenSidebar} className='flex items-center gap-2 color-change cursor-pointer'>
                            <p className='text-[24px] font-[400] aa'><HiOutlineShoppingBag />
                            </p>
                            <div>
                                <p className='text-[12px] font-[400] aa'>Cart</p>
                                <p className='text-[13px] font-[500]'>{cart.length}-ITEM</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar2
