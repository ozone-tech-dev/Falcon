import React from 'react'
import Image from 'next/image'
import Logo from '../../assets/logo/ozon.png'


export const Footer = () => {
  return (
    <div>
        <div>
        <div>
            <div>
            <a href="/">
            <Image
            src={Logo}
            alt="Picture of the author"
            className='w-24 h-20'
            />
            </a>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div></div>
    </div>
    </div>
  )
}
