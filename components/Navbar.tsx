import Logo from "../components/Logo"
import { CiGlobe } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar(){
    return(
        <main className="flex items-center justify-between px-40 py-[15px]  text-[#D6D6D6] bg-[rgb(8,8,8)] font-semibold text-[16px] ">
            <div>
                <Logo />
            </div>
            <ul className="flex gap-x-6 items-center">
                <span><a>Home</a></span>
                <span><a className="flex gap-x-1 items-center">Templates <RiArrowDropDownLine size={30} className="text-[#474747]"/></a></span>
                <span><a className="flex gap-x-1 items-center">Listings <RiArrowDropDownLine size={30} className="text-[#474747]"/></a></span>
                <span><a>Pages</a></span>
                <span><a>Pricings</a></span>
                <span><a>Blogs</a></span>
            </ul>
            <div className="flex gap-x-2">
                <p className="flex gap-x-1 items-center"><CiGlobe size={30}/> English</p>
                <button className="bg-[#146EF5] border-none text-sm px-4 rounded-sm">Login</button>
            </div>
        </main>
    )
}