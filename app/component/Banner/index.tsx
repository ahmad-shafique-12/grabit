'use client'
import React from 'react'
import Image from 'next/image'
import img1 from '../image/1 (1).jpg'

const Banner = () => {
    return (
        <>

            <div className='w-[85%] md:h-[350px] h-[200px] mt-10 m-auto relative'>
                    <div className='w-full h-full '>
                        <Image className='w-full h-full object-cover' src={img1} alt="Image 1" />
                    </div>
                <div className='w-full h-full absolute top-0 left-0 flex justify-end px-5 items-center'>
                    <div className='' >
                        <h1 className='md:text-[40px]  text-[20px] font-[700] text-[#303030]'>Fresh Fruits<br />Healthy Products</h1>
                        <h1 className='md:text-[20px]  text-[22px] font-[700] text-[#5CAF90]' >30% Off <span className='text-[#303030]'>Hurry up!!!</span></h1>
                        <button className='btn2 mt-5 hover:bg-[#5CAF90] text-white p-2 px-3 rounded-[5px]'>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner
