import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const LandingPage = () => {
    useGSAP(
        () => {
            // gsap code here...
            gsap.from('h1', { x: -60,
                                   opacity: 0,
                                   delay: 1.5,
                                   duration:1,
                                   stagger:0.5 
    
             }); // <-- automatically reverted
        });
    


  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-40 px-20">
            <div className="masker">
                <h1 className='text-8xl font-bold leading-[5.5vw] tracking-tighter uppercase'>We Create</h1>
            </div>
            <div className="masker">
                <h1 className='text-8xl font-bold leading-[5.5vw] tracking-tighter uppercase'>eye opening</h1>
            </div>
            <div className="masker">
                <h1 className='text-8xl font-bold leading-[5.5vw] tracking-tighter uppercase'>presentations</h1>
            </div>
        </div>
        <div className="border-t-2 border border-zinc-700 mt-32 flex justify-between items-center py-5 px-20 text-lg ">
            {["For public and private companies", "From the first pitch to IPO"].map((item,index) => (
                <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className="start flex items-center gap-5">
                <div className='px-4 py-2 border-2 border-zinc-700 font-medium font-bold text-sm rounded-full uppercase'>Start the project</div>
                <div className='h-10 w-10 flex items-center justify-center  border-2 border-zinc-700 rounded-full'>
                   <span className='rotate-[45deg]'>

                    <FaArrowUpLong />
                   </span>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage