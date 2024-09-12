'use client'
import Image from 'next/image'
import React from 'react'
import img1 from '../image/2.jpg'
import img2 from '../image/3.jpg'

const Banner2 = () => {
    return (
        <>
          <div className='w-[85%] m-auto  flex lg:flex-row  flex-col justify-between mt-10 gap-10'>
            <div className="lg:w-[49%] w-[100%] md:h-[300px] h-[200px]  relative mt-5">
                    <div className='w-full h-full '>
                        <Image className='w-full h-full object-cover' src={img1} alt="Image 1" />
                    </div>
                <div className='w-full h-full absolute top-0 left-0 flex justify-end px-5 items-center'>
                    <div className='' >
                        <h1 className='md:text-[30px]  text-[18px] font-[700] text-[#303030]'>Fresh Fruits<br />Healthy Products</h1>
                        <h1 className='md:text-[22px]  text-[19px] font-[700] text-[#5CAF90]' >30% Off <span className='text-[#303030]'>Hurry up!!!</span></h1>
                        <button className='btn2 mt-5 hover:bg-[#5CAF90] text-white p-2 px-3 rounded-[5px]'>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="lg:w-[49%] w-[100%] md:h-[300px] h-[200px] mt-5   relative">
                    <div className='w-full h-full '>
                        <Image className='w-full h-full object-cover' src={img2} alt="Image 1" />
                    </div>
                <div className='w-full h-full absolute top-0 left-0 flex justify-end px-5 items-center'>
                    <div className='' >
                        <h1 className='md:text-[30px]  text-[18px] font-[700] text-[#303030]'>Fresh Fruits<br />Healthy Products</h1>
                        <h1 className='md:text-[22px]  text-[18px] font-[700] text-[#5CAF90]' >30% Off <span className='text-[#303030]'>Hurry up!!!</span></h1>
                        <button className='btn2 mt-5 hover:bg-[#5CAF90] text-white p-2 px-3 rounded-[5px]'>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
            </div> 



            {/* <div className='w-[85%] md:h-[350px] h-[200px] mt-10 m-auto relative'>
            </div> */}
        </>
    )
}

export default Banner2
