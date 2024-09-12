'use client'
import React from 'react'
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaWhatsapp, FaRegUser, FaRegHeart, FaBars } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar, sidebarOpen } from '@/app/Redux/Sidebar1';
import { DeCrement, InCrement, RemoveIdx } from '@/app/Redux/Cartslice';
import Image from 'next/image';
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
import { sidebarClose2, sidebarOpen2 } from '@/app/Redux/sidebar2';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import img1 from '../image/empty-cart.webp'
import toast, { Toaster } from 'react-hot-toast';

const Navbar1 = () => {
    const { Sidebar1 } = useSelector((state: any) => state.sidebar1);
    const { Sidebar2 } = useSelector((state: any) => state.sidebar2);
    const { cart } = useSelector((state: any) => state.Cart);
    const dispatch = useDispatch();

    const OpenSidebar = () => {
        dispatch(sidebarOpen());
    };

    const closebar = () => {
        dispatch(closeSidebar())
    };


    const OpenSidebar2 = () => {
        dispatch(sidebarOpen2());

    };

    const closebar2 = () => {
        dispatch(sidebarClose2());
        console.log("working")
    };

    const IncrementValue = (e: any) => {
        dispatch(InCrement(e));
    }

    const DecrementValue = (e: any) => {
        dispatch(DeCrement(e));
        console.log("IncrementValue called");
    }

    const Removeindex = (idx: any) => {
        dispatch(RemoveIdx(idx))
        toast("Remove Item In Cart Successfully!")

    }

    const handleOverlay=(event:any)=>{
        if(event.target.classList.contains("overlay")){
            dispatch(closeSidebar())
        }
    }

    // const {cart}=useSelector((state:any)=>state.Cart)
    // console.log(Sidebar1,"KKKKKKKKKKKKKKKkk")
    return (
        <>
        <div><Toaster/></div>
            <div className='bg-[#F8F8FB] w-full p-2'>
                <div className='w-[85%] p-2 flex m-auto justify-between items-center'>
                    <p onClick={OpenSidebar2} className='cursor-pointer text-[20px] md:hidden block'><FaBars /></p>
                    <div className='md:flex hidden gap-5'>
                        <div className='flex items-center gap-2 text-[13px] font-[400]'>
                            <p className='cursor-pointer hover:text-[#5CAF90]'><MdOutlinePhoneInTalk /></p>
                            <p className='cursor-pointer'>+92 3414162105</p>
                        </div>
                        <div className='flex items-center gap-2 text-[13px] font-[400]'>
                            <p className='cursor-pointer hover:text-[#5CAF90]'><FaWhatsapp /></p>
                            <p className='cursor-pointer'>+92 3414162105</p>
                        </div>
                    </div>
                    <p className='text-[13px] font-[400] cursor-pointer lg:block hidden '>World&apos;s Fastest Online Shopping Destination</p>
                    <div className='lg:flex gap-3 text-[13px] font-[400] hidden '>
                        <p>Help?</p>
                        <p>Track Order?</p>
                        <select className='bg-transparent outline-none'>
                            <option>English</option>
                            <option>Italiano</option>
                        </select>
                        <select className='bg-transparent outline-none'>
                            <option>Dollar</option>
                            <option>USD $</option>
                            <option>EUR</option>
                        </select>
                    </div>
                    <div className='flex gap-5 text-[20px] lg:hidden'>
                        <p className='cursor-pointer'><FaRegUser /></p>
                        <p className='cursor-pointer'><FaRegHeart /></p>

                        <div className=' relative'>
                            <p onClick={OpenSidebar} className='cursor-pointer absolute '><HiOutlineShoppingBag /> </p>
                            <div className='top-[-15px] shadow-lg bg-black text-[white] p-1 text-[10px] right-[-25px] absolute rounded-[100%]'>{cart.length}</div>


                        </div>

                        {/* <p className='cursor-pointer md:block hidden'><FaBars /></p> */}
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div onClick={handleOverlay} className={`w-full h-screen ${Sidebar1 ? "block" : "hidden"} overlay bg-[rgb(0,0,0,0.7)] fixed top-0 left-0 z-20 cursor-crosshair`}>
                <div className={`w-[300px] h-full absolute top-0 right-0 bg-white z-30 shadow-md cursor-auto overflow-auto `}>
                    <div className='w-full border flex p-5 items-center justify-between'>
                        <p>My Cart</p>
                        <p onClick={closebar} className='cursor-pointer'><RxCross2 /></p>
                    </div>

                    {
                        cart && cart.length > 0 ?
                            <>
                                {
                                    cart.map((e: any, index: number) => (
                                        <div key={index} className="border flex items-center justify-between p-5">
                                            <Image className="w-[70px] h-[70px] border" src={e.image[0]} alt={e.name} />
                                            <div>
                                                <p className='text-[15px] font-[400]'>{e.name.length > 10 ? `${e.name.substring(0, 10)}...` : e.name}</p>
                                                <p className='text-[15px] font-[600]'>${e.quantity * e.price}.00</p>
                                                <div className='border w-max p-1 gap-5'>
                                                    <button onClick={() => DecrementValue(e)} className='p-1'>-</button>
                                                    <button className='p-1'>{e.quantity}</button>
                                                    <button onClick={() => IncrementValue(e)} className='p-1'>+</button>
                                                </div>
                                            </div>
                                            <p onClick={() => Removeindex(index)} className="text-[15px] text-[red]"><RxCross2 /></p>
                                        </div>
                                    ))
                                }
                            </>
                            :
                            <div className="w-full p-2 border ">

                                <Image src={img1} alt='' />
                            </div>

                    }





                    <div className="border-t border-b py-2 p-5 mt-[180px] ">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-400">Subtotal</p>
                            <p className="text-lg font-semibold text-gray-900">
                                ${cart.reduce((Total: number, element: any) => {
                                    return Total + (element.quantity * element.price);
                                }, 0)}
                            </p>
                        </div>
                    </div>


                    <Link href={"/checkout"}>
                        <div className="text-center p-5">
                            <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                Checkout
                                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>


            {/* --------------------Sidebar end----------------------- */}

            <div className={`w-[250px]  h-full bg-white z-30 shadow-md overflow-auto ${Sidebar2} translate-all duration-300 top-0 fixed`}>
                <p onClick={closebar2} className='cursor-pointer text-[20px]'><RxCross2 /></p>

                <ul className=" flex flex-col ">
                    <li className="relative transition">
                        <input className="peer hidden" type="checkbox" id="menu-1" />
                        <div className="relative m-2 flex items-center rounded-xl border-b-4 border py-3 pl-5 text-sm text-gray-500">

                            Home
                            <label htmlFor="menu-1" className="absolute inset-0 h-full w-full cursor-pointer"></label>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <ul className="duration-400 peer-checked:max-h-96 m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl transition-all duration-300">
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Gorcery
                            </li>
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Fashion
                            </li>
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Fashion
                            </li>
                        </ul>
                    </li>

                </ul>

                <ul className=" flex flex-col">
                    <li className="relative transition">
                        <input className="peer hidden" type="checkbox" id="menu-2" />
                        <div className="relative m-2 flex items-center rounded-xl border-b-4 border py-3 pl-5 text-sm text-gray-500">

                            Categories
                            <label htmlFor="menu-2" className="absolute inset-0 h-full w-full cursor-pointer"></label>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <ul className="duration-400 peer-checked:max-h-96 m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl transition-all duration-300">
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Classic Variation
                            </li>
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Class Variation
                            </li>
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Coloumns Variation
                            </li>
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                List Variation
                            </li>
                        </ul>
                    </li>

                </ul>

                <ul className=" flex flex-col">
                    <li className="relative transition">
                        <input className="peer hidden" type="checkbox" id="menu-3" />
                        <div className="relative m-2 flex items-center rounded-xl border-b-4 border py-3 pl-5 text-sm text-gray-500">

                            Products
                            <label htmlFor="menu-3" className="absolute inset-0 h-full w-full cursor-pointer"></label>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <ul className="duration-400 peer-checked:max-h-96 m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl transition-all duration-300">
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Product Page
                            </li>
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Product Accordion
                            </li>
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Product Full Widtth
                            </li>
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Accordion Full Width
                            </li>
                        </ul>
                    </li>

                </ul>

                <ul className=" flex flex-col">
                    <li className="relative transition">
                        <input className="peer hidden" type="checkbox" id="menu-4" />
                        <div className="relative m-2 flex items-center rounded-xl border-b-4 border py-3 pl-5 text-sm text-gray-500">

                            Blog
                            <label htmlFor="menu-4" className="absolute inset-0 h-full w-full cursor-pointer"></label>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <ul className="duration-400 peer-checked:max-h-96 m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl transition-all duration-300">
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                                Blog Left Sidebar
                            </li>
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Blog Right Sidebar
                            </li>
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Blog Detail Left Sidebar
                            </li>
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Blog Detail Right Sidebar
                            </li>

                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Blog Full Width
                            </li>
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Blog Detail Full Width
                            </li>
                        </ul>
                    </li>

                </ul>


                <ul className=" flex flex-col">
                    <li className="relative transition">
                        <input className="peer hidden" type="checkbox" id="menu-5" />
                        <div className="relative m-2 flex items-center rounded-xl border-b-4 border py-3 pl-5 text-sm text-gray-500">

                            Pages
                            <label htmlFor="menu-5" className="absolute inset-0 h-full w-full cursor-pointer"></label>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <ul className="duration-400 peer-checked:max-h-96 m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl transition-all duration-300">
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">
                                About Us
                            </li>
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Contact Us
                            </li>
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Cart
                            </li>
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Checkout
                            </li>

                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Compare
                            </li>
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                FAQ
                            </li>
                            <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                Login
                            </li>
                        </ul>
                    </li>

                </ul>
                <div>
                    <div className='border w-max m-auto '>

                        <button className="bg-[#4B5966] rounded-[5px] p-2 text-white"><FaFacebookF /></button>
                        <button className="bg-[#4B5966]  rounded-[5px] ml-2 p-2 text-white"><FaTwitter /></button>
                        <button className="bg-[#4B5966]  rounded-[5px] ml-2 p-2 text-white"><FaInstagramSquare /></button>
                        <button className="bg-[#4B5966] rounded-[5px] ml-2 p-2 text-white"><FaLinkedin />
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Navbar1;
