import Image from 'next/image'
import React from 'react'
import AboutImg from '../../../public/assets/Template-Pic/aboutImg.png'

export const About = () => {
  return (
    <div className='  gap-20'  id='about'>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-5xl font-semibold'>Create and Customize</p>
            <p className='text-5xl font-semibold'>your portfolio in minutes</p>
            <p>you can make a beautiful portfolio website with our platform</p>
        </div>  
        <div className='flex gap-20 justify-center items-center py-20 '>
            <div className='flex  flex-col gap-7'>
                <div className='bg-skin-fill py-4 rounded-md flex flex-col justify-center items-center  w-[450px]'>
                    <p className='text-2xl font-bold py-3 '>Building Personal Portfolios </p>
                    <div>
                        <p className=' text-gray-400 text-[14px] w-[400px]'>you can choose and customize templates and can build your portfolio easily. and if you want to build it from ground up you can make that too </p>
                    </div>
                </div>
                
                <div className='bg-skin-fill py-4 rounded-md flex flex-col justify-center items-center  w-[450px]'>
                    <p className='text-2xl font-bold '>Portfolios For Your Business</p>
                    <div>
                        <p className=' text-gray-400 text-[14px] w-[400px]'>you can also customize and build business portfolios to make your business more attention grabbing and bring more customers. there are amazing templates to guide you through the process </p>
                    </div>
                </div>

                <div className='bg-skin-fill py-4 rounded-md flex flex-col justify-center items-center  w-[450px]'>
                    <p className='text-2xl font-bold '>Your E-commerce website  </p>
                    <div>
                        <p className=' text-gray-400 text-[14px] w-[400px]'>You can also build your own personal e-commerce website with fully customization and full support from us. you can make from large scale  e commerce website to small scale e commerce website.</p>
                    </div>
                </div>

                <div className=' flex   gap-20  w-[450px]'>
                    <button className='text-white bg-blue-500 px-10 py-3 rounded'>Get started</button>
                    <button className='text-white bg-gray-950 px-10 py-3 rounded  focus-visible:disabled'>View templates</button>
                </div>
            </div>

            <div className='bg-skin-fill w-[694px] h-[590px] relative '>
            <Image
            src={AboutImg}
            alt="Picture of the author"
            className='absolute top-10 left-24 w-[600px]'
            />
            </div>
        </div>
    </div>
  )
}
