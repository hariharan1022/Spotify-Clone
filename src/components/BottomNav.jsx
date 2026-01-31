import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const BottomNav = () => {
    const nav = useNavigate()
    return (
        <div className='bg-[#000000] w-full h-[65px] lg:hidden flex justify-around items-center px-2 py-1 border-t border-white/5 z-30'>
            <div onClick={() => nav('/')} className='flex flex-col items-center justify-center gap-1 cursor-pointer flex-1 group'>
                <img src={assets.home_icon} className='w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity' alt="Home" />
                <p className='text-[10px] text-[#a7a7a7] group-hover:text-white transition-colors font-medium'>Home</p>
            </div>
            <div onClick={() => nav('/')} className='flex flex-col items-center justify-center gap-1 cursor-pointer flex-1 group'>
                <img src={assets.search_icon} className='w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity' alt="Search" />
                <p className='text-[10px] text-[#a7a7a7] group-hover:text-white transition-colors font-medium'>Search</p>
            </div>
            <div onClick={() => nav('/')} className='flex flex-col items-center justify-center gap-1 cursor-pointer flex-1 group'>
                <img src={assets.stack_icon} className='w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity' alt="Library" />
                <p className='text-[10px] text-[#a7a7a7] group-hover:text-white transition-colors font-medium'>Library</p>
            </div>
            <div onClick={() => nav('/')} className='flex flex-col items-center justify-center gap-1 cursor-pointer flex-1 group'>
                <img src={assets.spotify_logo} className='w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity grayscale contrast-200' alt="Premium" />
                <p className='text-[10px] text-[#a7a7a7] group-hover:text-white transition-colors font-medium'>Premium</p>
            </div>
        </div>
    )
}

export default BottomNav
