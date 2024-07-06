import React from 'react'
import Image from 'next/image'
import Head from '../../../public/assets/Template-Pic/head.png'
import center from '../../../public/assets/Template-Pic/center.jpg'
import side from '../../../public/assets/Template-Pic/right.png'

export const Templates = () => {
  return (
    <div className='py-28' id='template'>
        <div>
            <div className='flex flex-col  justify-center items-center '>
                <p className='text-5xl font-bold'>Build Your <small className='text-5xl font-bold text-blue-600'>portfolio </small> </p> 
                 <p className='text-5xl font-bold'>faster and better</p>
            </div>
            <div className='flex flex-col  justify-center items-center py-8 text-gray-400'>
                <p>we provide you a powerful Canva in which you will create your </p>
                <p>portfolio however and whenever you like with high customizability</p>
            </div>
            <div className='flex gap-16  justify-center items-center py-4 '>
                <div><button className='text-white bg-blue-500 px-4 py-2 rounded'>Get started</button></div>
                <div>
                    <p className='font-bold'>5M +</p>
                    <p className='text-gray-400'>users</p>
                </div>
                <div>
                    <p  className='font-bold'>10K+</p>
                    <p className='text-gray-400'>Templates</p>
                </div>
            </div>
        </div>

        <div className='flex  flex-col  justify-center items-center py-32 ' id='grad1'> 
           <div>
           <Image
            src={Head}
            alt="Picture of the author"
            // className='w-24 h-20'
            className='object-contain	 w-[1000px] '
            />
           </div>
           <div className='flex '>
                <div>
                    <Image
                    src={center}
                    alt="Picture of the author"
                    className='w-[800px] h-[500px] object-fill'
                    />
                </div>
                <div>
                    <Image
                    src={side}
                    alt="Picture of the author"
                    className='w-[200px] h-[500px] object-fill	'
                    />
                </div>
           </div>
        </div>
    </div>
  )
}
