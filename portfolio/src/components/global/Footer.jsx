import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/assets/logo/ozon.png'


export const Footer = () => {
  return (
    <div className='bg-skin-fill py-20 flex justify-center'>
        <div className=' flex  flex-col  justify-center'>
        <div className='flex gap-60'>
            <div>
            <a href="/">
            <Image
            src={Logo}
            alt="Picture of the author"
            className='w-24 h-20'
            />
            </a>
            </div>
            <div className='flex flex-col gap-2'>
                <p className=''>Social</p>
                <a href="" className=' text-gray-400 text-[14px] '>Twitter</a>
                <a href="" className=' text-gray-400 text-[14px] '>Facebook</a>
                <a href="" className=' text-gray-400 text-[14px]'>Tellegram</a>
                <a href=""className=' text-gray-400 text-[14px]'>Instagram</a>
            </div>
            <div className='flex flex-col gap-2'>
                <p>Address</p>
                <a href="" className=' text-gray-400 text-[14px]'>falcon@gmail.com</a>
                <a href="" className=' text-gray-400 text-[14px]'>+251 9342234234</a>
                <a href="" className=' text-gray-400 text-[14px]'>Adama, Posta</a>
            </div>
            <div className='flex flex-col gap-2'>
                <p>Quick links</p>
                <a href="" className=' text-gray-400 text-[14px]'>Twitter</a>
                <a href="" className=' text-gray-400 text-[14px]'>Facebook</a>
                <a href="" className=' text-gray-400 text-[14px]'>Tellegram</a>
                <a href="" className=' text-gray-400 text-[14px]'>Instagram</a>
            </div>
        </div>

        <hr class="h-px my-10 bg-gray-200 border-0 dark:bg-gray-500 py-[0.7px]"/>

        <div className='flex justify-between'> 
          <a href="" className=' text-gray-400 text-[14px]'>@falconwebsite</a>
          <a href="" className=' text-gray-400 text-[14px]'>@copyright 2024</a>
        </div>
    </div>
    </div>
  )
}
