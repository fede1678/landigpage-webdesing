import React from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col gap-8">
        <h1 className="text-[40px] text-center font-black">
            Let’s hear What they says
        </h1>
        <div className="flex justify-center gap-4">
            <span className="text-5xl text-primary"><RiDoubleQuotesL/></span>
            <p className="max-w-2xl text-center text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Risus vel lobortis tincidunt fames quisque mauris at diam.
                Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </p>
            <span className="text-5xl text-primary"><RiDoubleQuotesR/></span>
        </div>
        <div className="flex flex-col items-center jusstify-center gap-8">
            <div className="flex items-center justify-center gap-8 md:gap-12">
                <img src="foto1.avif" className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full" />
                <img src="foto2.avif" className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full" />
                <img src="foto6.avif" className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white" />
                <img src="foto3.avif" className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full" />
                <img src="foto4.avif" className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full" />
            </div>
            <div> 
                <h3 className="text-center text-[24px] font-bold">Ricky Aprilia</h3>
                <h5 className="text-center text-[20px] text-gray-500">Founder of Varibo</h5>
            </div>
        </div>
    </div>
  )
}

export default Reviews

