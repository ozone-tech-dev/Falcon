import React from 'react'
import Image from 'next/image'
import logo from '../../assets/logo/ozon.png'
export const LowerFooter = () => {
  return (
    <div className='bg-skin-fill py-20  my-20'>
        <div className='flex flex-col justify-center items-center'>
            <Image
                src={logo}
                alt="logor"
                className='w-24 h-20 flex justify-center items-center'
                />
        </div>

        <div className=' flex flex-col justify-center items-center pb-10 '>
            <div className='py-10 flex flex-col justify-center items-center'>
                <p className='text-4xl font-bold'>What are you waiting for get</p>
                <p className='text-4xl font-bold'>started now and make your</p>
                <p className='text-4xl font-bold' >business more attractive</p>
            </div>

            <button className='text-white bg-blue-500 px-20 py-2 rounded shadow-blue-600 shadow-2xl'>Getm Started </button>
        </div>
    </div>
  )
}
