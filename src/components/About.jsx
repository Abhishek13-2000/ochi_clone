import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-lime-400 rounded-tl-3xl rounded-tr-3xl text-black '>
        <h1 className='text-6xl leading-[3vw] tracking-tight'>
            Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className='w-full border-t-[2px] mt-20 border-green-700 pt-10 flex gap-5'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our Approach</h1>
                <button className='bg-zinc-900 py-3 px-3 rounded-full text-white font-semibold mt-10 flex gap-3 items-center justify-center'>READ MORE
                <div className='w-2 h-2 rounded-full bg-white'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-lime-300'></div>
        </div>
    </div>
  )
}

export default About