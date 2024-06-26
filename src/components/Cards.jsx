import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-800 flex items-center gap-5 px-32 '>
      <div className='cardcontainer w-1/2 h-[50vh] '>
         <div className="card relative rounded-xl w-full h-full  bg-green-900 flex items-center justify-center">
            <img className='w-22' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute px-5 py-3 border-2 rounded-full left-10 bottom-10'>hey</button>
         </div>
      </div>
      <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
         <div className="card relative rounded-xl w-1/2 h-full  bg-zinc-500 flex items-center justify-center">
         <img className='w-22' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute px-5 py-3 border-2 rounded-full left-10 bottom-10'>&copy;2024</button>
         </div>
         <div className="card relative rounded-xl w-1/2 h-full  bg-zinc-500 flex items-center justify-center">
         <img className='w-22 h-20' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute px-5 py-3 border-2 rounded-full left-10 bottom-10'>&copy;Abhishek</button>
         </div>

      </div>
    </div>
  )
}

export default Cards