import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/assets/logo/ozon.png'
import { RiArrowDropDownLine } from "react-icons/ri";

export const Header = () => {
  return (
    <div className='flex justify-center gap-60 sticky '>
        <div>
            <a href="/">
            <Image
            src={Logo}
            alt="Picture of the author"
            className='w-24 h-20'
            />
            </a>
        </div>
        <div className='flex gap-10  relative top-8 '>
            <a href="#template" className='flex hover:underline'> 
                <p className='text-white ' >Templates </p> 
                <small><RiArrowDropDownLine className='w-7 h-7'/></small>
            </a> 
            <a href="#galleries " className='flex hover:underline'> 
                <p className='text-white'>Galleries</p> 
                <small><RiArrowDropDownLine className='w-7 h-7'/></small>
            </a>
            <a href="#about" className='text-white hover:underline'>About</a>
            <a href="#pricing" className='text-white hover:underline'>Pricing</a>
        </div>
        <div className=' relative top-6'>
            <div className='flex gap-4'>
                <button className='text-white bg-gray-950 px-6 py-2 rounded  focus-visible:disabled'>Login</button>
                <button className='text-white bg-blue-500 px-4 py-2 rounded'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}
