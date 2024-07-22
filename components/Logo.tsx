import Image from "next/image"
import logo from "../assets/logo-img/logo.png"

export default function Logo(){
    return (
        <div>
            <Image src={logo} alt="logo"
            width="134"
            height="62"
            />
        </div>
    )
}