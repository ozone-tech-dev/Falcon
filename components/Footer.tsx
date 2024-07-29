import Logo from "@/components/Logo"

export default function Footer (){
    return(
        <main className=" flex flex-col px-44 items-center gap-y-2">
            <div className="flex gap-x-40  border-b py-10 justify-center">
                <div>
                    <Logo />
                </div>
                <div className="flex flex-col gap-y-4">
                    <p className="text-[25px] font-semibold  text-[#FFFFFF]">Social</p>
                    <div className=" text-[#CCCCCC] text-[16px] flex flex-col gap-y-4 text-sm">
                    <a>Twitter</a>
                    <a>Facebook</a>
                    <a>Telegram</a>
                    <a>Instagram</a>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <p className="text-[25px] font-semibold text-[#FFFFFF]">Adress</p>
                    <div className="text-[#CCCCCC] text-[16px] flex flex-col gap-y-4 text-sm">
                    <a>falcon@gmail.com</a>
                    <a>+2519342234234</a>
                    <a>Adama,Posta</a>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <p className="text-[25px] font-semibold text-[#FFFFFF]">Quick links</p>
                    <div className=" text-[#CCCCCC] text-[16px] flex flex-col gap-y-4 text-sm">
                    <a>Twitter</a>
                    <a>Facebook</a>
                    <a>Telegram</a>
                    <a>Instagram</a>
                    </div>
                </div>
            </div>

            <div className="w-full flex items-center justify-between  text-[16px] text-[#CCCCCC] text-sm">
                <a>@falconwebsite</a>
                <p>@copyright 2024</p>
            </div>
            

        </main>
    )
}