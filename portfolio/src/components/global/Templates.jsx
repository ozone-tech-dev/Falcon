import React from 'react'

export const Templates = () => {
  return (
    <div className='py-28'>
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
                    <p>5M +</p>
                    <p>users</p>
                </div>
                <div>
                    <p>10K+</p>
                    <p>Templates</p>
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}
