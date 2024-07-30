import Image from "next/image"
import blog1 from "../assets/blog-img/Mask group-2.png"
import blog2 from "../assets/blog-img/Mask group-1.png"
import blog3 from "../assets/blog-img/Mask group.png"



export default function Blog(){
    const blogs = [
        {
            id:1,
            img: blog3,
            title:"Consectetur, adipisci veilt, sed quia non numquam eius",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have stuff..",
            readmore:"Read More"
        },
        {
            id:2,
            img: blog2,
            title:"Consectetur, adipisci veilt, sed quia non numquam eius",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have stuff..",
            readmore:"Read More"
        },
        {
            id:3,
            img: blog1,
            title:"Consectetur, adipisci veilt, sed quia non numquam eius",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have stuff..",
            readmore:"Read More"
        },
    ]
    return(
        <main className="flex flex-col gap-y-8 px-20  py-20 font-poppins">
            <div className="flex items-center justify-between text-white">
                <p>Our Latest Blog</p>
                <button className="bg-[#146EF5] py-[14px] px-[34px] rounded-md">View More</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    blogs.map(({id,img, title, description,readmore}) =>(
                        <div key={id}
                        className="flex flex-col gap-y-4 text-white max-w-md"
                        >
                          <Image src={img} alt="blogs"
                           className="rounded-m w-[391px] h-[248px]"
                          />
                          <p className="text-[#E4E4E4] text-[20px] font-semibold">{title}</p>
                          <p className="text-[16px] text-[#D6D6D6] max-w-sm">{description}</p>
                          <p className="text-[16px] text-[#D6D6D6] font-semibold">{readmore}</p>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}