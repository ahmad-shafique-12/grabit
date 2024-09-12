'use client'
import React from "react";
// import logo from "../imag mt-2e/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo1 from '../image/logo.png'
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
// import img1 from '../image/footer-card.png'
import { LuMessageCircle } from "react-icons/lu";

const Footer = () => {
    return (
        <>
            <div className=" flex justify-between flex-wrap w-[85%] border-t-2  m-auto mt-10 pt-20  pb-20">
                <div className="lg:w-[24%]   mt-5">
                    <Image className="w-[150px]" src={logo1} alt="" />
                    <p className="text-[#898989] mt-4">
                        Grabit is the biggest market of grocery products. Get your daily needs from our store.
                    </p>

                </div>
                <div className=" w-[70%] lg:flex mt-5 hidden    flex-wrap justify-between ">
                    <div className="lg:w-[24%] w-[48%]  bb  ">
                        <h1 className=" text-[20px] font-medium">Category</h1>
                        <ul className="text-[#898989] group gap-10">
                            <li className="text-[15px] font-[400] ag mt-2  cursor-pointer">
                                Dairy & Milk
                            </li>
                            <li className="text-[15px] font-[400] ag mt-2 cursor-pointer">
                                Snack & Spice
                            </li>
                            <li className="text-[15px] font-[400] ag mt-2 cursor-pointer">
                                Fast Food
                            </li>
                            <li className="text-[15px] font-[400] ag mt-2 cursor-pointer">
                                Juice
                            </li>
                            <li className="text-[15px] font-[400] ag mt-2 cursor-pointer">
                                Bakery
                            </li>
                            <li className="text-[15px] font-[400] ag mt-2 cursor-pointer">
                                Seafood
                            </li>
                        </ul>
                    </div>

                    <div className="w-[24%] bb ">
                        <h1 className=" text-[20px] font-medium">Company</h1>
                        <ul className="text-[#898989] group">
                            <li className="text-[15px] font-[400] ag mt-2 cursor-pointer">
                                About
                            </li>
                            <li className="text-[15px] font-[400] ag mt-2 cursor-pointer">
                                Wishlist
                            </li>
                            <li className="text-[15px] font-[400] ag mt-2 cursor-pointer">
                                Shopping Cart
                            </li>
                            <li className="text-[15px] font-[400] ag mt-2 cursor-pointer">
                                Saved Address
                            </li>
                        </ul>
                    </div>

                    <div className="w-[24%]  bb ">
                        <h1 className=" text-[20px] font-medium">Account</h1>
                        <ul className="text-[#898989] group">
                            <li className="text-[15px] font-[400] ag mt-2 cursor-pointer">
                                Blogs
                            </li>
                            <li className="text-[15px] font-[400] ag mt-2 cursor-pointer">
                                Login
                            </li>
                            <li className="text-[15px] font-[400] ag mt-2 cursor-pointer">
                                Register
                            </li>
                            <li className="text-[15px] font-[400] ag mt-2 cursor-pointer">
                                Profile
                            </li>
                            <li className="text-[15px] font-[400] ag mt-2 cursor-pointer">
                                Setting
                            </li>
                        </ul>
                    </div>

                    <div className="w-[24%]  ">
                        <h1 className=" text-[20px] font-medium">Contact</h1>
                        <ul className="text-[hsl(0,0%,54%)] group">
                            <li className="text-[15px] font-[400] ag mt-2 cursor-pointer flex gap-2">
                                <p className="ab">  <IoLocationSharp /></p>
                                2548 Broaddus Maple Court, Madisonville KY 4783, USA
                            </li>
                            <li className="text-[15px] font-[400] ag mt-2 cursor-pointer flex gap-2">
                                <p className="ab"> <FaWhatsapp />   </p>
                                +92 3414162105
                            </li>
                            <li className="text-[15px] font-[400] ag mt-2 cursor-pointer flex gap-2">
                                <p className="ab">
                                    <LuMessageCircle />
                                </p>
                                abc@gmail.com
                            </li>
                            <div className="flex w-max gap-2 mt-5 ">
                                <div className="w-[30px] h-[30px] cursor-pointer dp rounded-[5px] bg-[#4B5966] flex items-center justify-center">
                                    <p className="text-white">
                                        <FaFacebookF />
                                    </p>
                                </div>
                                <div className="w-[30px] h-[30px] cursor-pointer dp rounded-[5px] bg-[#4B5966] flex items-center justify-center">
                                    <p className="text-white">
                                        <FaTwitter />
                                    </p>
                                </div>
                                <div className="w-[30px] h-[30px] cursor-pointer dp rounded-[5px] bg-[#4B5966] flex items-center justify-center">
                                    <p className="text-white">
                                        <FaLinkedin />
                                    </p>
                                </div>
                                <div className="w-[30px] h-[30px] cursor-pointer dp rounded-[5px] bg-[#4B5966] flex items-center justify-center">
                                    <p className="text-white">
                                        <FaInstagramSquare />
                                    </p>
                                </div>

                            </div>

                        </ul>
                    </div>
                </div>

                <div className="w-full  lg:hidden block mt-5 ">

                    <ul className=" flex flex-col ">
                        <li className="relative transition">
                            <input className="peer hidden" type="checkbox" id="menu-6" />
                            <div className="relative m-2 flex items-center rounded-xl border-b-4 border py-3 pl-5 text-sm text-gray-500">

                                Category
                                <label for="menu-6" className="absolute inset-0 h-full w-full cursor-pointer"></label>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <ul className="duration-400 peer-checked:max-h-96 m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl transition-all duration-300">
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                    Dariy & Milk
                                </li>
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                    Snack & Spice
                                </li>
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                    Fast  Food
                                </li>
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                    Juice
                                </li>
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                    Bakery
                                </li>
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                    Seafood
                                </li>
                            </ul>
                        </li>

                    </ul>
                    <ul className=" flex flex-col ">
                        <li className="relative transition">
                            <input className="peer hidden" type="checkbox" id="menu-7" />
                            <div className="relative m-2 flex items-center rounded-xl border-b-4 border py-3 pl-5 text-sm text-gray-500">

                                Company
                                <label for="menu-7" className="absolute inset-0 h-full w-full cursor-pointer"></label>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <ul className="duration-400 peer-checked:max-h-96 m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl transition-all duration-300">
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                    About US
                                </li>
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                    Delivery
                                </li>
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                    Legal Notice
                                </li>
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                    Term & conditions
                                </li>
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                    Secure payment
                                </li>
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                    Contact Us
                                </li>
                            </ul>
                        </li>

                    </ul>


                    <ul className=" flex flex-col ">
                        <li className="relative transition">
                            <input className="peer hidden" type="checkbox" id="menu-8" />
                            <div className="relative m-2 flex items-center rounded-xl border-b-4 border py-3 pl-5 text-sm text-gray-500">

                                Account
                                <label for="menu-8" className="absolute inset-0 h-full w-full cursor-pointer"></label>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <ul className="duration-400 peer-checked:max-h-96 m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl transition-all duration-300">
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                    Sign in
                                </li>
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                    View Cart
                                </li>
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                    Return Policy
                                </li>
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                    Become a Vendor
                                </li>
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                    Affillate program
                                </li>
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white">

                                    Payments
                                </li>
                            </ul>
                        </li>

                    </ul>


                    <ul className=" flex flex-col ">
                        <li className="relative transition">
                            <input className="peer hidden" type="checkbox" id="menu-9" />
                            <div className="relative m-2 flex items-center rounded-xl border-b-4 border py-3 pl-5 text-sm text-gray-500">

                                Contact US
                                <label for="menu-9" className="absolute inset-0 h-full w-full cursor-pointer"></label>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <ul className="duration-400 peer-checked:max-h-96 m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl transition-all duration-300">
                                <li className="flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white gap-2">
                                    <p className="ab">  <IoLocationSharp /></p>
                                    2548 Broaddus Maple Court, Madisonville KY 4783, USA
                                </li>
                                <li className=" flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white gap-2">
                                    <p className="ab"> <FaWhatsapp />   </p>
                                    +92 3414162105
                                </li>
                                <li className="flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white gap-2">
                                    <p className="ab">
                                        <LuMessageCircle />
                                    </p>
                                    abc@gmail.com
                                </li>

                                <div className="flex w-max gap-2 mt-5">
                                    <div className="w-[30px] h-[30px] cursor-pointer dp rounded-[5px] bg-[#4B5966] flex items-center justify-center">
                                        <p className="text-white">
                                            <FaFacebookF />
                                        </p>
                                    </div>
                                    <div className="w-[30px] h-[30px] cursor-pointer dp rounded-[5px] bg-[#4B5966] flex items-center justify-center">
                                        <p className="text-white">
                                            <FaTwitter />
                                        </p>
                                    </div>
                                    <div className="w-[30px] h-[30px] cursor-pointer dp rounded-[5px] bg-[#4B5966] flex items-center justify-center">
                                        <p className="text-white">
                                            <FaLinkedin />
                                        </p>
                                    </div>
                                    <div className="w-[30px] h-[30px] cursor-pointer dp rounded-[5px] bg-[#4B5966] flex items-center justify-center">
                                        <p className="text-white">
                                            <FaInstagramSquare />
                                        </p>
                                    </div>

                                </div>


                            </ul>
                        </li>

                    </ul>
                </div>

            </div>
            <div className="w-full bg-[#F8F8FB] p-5">
                <p className="text-center">Copyright Grabit all reserved.Powered by Grabit.</p>

            </div>
        </>
    );
};

export default Footer;
