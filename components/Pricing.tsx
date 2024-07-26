import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";
import { LuPackage } from "react-icons/lu";

export default function Pricing(){
    const prices = [
        {
          icon: <HiMiniSquare3Stack3D size={30}/>,
          pricetype:"Basic",
          othersprice:"3000",
          ours:"100 ",
          duration:"/month",
          currency:"Birr",
          whatwegive:"What's included",
         offers:[
          "Custom Domain", "SubDomain", "Ecommerce","Hotel Booking"
         ],
         showmore:"Show More",
         trial:"Trial",
         purchase:"Purchase"
        },
        {
          icon: <FaCheck size={30}/>,
          pricetype:"Growth",
          othersprice:"3000",
          ours:"300",
          duration:"/month",
          currency:"Birr",
          whatwegive:"What's included",
         offers:[
          "Custom Domain", "SubDomain", "Ecommerce","Hotel Booking"
         ],
         showmore:"Show More",
         trial:"Trial",
         purchase:"Purchase"
        },
        {
          icon: <LuPackage size={30}/>,
          pricetype:"Maturity",
          othersprice:"3000",
          ours:"300 ",
          duration:"/month",
          currency:"Birr",
          whatwegive:"What's included",
         offers:[
          "Custom Domain", "SubDomain", "Ecommerce","Hotel Booking"
         ],
         showmore:"Show More",
         trial:"Trial",
         purchase:"Purchase"
        }
    ]
    return(
        <main className="flex flex-col items-center justify-center px-20 py-20 pricing-section">
           <div className="flex flex-col gap-y-6 items-center justify-center max-w-2xl">
              <p className="text-[#3391CF] text-[12px] font-semibold">Our Great Achievement Proved Us!</p>
              <h1 className="text-[#E4E4E4] text-[42px] text-center">
                We Completed 500+ Projects With Clients Satisfaction
              </h1>
              <p className="text-[#D6D6D6] text-[16px] text-center  max-w- max-w-xl">It is a long established fact that a reader will be choose by the readable content of a page when looking at.</p>
              <div  className="flex items-center gap-x-20 rounded-md border border-[#171717] p-4">
                <button className="bg-[#146EF5] text-white rounded-md px-[35px] py-[12px]">Monthly</button>
               <p className="text-[16px] leading-[24px] text-[#FFFFFF]">Yearly</p>
               <p className="text-[16px] leading-[24px] text-[#FFFFFF]">Lifetime</p>
              </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-32">
              {
                prices.map(({icon,pricetype,othersprice,ours,duration,whatwegive,offers,showmore,trial,purchase,currency}) =>(
                  <div key={pricetype}
                  className="flex flex-col items-center gap-y-4 border border-[#232323] px-10  text-white max-w-xl  bg-[#0b1931b3] rounded-md relative "
                  >
                    <div className="flex flex-col gap-y-2 absolute setup-right-radial-gradient bg-[#1a1a1a] py-4 px-10 rounded-md bottom-[22rem] border border-[#232323]">
                      <div className="flex gap-x-4 items-center">
                        <p className="bg-gray-800 p-2 rounded-full text-">{icon}</p>
                        <p>{pricetype}</p>
                      </div>
                       <p className="line-through  text-sm text-[#8E8E8E]">{othersprice}</p>
                       <div className="flex gap-x-2 items-center">
                        <p className="text-[#E0E0E0] text-[42px] font-semibold leading-[50.83px]">{ours}</p>
                        <p className="text-[#FFFFFF] text-[24px] font-semibold">{currency}</p>
                        <p className="text-sm text-[#8E8E8E]">{duration}</p>
                       </div>
                    </div>
                     <div className="pt-24">
                        <p className="text-[#D6D6D6] text-[20px] font-semibold leading-[33.84px]">{whatwegive}</p>
                        <div className="flex flex-col gap-y-4 text-[14px] text-[#D6D6D6] py-4">
                        {
                          offers.map((service) =>(
                            <div key={service}>
                              <p className="flex gap-x-4"><FaCheck className="text-[#146EF5]"/>   {service}</p>
                            </div>
                          ))
                        }
                        </div>
                        <p className="text-[#D6D6D6] text-[14px] py-4">{showmore}</p>
                        <div className="flex gap-x-4 py-6">
                          <button className="border border-[#146EF5] py-[10px] px-[20px] rounded-md text-white">{trial}</button>
                          <button className="px-[24px] py-[10px] rounded-md bg-[#146EF5] text-white shadow-md shadow-[#146EF5]">{purchase}</button>
                        </div>
                     </div>
                  </div>
                ))
              }
           </div>
        </main>
    )           
}