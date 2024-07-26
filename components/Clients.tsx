
import Image from "next/image"
import client1 from "../assets/Clients-img/client1.png"
import client2 from "../assets/Clients-img/client2.png"
import client3 from "../assets/Clients-img/client3.png"
import client4 from "../assets/Clients-img/client4.png"

import rect from "../assets/pagination/rect1.png"

export default function ClientSection(){
    return (
        <main className="flex flex-col text-white items-center gap-y-10 py-20  custom-radial-gradient ">
            <div className="">
            <div className="flex flex-col items-center justify-center gap-y-6 ">
                <p className="text-[#3391CF] text-[16px] font-semibold ">Our Great Achievement Proved Us!</p>
                <h1 className="text-3xl font-600 text-[42px] leading-[51px] text-[#E4E4E4] text-center">We Completed 500+ Projects With <br /> Clients Satisfaction</h1>
            </div>
            <div className="flex gap-x-8 items-center py-8 ">
                <Image src={client1} alt="clientimg"
                width="208" height="70"
                />
                <Image src={client2} alt="clientimg"/>
                <Image src={client3} alt="clientimg"/>
                <Image src={client4} alt="clientimg"/>
            </div>
            <div className="flex gap-x-2 items-center ">
                <Image src={rect} alt="rectangle"/>
                <Image src={rect} alt="rectangle" className="text-sky-600"/>
                <Image src={rect} alt="rectangle"/>
                <Image src={rect} alt="rectangle"/>
            </div>
            </div>
        </main>
    )
}