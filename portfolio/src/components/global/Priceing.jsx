import React from 'react'
import { LuCheck } from "react-icons/lu";

export const Priceing = () => {
  return (
    <div className='pt-40  pb-60' id='pricing'>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-4xl font-semibold'>Our pricing is fair and simple</p>
            <p className=' text-gray-400 text-[10px]  py-5'>Making your portfolio with this price is a peace of cake </p>
        </div>
        <div className='flex justify-center items-center gap-10 '>

            <div className='w-96 border-2 border-gray-500 relative top-36 rounded-lg px-10 pt-10  bg-skin-fill   '>
                <div className='flex flex-col justify-center '>
                    <p className='text-2xl font-bold'>Basic</p>
                    <div className='py-5'>
                        <p className='text-gray-400 text-[14px] '>For only adding links </p>
                        <p className='text-gray-400 text-[14px]  '> you can only add unlimited social media links in your portfolio</p>
                        <hr className='text-gray-400 '/>
                    </div>

                    <p className=' flex gap-10'>  
                            <small> <LuCheck  className='w-6 h-6 text-blue-700'/> </small>
                            <small className='text-gray-400 text-[14px]'>Unlimited links</small>
                        </p>
                    
                </div>
                <div className='pt-28'>
                    <p  className='flex gap-5'>
                        <p>699</p>
                        {/* <hr class="h-px  bg-gray-200 border-0 dark:bg-gray-500 py-[0.7px]"/> */}
                        <hr className='w-10 relative border-2 top-[10px] right-[55px]'/>
                        <p className='relative right-16'>100 Birr</p>
                    </p>
                </div>

                <div className='py-8'>
                    <button className='text-white bg-blue-500 px-20 py-2 rounded shadow-blue-600 shadow-2xl'>Getm Started </button>
                </div>
            </div>


            <div className='w-96  h-[580px] border-2 border-gray-500  relative top-20 px-10 rounded-lg bg-skin-fill'>
                <div className=' '>
                    <p className='text-2xl font-bold pt-10 pb-5'>Standard</p>
                    <div className='py-5'>
                        <p className='text-gray-400 text-[14px] '>For affiliate market </p>
                        <p className='text-gray-400 text-[14px]  '> you can add affiliation in your portfolio and better customization</p>
                        <hr className='text-gray-400 '/>
                    </div>

                    <p className=' flex gap-10'>  
                            <small> <LuCheck  className='w-6 h-6 text-blue-700'/> </small>
                            <small className='text-gray-400 text-[13px]'>Unlimited links</small>
                    </p>
                    <p className=' flex gap-10'>  
                            <small> <LuCheck  className='w-6 h-6 text-blue-700'/> </small>
                            <small className='text-gray-400 text-[13px]'>Unlimited links</small>
                    </p>
                    <p className=' flex gap-10'>  
                            <small> <LuCheck  className='w-6 h-6 text-blue-700'/> </small>
                            <small className='text-gray-400 text-[13px]'>Unlimited links</small>
                    </p>
                    
                </div>
                <div className='pt-40 '>
                    <p className='flex gap-5'>
                        <p>1000</p>
                        <hr className='w-10 relative border-2 top-[10px] right-[55px]'/>
                        <p className='relative right-16'>100 Birr</p>
                    </p>

                    <div className='py-16 pt-10'>
                        <button className='text-white bg-blue-500 px-20 py-2 rounded shadow-blue-600 shadow-2xl'>Getm Started </button>
                    </div>
                </div>
            </div>


            <div className='w-96  border-2  h-[650px]  border-gray-500  pt-20 relative top-10 px-10 rounded-lg bg-skin-fill'>
                <div className=''>
                    <p className='text-2xl font-bold'>Premium</p>
                    <div className='py-5'>
                        <p className='text-gray-400 text-[14px] '>For affiliate market </p>
                        <p className='text-gray-400 text-[14px]  '> you can add affiliation in your portfolio and better customization</p>
                        <hr className='text-gray-400 '/>
                    </div>

                    <p className=' flex gap-10'>  
                            <small> <LuCheck  className='w-6 h-6 text-blue-700'/> </small>
                            <small className='text-gray-400 text-[13px]'>Unlimited links</small>
                    </p>
                    <p className=' flex gap-10'>  
                            <small> <LuCheck  className='w-6 h-6 text-blue-700'/> </small>
                            <small className='text-gray-400 text-[13px]'>Unlimited links</small>
                    </p>
                    <p className=' flex gap-10'>  
                            <small> <LuCheck  className='w-6 h-6 text-blue-700'/> </small>
                            <small className='text-gray-400 text-[13px]'>Unlimited links</small>
                    </p>
                    
                </div>
                <div className='pt-52 '>
                    <p  className='flex gap-5'>
                        <p>3000</p>
                        <hr className='w-10 relative border-2 top-[10px] right-[55px]'/>
                        <p className='relative right-16'>100 Birr</p>
                    </p>

                    <div className='pb-16 pt-10'>
                        <button className='text-white bg-blue-500 px-20 py-2 rounded shadow-blue-600 shadow-2xl'>Getm Started </button>
                    </div>
                </div>

                
            </div>
            
        </div>
    </div>
  )
}
