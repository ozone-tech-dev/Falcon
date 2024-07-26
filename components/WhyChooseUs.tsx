import world from "../assets/Howtosetup/world.png"
import Image from "next/image"

export default function WhyChooseUs(){
    const templates = [
        {
            id:1,
            icon: world,
            title: "Purchase Template",
            description: "We provide graphics and visual identity design"
        },
        {
            id:2,
            icon: world,
            title: "Purchase Template",
            description: "We provide graphics and visual identity design"
        },
        {
            id:3,
            icon: world,
            title: "Purchase Template",
            description: "We provide graphics and visual identity design"
        },
        {
            id:4,
            icon: world,
            title: "Purchase Template",
            description: "We provide graphics and visual identity design"
        },
        {
            id:5,
            icon: world,
            title: "Purchase Template",
            description: "We provide graphics and visual identity design"
        },
        {
            id:6,
            icon: world,
            title: "Purchase Template",
            description: "We provide graphics and visual identity design"
        },
    ]
    return (
        <main className="flex gap-x-10 items-center py-20 px-20 font-poppins whychooseus-radial-gradient">
            <div className="flex flex-col gap-y-8 ">
                <div className="flex flex-col gap-y-4">
                    <p className="text-[#3391CF] font-semibold text-[16px]">Why You Choose Our Template</p>
                    <h1 className="text-[#E4E4E4] font-semibold text-[42px] leading-[51px]">Bring More Profits With <br /> More Valuable Features</h1>
                </div>
                <div>
                    <p className="text-[#E4E4E4] text-[16px]  leading-[24px]">It is a long established fact that a reader will be choose by the readable content of a page when looking at.</p></div>
                <div className="flex flex-col gap-y-6 ">
                    <p className="text-[#E4E4E4] text-[16px] leading-[24px]">We completed 500+ clients projects</p>
                    <p className="text-[#E4E4E4] text-[16px] leading-[24px] ">We have 10+ multiple developer</p>
                    <p className="text-[#E4E4E4] text-[16px] leading-[24px]">100+ active clients working with us</p>
                    <p className="text-[#E4E4E4] text-[16px] leading-[24px] ">Your trusted business partner</p>
                </div>
                <div>
                    <button className="px-[34px] py-[14px] bg-[#146EF5] rounded-md text-[#E4E4E4]">
                        Purchase Now
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    templates.map(({id,icon, title, description}) =>(
                        <div key={id}
                        className="flex flex-col gap-y-2 px-4 py-8 border border-[#444444] rounded-md transition-all hover:border-[#3391CF] hover:scale-105"
                        >
                            <Image src={icon} alt="world"/>
                            <p className="font-semibold text-[24px] text-[#E4E4E4]">{title}</p>
                            <p className="text-[#E4E4E4] text-[16px]">{description}</p>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}