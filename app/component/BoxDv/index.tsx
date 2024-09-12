import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { FaHandHoldingDroplet } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const BoxDv = () => {
    return (
        <>
        <div className="w-[85%] m-auto  mt-10 flex flex-wrap justify-between">
            <div className='border lg:w-[24%] sm:w-[49%] w-[100%] px-5 pt-10 pb-10 mt-3 flex flex-col items-center'>
                <p className="ab text-[50px] font-[400]"><CiDeliveryTruck /> </p>
                <p className='text-[18px] font-[600] mt-2'>Free Shipping</p>
                <p className='text-[16px] font-[300] text-[gray] text-center mt-2'>Free shipping on all Us order or order above $200</p>
            </div>
            <div className='border lg:w-[24%] sm:w-[49%] w-[100%] px-5 pt-10 pb-10 mt-3 flex flex-col items-center'>
                <p className="ab text-[50px] font-[400]"><FaHandHoldingDroplet /></p>
                <p className='text-[18px] font-[600] mt-2'>24X7 Support</p>
                <p className='text-[16px] font-[300] text-[gray] text-center mt-2'>Contact us 24 hours a day 7 days a week</p>
            </div>
            <div className='border lg:w-[24%] sm:w-[49%] w-[100%] px-5 pt-10 pb-10 mt-3 flex flex-col items-center'>
                <p className="ab text-[50px] font-[400]"><BiSolidOffer />  </p>
                <p className='text-[18px] font-[600] mt-2'>30 Days Return</p>
                <p className='text-[16px] font-[300] text-[gray] text-center mt-2'>Simply return it within 30 days a week</p>
            </div>
            <div className='border lg:w-[24%] sm:w-[49%] w-[100%] px-5 pt-10 pb-10 mt-3 flex flex-col items-center'>
                <p className="ab text-[50px] font-[400]"><RiMoneyDollarCircleLine /></p>
                <p className='text-[18px] font-[600] mt-2'>Payment</p>
                <p className='text-[16px] font-[300] text-[gray] text-center mt-2'>Contact us 24 hours a day 7 days a week</p>
            </div>
        </div>
        </>
    )
}

export default BoxDv
