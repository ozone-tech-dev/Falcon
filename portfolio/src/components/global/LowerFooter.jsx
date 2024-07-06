import React from 'react'

export const LowerFooter = () => {
  return (
    <div className="bg-footer-bg bg-cover bg-center py-40 mb-40  object-contain ">
      <div className="flex flex-col justify-center items-center">
        {/* Remove the Image component since the background image is set through CSS */}
      </div>

      <div className="flex flex-col justify-center items-center pb-10">
        <div className="py-10 flex flex-col justify-center items-center">
          <div className="text-4xl font-bold">What are you waiting for get</div>
          <div className="text-4xl font-bold">started now and make your</div>
          <div className="text-4xl font-bold">business more attractive</div>
        </div>

        <button className="text-white bg-blue-500 px-20 py-2 rounded shadow-blue-600 shadow-2xl">Get Started</button>
      </div>
    </div>
  )
}
