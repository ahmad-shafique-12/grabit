'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DeCrement, InCrement, RemoveIdx } from '../Redux/Cartslice';
import { RxCross2 } from 'react-icons/rx';
import toast, { Toaster } from 'react-hot-toast';
import Navbar1 from '../component/Navbar1';
import Navbar2 from '../component/Navbar2';
import Navbar3 from '../component/Navbar3';
import Image from 'next/image';
import Footer from '../component/Footer';

const Checkout = () => {
  const { cart, } = useSelector((state: any) => state.Cart);
  const dispatch = useDispatch();
  const IncrementValue = (e: any) => {
    dispatch(InCrement(e));
  }

  const DecrementValue = (e: any) => {
    dispatch(DeCrement(e));
    console.log("IncrementValue called");
  }

  const Removeindex = (idx: any) => {
    dispatch(RemoveIdx(idx))
    toast.success("Remove Item In Cart Successfully!")

  }
  return (
    <>
      <div><Toaster /></div>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      <div className=" w-[85%] md:flex-col sm:flex justify-between  m-auto mt-10">


        <div className='md:block hidden'>
          <table className="w-full ">
            <thead className="border-b bg-[#00000096]">
              <tr>


                <td className="whitespace-normal py-4 text-sm font-semibold text-white sm:px-3">
                  Category Name
                </td>

                <td className="whitespace-normal py-4 text-sm font-medium text-white sm:px-3">
                  Image
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-white sm:px-3">
                  Price
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-white sm:px-3">
                  InCrease/DeCrease
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-white sm:px-3">
                  Total
                </td>
              </tr>
            </thead>

            <thead className="border-b bg-[#00000096] ">
              {
                cart.map((e: any, i: any) => {
                  return (<>

                    <tr>
                      {/* <td className="whitespace-normal py-4 text-sm font-semibold text-white sm:px-3 flex flex-wrap"> */}

                      <RxCross2 onClick={() => Removeindex(i)}
                        className="text-[30px] font-bold cursor-pointer " />

                      {/* </td> */}
                      <td className="whitespace-normal py-4 text-sm font-semibold text-white sm:px-3 flex flex-wrap">
                        {e.name}
                      </td>

                      <td className="py-4 text-sm font-normal text-white sm:px-3 lg:table-cell">
                        <Image width={100} height={100} src={e.image[0]} alt='' className='w-[70px] h-[70px]' />
                      </td>
                      <td className="whitespace-normal py-4 text-sm font-medium text-white sm:px-3">
                        ${e.price}.00
                      </td>
                      <td className="whitespace-normal py-4 text-sm font-medium text-white sm:px-3">
                        <div className=" w-max h-max  gap-2  flex ">
                          <button
                            onClick={() => IncrementValue(e)}
                            className="p-2 w  border "
                          >
                            +
                          </button>
                          <p className=" border p-2 text-center ">{e.quantity}</p>
                          <button
                            onClick={() => DecrementValue(e)}
                            className="p-2 border "
                          >
                            -
                          </button>
                        </div>
                      </td>
                      <td className="whitespace-normal py-4 text-sm font-medium text-white sm:px-3">
                        Total: ${e.quantity * e.price}
                      </td>
                    </tr>

                  </>)
                })
              }
            </thead>
          </table>
        </div>
        {cart.map((e: any, i: any) => {
          return (
            <>
              <div className="flex md:hidden block md:flex-row flex-col border  md:w-full sm:w-[48%] w-[100%] p-2 items-center gap-5 md:justify-around justify-center">
                <p
                  onClick={() => Removeindex(i)}
                  className="text-[30px] font-bold cursor-pointer "
                >
                  <RxCross2 />
                </p>
                <img className="md:w-[150px] w-[200px]" src={e.image[0]} />
                <p className="text-[20px]  font-medium">{e.name}</p>
                <p className="text-[20px]  font-medium">${e.price}.00</p>
                <div className=" w-max h-max  gap-2  flex ">
                  <button
                    onClick={() => IncrementValue(e)}
                    className="p-2 w  border "
                  >
                    +
                  </button>
                  <p className=" border p-2 text-center ">{e.quantity}</p>
                  <button
                    onClick={() => DecrementValue(e)}
                    className="p-2 border "
                  >
                    -
                  </button>
                </div>

                <p className="text-[#F07253] font-bold">
                  Total: ${e.quantity * e.price}
                </p>
              </div>
            </>
          );
        })}
      </div>
      <Footer/>
    </>
  )
}

export default Checkout