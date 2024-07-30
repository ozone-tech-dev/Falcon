import world from "../assets/Howtosetup/world.png"
import Image from "next/image"

export default function Setup(){
    const setups = [
        {
            icon: world,
            title:"Purchase Template",
            description:"We provide graphics and visual identity design services."

        },
        {
            icon: world,
            title:"Add Services",
            description:"We provide graphics and visual identity design services."

        },
        {
            icon: world,
            title:"Setup Website",
            description:"We provide graphics and visual identity design services."

        },
        {
            icon: world,
            title:"Launch Website",
            description:"We provide graphics and visual identity design services."

        },
    ]
    return(

        <main className="flex flex-col gap-y-6 px-20 py-32 bg-featured-gradient font-poppins">
             <div>
                <p className="text-[42px] font-600 leading-[51px] text-[#E4E4E4] font-semibold">How To Setup Website</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 ">
                {
                    setups.map(({icon,title,description}) =>(
                        <div key={title} 
                        className="flex flex-col gap-y-2 border border-[#444444] p-4 text-[#E4E4E4]">
                            <Image src={icon} alt="world"
                            width="37"
                            height="22"
                            />
                            <p className="text-[#E4E4E4] text-[24px] font-semibold flex-nowrap leading-[30px]">{title}</p>
                            <p className="text-[16px] font-500 leading-[24px]">{description}</p>
                        </div>
                    ))
                }
             </div>
        </main>
    )
}