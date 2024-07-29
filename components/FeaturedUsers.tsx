import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import Image from "next/image"
import maskgroup from "../assets/featured-users-img/Mask group.png"


export default function FeaturedUsers(){
    const users = [
        {
            id:1,
            img: maskgroup,
            user:"Jhon Doe",
            icon: <HiMiniSquare3Stack3D />,
            website:"Website",
            follow:"Follow"
        },
        {
            id:2,
            img: maskgroup,
            user:"Jhon Doe",
            icon: <HiMiniSquare3Stack3D />,
            website:"Website",
            follow:"Follow"
        },

        {
            id:3,
            img: maskgroup,
            user:"Jhon Doe",
            icon: <HiMiniSquare3Stack3D />,
            website:"Website",
            follow:"Follow"
        },
        {
            id:4,
            img: maskgroup,
            user:"Jhon Doe",
            icon: <HiMiniSquare3Stack3D />,
            website:"Website",
            follow:"Follow"
        }
    ]
    return(
        <main className="px-20  py-14 flex flex-col gap-y-24">
           <div className="flex items-center justify-between">
             <p className="text-[#E4E4E4] text-[42px] font-semibold">Take a look at the Featured Users</p>
             <div className="flex gap-x-2">
                <p className="bg-[#146EF5] p-3 rounded-full text-white"><IoMdArrowDropleft size={30}/></p>
                <p className="bg-[#146EF5] p-3 rounded-full text-white"><IoMdArrowDropright size={30}/></p>
             </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4">
            {
                users.map(({id,img, user,icon,website,follow}) =>(
                    <div key={id}
                    className=" relative border border-[#232323] p-5 flex flex-col items-center gap-y-6  "
                    >
                        <Image src={img} alt="users"
                        className="absolute bottom-52"
                        />
                        <p className="text-[24px] font-semibold text-[#E4E4E4] pt-14">{user}</p>
                        <div className="flex items-center gap-x-2">
                            <p className="p-2 bg-gray-800 rounded-full text-[#146EF5]">{icon}</p>
                            <p className="p-2 bg-gray-800 rounded-full text-[#146EF5]">{icon}</p>
                            <p className="p-2 bg-gray-800 rounded-full text-[#146EF5]">{icon}</p>
                            <p className="p-2 bg-gray-800 rounded-full text-[#146EF5]">{icon}</p>
                        </div>

                        <div className="flex gap-x-4">
                            <button className="border border-[#146EF5] px-[20px] py-[10px] text-white rounded-md">{website}</button>
                            <button className="bg-[#146EF5] px-[20px] py-[10px] rounded-md">{follow}</button>
                        </div>
                    </div>
                ))
            }
           </div>
        </main>
    )
}