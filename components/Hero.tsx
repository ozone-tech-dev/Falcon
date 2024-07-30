import Image from "next/image"
import image1 from "../assets/Hero-img/image-1.png"
import image2 from "../assets/Hero-img/image-2.png"
import image3 from "../assets/Hero-img/image-3.png"
import image4 from "../assets/Hero-img/image-4.png"
import image5 from "../assets/Hero-img/image-5.png"
import Navbar from "../components/Navbar"

export default function Hero (){
    return (
        <main className="flex flex-col px-20 gap-6 min-h-screen items-center  justify-center py-10 bg-custom-gradient font-poppins ">
       
           <div className="flex gap-x-16 items-center justify-center py-10 ">
              <div>
                <Image src={image1} alt="image1"
                width="256"
                height="194"
                />
              </div>
              <div className="flex flex-col gap-6 items-center justify-center  text-center ">
                <p className="text-[rgb(51,145,207)]">No #01 Digital Services Website</p>
                <div className="">
                    <p className="text-center  font-bold text-[62px] text-white leading-[70px]">Build your <span className="text-[#146EF5]">portfolio</span> faster and with quality</p>
                </div>
                <p className="text-wrap text-[#cfb7b7] text-center">we provide you a powerful Canva in which you will create your<br /> portfolio however and whenever you like with high customability</p>
                <div className="flex gap-x-2 items-center">
                    <button className="bg-[#146EF5] text-white rounded-md px-[34px] py-[14px]">Build your website</button>
                    <button className="border border-[#146EF5] px-[34px] py-[14px] text-white rounded-md">View Demo</button>
                </div>
              </div>
              <div>
                <Image src={image2} alt="image2" 
                width=""
                height=""
                />
              </div>
           </div>
           <div className="flex gap-x-8 items-center ">
                <div className="bg-[#146EF5] backdrop-blur-md">
                    <Image src={image3} alt="image3"
                    width="245"
                    height="292"
                    className=""
                    />
                </div>
                <div>
                <Image src={image4} alt="image4"
                width="680"
                height="419"
                className=""
                />
                </div>
                <div>
                <Image src={image5} alt="image5"
                  width="256"
                  height="304"
                  className=""
                />
                </div>
           </div>
        </main>
    )
}