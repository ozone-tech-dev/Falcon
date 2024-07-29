import mask1 from "../assets/Digital-business-img/Mask group-1.png"
import mask2 from "../assets/Digital-business-img/Mask group-2.png"
import mask3 from "../assets/Digital-business-img/Mask group.png"
import Image from "next/image"


export default function DigitalBUsiness(){
    return (
        < main className="flex gap-x-4 px-20 py-40 font-poppins  Digital-radial-gradient">
            <div className="flex flex-col gap-y-8 ">
                <h1 className="text-[#E4E4E4] text-[42px] font-semibold leading-[51px] max-w-2xl">
                    Digital Business Id Card For Your Excellent Business
                </h1>
                <p className="text-[#D6D6D6] text-[16px] font-400 leading-[23.87px]">
                    It is a long established fact that a reader will be<br/> choose by the readable content of a page when<br /> looking at.
                </p>
                <div>
                <button className="px-[34px] py-[14px] bg-[#146EF5] text-white rounded-md">
                    More templates
                </button>
                </div>
            </div>
            <div className="flex relative gap-20 ">
              <div className="">
              <Image src={mask1} alt="mask1" width="183" height="271.63"
               className=""
               />
              </div>
               <div className=" z-10">
               <Image src={mask2} alt="mask2" width="228.91" height="340"
               className="  z-10 absolute left-32 bottom-1"
               />
               </div>
               <div>
                  <Image src={mask3} alt="mask3" width="181.58" height="270"
                  className=""/>
               </div>
            </div>
        </main>
    )
}