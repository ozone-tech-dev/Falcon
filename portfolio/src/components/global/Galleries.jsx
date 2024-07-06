import React from 'react'
import Image from 'next/image'
import img1 from '../../../public/assets/Galleries/img1.jpg'
import img2 from '../../../public/assets/Galleries/img2.jpg'
import img3 from '../../../public/assets/Galleries/img3.jpg'
import img4 from '../../../public/assets/Galleries/img4.jpg'
import img5 from '../../../public/assets/Galleries/img5.jpg'
import img6 from '../../../public/assets/Galleries/img6.jpg'


export const Galleries = () => {
  return (
    <div className='py-10  grad1' id='galleries'>

        <div className='flex flex-col justify-center items-center'>
            <p className='font-bold text-3xl'>Made with Falcon</p>
            <p className=' text-gray-400 text-[14px] w-[450px] py-9'>we will provide you a templates tailored by professional designers</p>
        </div>
         
        <div className='flex justify-center'>
        <div className='grid grid-cols-3 gap-10 w-3/4 '>
            <div>
                <Image
                src={img1}
                alt="template"
                className=''
                />
            </div>
            <div> <Image
                src={img2}
                alt="template"
                className='object-contain'
                /></div>
            <div><Image
                src={img3}
                alt="template"
                className=' object-cover'
                /></div>
            <div><Image
                src={img4}
                alt="template"
                className='relative bottom-10'
                /></div>
            <div><Image
                src={img5}
                alt="template"
                className='relative top-6'
                /></div>
            <div><Image
                src={img6}
                alt="template"
                className='relative top-20'
                /></div>
        </div>
        </div>
         
        <div className='py-10 flex justify-center '>
            <button className='px-20 py-4 flex justify-center items-center border-4  border-blue-600 rounded-md'>More templates</button>
        </div>
    </div>
  )
}
