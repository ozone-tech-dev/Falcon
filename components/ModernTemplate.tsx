import temp1 from "../assets/Modern-template-img/temp-1.png"
import temp2 from "../assets/Modern-template-img/temp-2.png"
import temp3 from "../assets/Modern-template-img/temp-3.png"
import temp4 from "../assets/Modern-template-img/temp-4.png"
import temp5 from "../assets/Modern-template-img/temp-5.png"
import temp6 from "../assets/Modern-template-img/temp-6.png"

import Image from "next/image"

export default function ModernTemplate(){
  const templates = [temp1,temp2,temp3,temp4,temp5,temp6];
    return(
        <main className="flex flex-col items-center justify-center gap-y-20 px-20 template-left-radial-gradient font-poppins py-20">
            <div className="flex flex-col gap-y-6 items-center">
                <p className="text-[#3391CF] font-semibold text-[12px]">Creative and User Friendly design</p>
                <p className="text-[42px] font-semibold leading-[51px] text-[#E4E4E4]">See Our Modern Template</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    templates.map((temp) =>(
                        <div key={temp.src}>
                          <Image src={temp} alt="template"
                          width="394"
                          height="562"
                          className="opacity-0.7"
                          />
                        </div>
                    ))
                }
            </div>

            <div className="flex itemms-center justify-center">
                <button className="bg-[#146EF5] rounded-md text-white px-[34px] py-[14px]">
                    More Templates
                </button>
            </div>
        </main>
    )
}