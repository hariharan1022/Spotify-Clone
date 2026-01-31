import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContext'

const Navbar = ({ isScrolled }) => {
    const nav = useNavigate()
    const { searchQuery, setSearchQuery } = useContext(PlayerContext) || {};
    return (
        <>
            <div className={`w-full flex justify-between items-center font-semibold sticky top-0 z-10 p-4 transition-all duration-300 ${isScrolled ? 'bg-[#121212] bg-opacity-80 backdrop-blur-md border-b border-white/10' : 'bg-[#121212]'}`}>
                <div className='flex items-center gap-4'>
                    <img onClick={() => nav(-1)} className='w-8 h-8 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black transition' src={assets.arrow_left} alt="" />
                    <img onClick={() => nav(1)} className='w-8 h-8 bg-black/70 p-2 rounded-full cursor-pointer hover:bg-black transition' src={assets.arrow_right} alt="" />
                </div>

                {/* Search Bar - Center */}
                <div className='flex-1 max-w-[200px] md:max-w-[500px] mx-2 md:mx-4 flex items-center relative group'>
                    <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-white transition-colors'>
                        <img src={assets.search_icon} className="w-4 h-4 md:w-5 md:h-5 opacity-70 invert" alt="" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            if (e.target.value.length > 0) nav('/');
                        }}
                        className='w-full bg-[#242424] text-white rounded-full py-2 md:py-3 pl-9 md:pl-12 pr-4 text-[12px] md:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/20 hover:bg-[#2a2a2a] transition-colors placeholder-gray-400'
                    />
                </div>

                <div className='flex items-center gap-3 md:gap-6'>
                    <p className='text-[#a7a7a7] text-[14px] font-bold cursor-pointer hover:text-white hover:scale-105 transition hidden sm:block'>Premium</p>
                    <div className='hidden md:block h-6 w-[1px] bg-white/20'></div>
                    <div className='flex items-center gap-2 cursor-pointer hover:scale-105 transition bg-white/10 px-2 md:px-3 py-1 md:py-1.5 rounded-full group'>
                        <p className='text-white text-[12px] md:text-[14px] font-bold'>Install</p>
                    </div>
                    <div className='bg-purple-600 text-black w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-white/50 transition font-bold text-sm'>D</div>
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