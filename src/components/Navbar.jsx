import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ isScrolled }) => {
    const nav = useNavigate()
    return (
        <>
            <div className={`w-full flex justify-between items-center font-semibold sticky top-0 z-10 p-4 transition-all duration-300 ${isScrolled ? 'bg-[#121212] bg-opacity-80 backdrop-blur-md border-b border-white/10' : 'bg-[#121212]'}`}>
                <div className='flex items-center gap-4'>
                    <img onClick={() => nav(-1)} className='w-8 h-8 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black transition' src={assets.arrow_left} alt="" />
                    <img onClick={() => nav(1)} className='w-8 h-8 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black transition' src={assets.arrow_right} alt="" />
                </div>

                {/* Search Bar - Center */}
                <div className='flex-1 max-w-[500px] mx-4 hidden md:flex items-center relative group'>
                    <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-white transition-colors'>
                        <img src={assets.search_icon} className="w-5 h-5 opacity-70 invert" alt="" />
                    </div>
                    <input
                        type="text"
                        placeholder="What do you want to play?"
                        className='w-full bg-[#242424] text-white rounded-full py-3 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/20 hover:bg-[#2a2a2a] transition-colors placeholder-gray-400'
                    />
                    <div className='absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2 border-l border-gray-600 pl-3'>
                        <img src={assets.stack_icon} className="w-5 h-5 opacity-70 invert cursor-pointer hover:scale-105" alt="" />
                    </div>
                </div>

                <div className='flex items-center gap-6'>
                    <p className='text-[#a7a7a7] text-[14px] font-bold cursor-pointer hover:text-white hover:scale-105 transition hidden lg:block'>Premium</p>
                    <p className='text-[#a7a7a7] text-[14px] font-bold cursor-pointer hover:text-white hover:scale-105 transition hidden lg:block'>Support</p>
                    <p className='text-[#a7a7a7] text-[14px] font-bold cursor-pointer hover:text-white hover:scale-105 transition hidden lg:block'>Download</p>
                    <div className='h-6 w-[1px] bg-white/20 hidden lg:block'></div>
                    <div className='flex items-center gap-2 cursor-pointer hover:scale-105 transition bg-white/10 px-3 py-1.5 rounded-full group'>
                        <img src={assets.arrow_icon} className="w-4 h-4 rotate-90 invert group-hover:opacity-100 opacity-70" alt="" />
                        <p className='text-white text-[14px] font-bold'>Install App</p>
                    </div>
                    <div className='bg-purple-600 text-black w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-white/50 transition font-bold'>D</div>
                </div>
            </div>
            <div className='flex items-center gap-3 mt-4 px-4 overflow-x-auto pb-3'>
                <p className='bg-white text-black px-5 py-2 rounded-full cursor-pointer hover:bg-[#1db954] transition-transform transform hover:scale-105 font-bold text-sm'>All</p>
                <p className='bg-[#282828] px-5 py-2 rounded-full cursor-pointer hover:bg-[#3E3E3E] transition-transform transform hover:scale-105 text-sm'>Music</p>
                <p className='bg-[#282828] px-5 py-2 rounded-full cursor-pointer hover:bg-[#3E3E3E] transition-transform transform hover:scale-105 text-sm'>Podcasts</p>
            </div>
        </>
    )
}

export default Navbar