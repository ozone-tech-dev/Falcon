"use client"
import Image from "next/image"
import Rating from "@/components/Rating"
import avatar from "../assets/Testimonial-img/avatar.png"



export default function Testimony(){
    const testimonials = [
        {
            id:1,
            rating : <Rating value={5}/>,
            testimony:"It is a long established fact that a reader will be choose by the readable content of a page when looking at. It is a long established fact that a reader will be choose by",
            name:"Jhon Doe",
            profession:"CEO, Founder of chaco",
            img:avatar
        },
        {
            id:2,
            rating : <Rating value={5}/>,
            testimony:"It is a long established fact that a reader will be choose by the readable content of a page when looking at. It is a long established fact that a reader will be choose by",
            name:"Jhon Doe",
            profession:"CEO, Founder of chaco",
            img:avatar
        },
        {
            id:3,
            rating : <Rating value={5}/>,
            testimony:"It is a long established fact that a reader will be choose by the readable content of a page when looking at. It is a long established fact that a reader will be choose by",
            name:"Jhon Doe",
            profession:"CEO, Founder of chaco",
            img: avatar
        },
        {
            id:4,
            rating : <Rating value={5}/>,
            testimony:"It is a long established fact that a reader will be choose by the readable content of a page when looking at. It is a long established fact that a reader will be choose by",
            name:"Jhon Doe",
            profession:"CEO, Founder of chaco",
            img: avatar
        },
        {
            id:5,
            rating : <Rating value={5}/>,
            testimony:"It is a long established fact that a reader will be choose by the readable content of a page when looking at. It is a long established fact that a reader will be choose by",
            name:"Jhon Doe",
            profession:"CEO, Founder of chaco",
            img:avatar
        },
        {
            id:6,
            rating : <Rating value={5}/>,
            testimony:"It is a long established fact that a reader will be choose by the readable content of a page when looking at. It is a long established fact that a reader will be choose by",
            name:"Jhon Doe",
            profession:"CEO, Founder of chaco",
            img: avatar
        }
    ]

    return(
        <main className="px-20 flex flex-col items-center gap-y-10 justify-center  py-16">
          <div className="flex flex-col gap-y-4">
            <p className="text-sm text-center text-[#3391CF] text-[12px]">Our satisfied clients write us this testimonies</p>
            <h1 className="text-[42px] text-center  text-[#E4E4E4] font-semibold ">Our Clients Testimonial</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                testimonials.map(({id,rating,testimony,name, profession,img}) =>(
                    <div key={id} 
                    className="flex flex-col gap-4 p-6 border border-[#232323] rounded-md "
                    >
                        <div className="flex flex-col gap-y-4   border-b border-[#232323] text-sm pb-5 text-[#D6D6D6]">
                            <p>{rating}</p>
                            <p className="text-[#D6D6D6] text-[16px]">{testimony}</p>
                        </div>
                        <div className="flex text-[#D6D6D6] gap-x-10">
                            <div>
                                <p>{name}</p>
                                <p>{profession}</p>
                            </div>
                            <div>
                                <Image src={img} alt="user" className="rounded-full"/>
                            </div>
                        </div>
                    </div>
                ))
            }
          </div>
        </main>
    )
}