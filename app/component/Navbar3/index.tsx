'use client'
import React, { useState } from 'react';
import { TbGridDots } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineBakeryDining } from "react-icons/md";
import { GiFruitBowl } from "react-icons/gi";
import { RiCake3Line } from "react-icons/ri";
import { RiDrinks2Line } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineAddLocation } from "react-icons/md";


const Navbar3 = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index: any) => {
        setActiveIndex(index);
    };

    return (
        <>
            <div className="w-full border mt-5 pt-5 pb-5 hidden lg:block">
                <div className='w-[85%]  relative m-auto  flex justify-between'>
                    {/*   Categories Start*/}
                    <button className='flex items-center gap-3 btn p-3 rounded-md   relative group'>
                        <p className='text-[20px] '><TbGridDots /></p>
                        <p className='text[20px] hidden xl:block'>All Categories</p>
                        <p className='hidden xl:block'><FaAngleDown /></p>

                        <div className='w-[600px] z-10 bg-white absolute border shadow-md top-[80px] left-0 p-2 flex justify-between transition-all duration-900  group-hover:top-[50px] invisible group-hover:visible'>
                            <div className='bg-[#EDEEF0] w-[250px] rounded-md p-3'>
                                <div
                                    className={`bg-white w-full border flex items-center gap-4 p-3 rounded-md border-[#5CAF90] ${activeIndex === 0 ? 'bg-green-100' : ''}`}
                                    onClick={() => handleClick(0)}
                                >
                                    <p className='text-black ab text-[14px]'><MdOutlineBakeryDining /></p>
                                    <p className='text-black ab text-[14px] '>Dairy & Bakery</p>
                                </div>
                                <div
                                    className={`bg-white w-full border mt-2 flex items-center gap-4 p-3 rounded-md border-[#5CAF90] ${activeIndex === 1 ? 'bg-green-100' : ''}`}
                                    onClick={() => handleClick(1)}
                                >
                                    <p className='text-black text-[14px] '><GiFruitBowl /></p>
                                    <p className='text-black text-[14px] '>Fruits & Vegetable</p>
                                </div>
                                <div
                                    className={`bg-white w-full border mt-2 flex items-center gap-4 p-3 rounded-md border-[#5CAF90] ${activeIndex === 2 ? 'bg-green-100' : ''}`}
                                    onClick={() => handleClick(2)}
                                >
                                    <p className='text-black text-[14px] '><RiCake3Line /></p>
                                    <p className='text-black text-[14px] '>Snack & Spice</p>
                                </div>
                                <div
                                    className={`bg-white w-full mt-2 border flex items-center gap-4 p-3 rounded-md border-[#5CAF90] ${activeIndex === 3 ? 'bg-green-100' : ''}`}
                                    onClick={() => handleClick(3)}
                                >
                                    <p className='text-black text-[14px] '><RiDrinks2Line /></p>
                                    <p className='text-black text-[14px] '>Juice & Drink</p>
                                </div>
                            </div>

                            <div className=' w-[320px] relative'>
                                {activeIndex === 0 && (
                                    <div className='w-full h-full  absolute flex'>
                                        <ul className=" w-[50%] p-2 flex flex-col items-start m-0 gap-3">
                                            <h1 className="text-[20px] ab">Dairy</h1>
                                            <li className='text-[14px] text-black font-[500]'>Milk</li>
                                            <li className='text-[14px] text-black font-[500]'>Ice Cream</li>
                                            <li className='text-[14px] text-black font-[500]'>Cheese</li>
                                            <li className='text-[14px] text-black font-[500]'>Frozen Custard</li>
                                            <li className='text-[14px] text-black font-[500]'>Yogurt</li>
                                        </ul>

                                        <ul className=" w-[50%] p-2 flex flex-col items-start m-0 gap-3">
                                            <h1 className="text-[20px] ab">Bakery</h1>
                                            <li className='text-[14px] text-black font-[500]'>Cake And Pastry</li>
                                            <li className='text-[14px] text-black font-[500]'>Rusk Toast</li>
                                            <li className='text-[14px] text-black font-[500]'>Bread & Buns</li>
                                            <li className='text-[14px] text-black font-[500]'>Chocolate Browine</li>
                                            <li className='text-[14px] text-black font-[500]'>Cream Roll</li>
                                        </ul>
                                    </div>
                                )}
                                {activeIndex === 1 && (
                                    <div className='w-full h-full  absolute flex'>
                                        <ul className=" w-[50%] p-2 flex flex-col items-start m-0 gap-3">
                                            <h1 className="text-[20px] ab">Fruits</h1>
                                            <li className='text-[14px] text-black font-[500]'>Cauliflower</li>
                                            <li className='text-[14px] text-black font-[500]'>Bell peppers</li>
                                            <li className='text-[14px] text-black font-[500]'>Broccoli</li>
                                            <li className='text-[14px] text-black font-[500]'>Cabbage</li>
                                            <li className='text-[14px] text-black font-[500]'>Tomato</li>
                                        </ul>
                                        <ul className=" w-[50%] p-2 flex flex-col items-start m-0 gap-3">
                                            <h1 className="text-[20px] ab">Vegetables</h1>
                                            <li className='text-[14px] text-black font-[500]'>Carrot</li>
                                            <li className='text-[14px] text-black font-[500]'>Potato</li>
                                            <li className='text-[14px] text-black font-[500]'>Spinach</li>
                                            <li className='text-[14px] text-black font-[500]'>Pepper</li>
                                            <li className='text-[14px] text-black font-[500]'>Onion</li>
                                        </ul>
                                    </div>
                                )}
                                {activeIndex === 2 && (
                                    <div className='w-full h-full  absolute flex'>
                                        <ul className="w-[50%] p-2 flex flex-col items-start m-0 gap-3">
                                            <h1 className="text-[20px] ab">Snacks</h1>
                                            <li className='text-[14px] text-black font-[500]'>French Fries</li>
                                            <li className='text-[14px] text-black font-[500]'>Potato Chips</li>
                                            <li className='text-[14px] text-black font-[500]'>Biscuits & Cookies</li>
                                            <li className='text-[14px] text-black font-[500]'>Popcorn</li>
                                            <li className='text-[14px] text-black font-[500]'>Rice Cake</li>
                                        </ul>
                                        <ul className="w-[50%] p-2 flex flex-col items-start m-0 gap-3">
                                            <h1 className="text-[20px] ab">Spices</h1>
                                            <li className='text-[14px] text-black font-[500]'>Cinnamon Powder</li>
                                            <li className='text-[14px] text-black font-[500]'>Cumin Powder</li>
                                            <li className='text-[14px] text-black font-[500]'>Fenugreek Powder</li>
                                            <li className='text-[14px] text-black font-[500]'>Long Pepper</li>
                                            <li className='text-[14px] text-black font-[500]'>Black Pepper</li>
                                        </ul>
                                    </div>
                                )}
                                {activeIndex === 3 && (
                                    <div className='w-full h-fullabsolute flex'>
                                        <ul className="w-[50%] p-2 flex flex-col items-start m-0 gap-3">
                                            <h1 className="text-[20px] ab">Juice</h1>
                                            <li className='text-[14px] text-black font-[500]'>Mango Juice</li>
                                            <li className='text-[14px] text-black font-[500]'>Coconut Water</li>
                                            <li className='text-[14px] text-black font-[500]'>Tetra Pack</li>
                                            <li className='text-[14px] text-black font-[500]'>Apple Juice</li>
                                            <li className='text-[14px] text-black font-[500]'>Lychee Juice</li>
                                        </ul>
                                        <ul className="w-[50%] p-2 flex flex-col items-start m-0 gap-3">
                                            <h1 className="text-[20px] ab">Soft Drink</h1>
                                            <li className='text-[14px] text-black font-[500]'>Breizh Cola</li>
                                            <li className='text-[14px] text-black font-[500]'>Green Cola</li>
                                            <li className='text-[14px] text-black font-[500]'>Jolt Cola</li>
                                            <li className='text-[14px] text-black font-[500]'>Mecca Cola</li>
                                            <li className='text-[14px] text-black font-[500]'>Topsia Cola</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </button>

                    {/*   Categories End */}
                    {/*                   DropDown */}

                    <ul className='flex gap-5'>
                        <li className='flex items-center cursor-pointer gap-2 text-[16px] group '>Home <FaAngleDown />

                            <div className=' w-[200px] z-10 shadow-lg absolute top-[80px] p-3  bg-white transition-all duration-900 group-hover:top-[50px] invisible group-hover:visible'>
                                <ul className=''>
                                    <li className='text-[13px] font-[400] cursor-pointer ag'>Grocery</li>
                                    <li className='text-[13px] font-[400] cursor-pointer mt-2 ag'>Fashion</li>
                                    <li className='text-[13px] font-[400] cursor-pointer mt-2 ag'>Fashion</li>
                                </ul>
                            </div>
                        </li>
                        <li className='flex items-center cursor-pointer  gap-2 text-[16px]  group'>Categories <FaAngleDown />
                            <div className="w-full z-10 absolute bg-white  border shadow-lg left-0 top-[70px] flex justify-between pb-3 transition-all duration-900 group-hover:top-[50px] group-hover:visible invisible">
                                <div className='w-[300px]  p-3 ab'>
                                    <h1 className='ml-2 text-[700]'>Classic</h1>
                                    <div className='w-[95%] m-auto border mt-2'></div>
                                    <ul className='p-2  row-gap-5'>
                                        <li className='text-[13px] font-[400]  cursor-pointer   text-black ag'>Left Sidebar 3 Column</li>
                                        <li className='text-[13px] font-[400] cursor-pointer mt-5 text-black  ag'>Left Sidebar 4 Column</li>
                                        <li className='text-[13px] font-[400] cursor-pointer mt-5 text-black ag'>Right Sidebar 3 Column</li>
                                        <li className='text-[13px] font-[400] cursor-pointer mt-5 text-black ag'>Right Sidebar 4 Column</li>
                                        <li className='text-[13px] font-[400] cursor-pointer mt-5 text-black ag'>Full Width 4 Column</li>
                                    </ul>
                                </div>
                                <div className='w-[300px]  p-3 ab'>
                                    <h1 className='ml-2 text-[700]'>Banner</h1>
                                    <div className='w-[95%] m-auto border mt-2'></div>
                                    <ul className='p-2  row-gap-5'>
                                        <li className='text-[13px] font-[400]  cursor-pointer   text-black ag'>Left Sidebar 3 Column</li>
                                        <li className='text-[13px] font-[400] cursor-pointer mt-5 text-black  ag'>Left Sidebar 4 Column</li>
                                        <li className='text-[13px] font-[400] cursor-pointer mt-5 text-black ag'>Right Sidebar 3 Column</li>
                                        <li className='text-[13px] font-[400] cursor-pointer mt-5 text-black ag'>Right Sidebar 4 Column</li>
                                        <li className='text-[13px] font-[400] cursor-pointer mt-5 text-black ag'>Full Width 4 Column</li>
                                    </ul>
                                </div>
                                <div className='w-[300px]  p-3 ab'>
                                    <h1 className='ml-2 text-[700]'>Columns</h1>
                                    <div className='w-[95%] m-auto border mt-2'></div>
                                    <ul className='p-2  row-gap-5'>
                                        <li className='text-[13px] font-[400]  cursor-pointer   text-black ag'>Left Sidebar 3 Column</li>
                                        <li className='text-[13px] font-[400] cursor-pointer mt-5 text-black  ag'>Left Sidebar 4 Column</li>
                                        <li className='text-[13px] font-[400] cursor-pointer mt-5 text-black ag'>Right Sidebar 3 Column</li>
                                        <li className='text-[13px] font-[400] cursor-pointer mt-5 text-black ag'>Right Sidebar 4 Column</li>
                                        <li className='text-[13px] font-[400] cursor-pointer mt-5 text-black ag'>Full Width 4 Column</li>
                                    </ul>
                                </div>
                                <div className='w-[300px]  p-3 ab'>
                                    <h1 className='ml-2 text-[700]'>List</h1>
                                    <div className='w-[95%] m-auto border mt-2'></div>
                                    <ul className='p-2  row-gap-5'>
                                        <li className='text-[13px] font-[400]  cursor-pointer   text-black ag'> shop Left 3 Column</li>
                                        <li className='text-[13px] font-[400] cursor-pointer mt-5 text-black  ag'>Shop Right 4 Column</li>
                                        <li className='text-[13px] font-[400] cursor-pointer mt-5 text-black ag'> Banner Right 3 Column</li>
                                        <li className='text-[13px] font-[400] cursor-pointer mt-5 text-black ag'>Banner Left 4 Column</li>
                                        <li className='text-[13px] font-[400] cursor-pointer mt-5 text-black ag'>Full Width 4 Columns</li>
                                    </ul>
                                </div>
                            </div>

                        </li>

                        <li className='flex items-center cursor-pointer  gap-2 text-[16px] group '>Products <FaAngleDown />
                            <div className=' w-[200px] z-10 shadow-lg absolute top-[80px] p-3  bg-white transition-all duration-900 group-hover:top-[50px] invisible group-hover:visible'>
                                <ul className=''>
                                    <li className='text-[13px] font-[400] cursor-pointer ag'>Product Pages</li>
                                    <li className='text-[13px] font-[400] cursor-pointer mt-4 ag'>Product Accordion</li>
                                    <li className='text-[13px] font-[400] cursor-pointer mt-4 ag'>Product Full Width</li>
                                    <li className='text-[13px] font-[400] cursor-pointer mt-4 ag'>Accordion Full Width</li>

                                </ul>
                            </div>
                        </li>
                        <li className='flex items-center cursor-pointer  gap-2 text-[16px] group'>Blog <FaAngleDown />
                            <div className=' w-[200px] z-10 shadow-lg absolute top-[80px] p-3  bg-white transition-all duration-900 group-hover:top-[50px] invisible group-hover:visible'>
                                <ul className=''>
                                    <li className='text-[13px] font-[400] cursor-pointer ag'>Left Sidebar</li>
                                    <li className='text-[13px] font-[400] cursor-pointer mt-4 ag'>Right Sidebar</li>
                                    <li className='text-[13px] font-[400] cursor-pointer mt-4 ag'>Full Width</li>
                                    <li className='text-[13px] font-[400] cursor-pointer mt-4 ag'>Detail Left Sidebar</li>
                                    <li className='text-[13px] font-[400] cursor-pointer mt-4 ag'>Detail Right Sidebar</li>
                                    <li className='text-[13px] font-[400] cursor-pointer mt-4 ag'>Detail Full Width</li>
                                </ul>
                            </div>
                        </li>
                        <li className='flex items-center cursor-pointer gap-2 text-[16px] group'>Pages <FaAngleDown />
                            <div className=' w-[200px] z-10 shadow-lg absolute top-[80px] p-4  bg-white transition-all duration-900 group-hover:top-[50px] invisible group-hover:visible'>
                                <ul className=''>
                                    <li className='text-[13px] font-[400] cursor-pointer ag'>About Us</li>
                                    <li className='text-[13px] font-[400] cursor-pointer mt-4 ag'>Contact US</li>
                                    <li className='text-[13px] font-[400] cursor-pointer mt-4 ag'>Cart</li>
                                    <li className='text-[13px] font-[400] cursor-pointer mt-4 ag'>Checkout</li>
                                    <li className='text-[13px] font-[400] cursor-pointer mt-4 ag'>Compare</li>
                                    <li className='text-[13px] font-[400] cursor-pointer mt-4 ag'>FAQ</li>
                                    <li className='text-[13px] font-[400] cursor-pointer mt-4 ag'>Login</li>

                                </ul>
                            </div>

                        </li>
                        <li className='flex items-center cursor-pointer hover:text-[#5CAF90]  gap-2 text-[16px]'> <BiSolidOffer />  Offers </li>
                    </ul>

                    {/*            DropDown End */}


                    <button className='flex items-center gap-5 btn p-1  rounded-md px-3   relative group'>
                        <p className='text-[18px]'><SlLocationPin /></p>
                        <p className='text-[16px]'>New York </p>
                        <p className=''> <FaAngleDown /></p>
                        <div className='w-[200px] z-10  top-[80px] bg-white shadow-md absolute p-3 transition-all duration-900 group-hover:top-[50px] invisible group-hover:visible '>

                            <div className='hover:border-[#5CAF90] border gap-3 p-2 text-black flex items-center  '>
                                <p className='text-black ab text-[14px]'><MdOutlineAddLocation /></p>
                                <p className='text-black ab text-[14px]'>Current Location</p>
                            </div>
                            <div className='hover:border-[#5CAF90] border gap-3 p-2 mt-4  text-black flex items-center  '>
                                <p className='text-black ab text-[14px]'><MdOutlineAddLocation /></p>
                                <p className='text-black ab text-[14px]'>Los Angeles</p>
                            </div>
                             <div className='hover:border-[#5CAF90] border gap-3 p-2 mt-4 text-black flex items-center  '>
                                <p className='text-black ab text-[14px]'><MdOutlineAddLocation /></p>
                                <p className='text-black ab text-[14px]'>Chicage</p>
                            </div>
                             <div className='hover:border-[#5CAF90] border gap-3 p-2 mt-4 text-black flex items-center  '>
                                <p className='text-black ab text-[14px]'><MdOutlineAddLocation /></p>
                                <p className='text-black ab text-[14px]'>Houston</p>
                            </div>
                             <div className='hover:border-[#5CAF90] border gap-3 p-2 mt-4 text-black flex items-center  '>
                                <p className='text-black ab text-[14px]'><MdOutlineAddLocation /></p>
                                <p className='text-black ab text-[14px]'>Phoenix</p>
                            </div>
                             <div className='hover:border-[#5CAF90] border gap-3 p-2 mt-4 text-black flex items-center  '>
                                <p className='text-black ab text-[14px]'><MdOutlineAddLocation /></p>
                                <p className='text-black ab text-[14px]'>San Diego</p>
                            </div>
                        </div>

                    </button>
                </div>
            </div>
        </>
    );
}

export default Navbar3;
