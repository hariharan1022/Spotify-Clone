import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const nav = useNavigate()
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold sticky top-0 z-10 bg-gradient-to-b from-[#1db954]/20 to-transparent backdrop-blur-sm p-4'>
        <div className='flex items-center gap-4'>
            <img onClick={()=>nav(-1)} className='w-9 bg-black/50 p-2 rounded-full cursor-pointer hover:bg-[#1db954]/30 transition' src={assets.arrow_left} alt="" />
            <img onClick={()=>nav(1)} className='w-9 bg-black/50 p-2 rounded-full cursor-pointer hover:bg-[#1db954]/30 transition' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[14px] px-6 py-2 rounded-full hidden md:block cursor-pointer hover:bg-[#1db954] transition font-bold'>Explore Premium</p>
            <p className='bg-black/50 py-2 px-4 rounded-full text-[14px] cursor-pointer hover:bg-[#1db954]/30 transition border border-white/10'>Install App</p>
            <div className='bg-gradient-to-br from-[#1db954] to-[#1ed760] text-black w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition font-bold'>H</div>
        </div>
    </div>
    <div className='flex items-center gap-3 mt-4 px-4'>
        <p className='bg-white text-black px-5 py-2 rounded-full cursor-pointer hover:bg-[#1db954] transition font-bold text-sm'>All</p>
        <p className='bg-[#282828] px-5 py-2 rounded-full cursor-pointer hover:bg-[#3E3E3E] transition text-sm'>Music</p>
        <p className='bg-[#282828] px-5 py-2 rounded-full cursor-pointer hover:bg-[#3E3E3E] transition text-sm'>Podcasts</p>
    </div>
    </>
  )
}

export default Navbar