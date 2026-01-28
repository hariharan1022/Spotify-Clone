import React, { useState } from 'react'
import {assets, songsData} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const nav = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [library, setLibrary] = useState([]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const addToLibrary = (song) => {
        if (!library.find(s => s.id === song.id)) {
            setLibrary([...library, song]);
        }
    };

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div onClick={()=>nav('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
            <div onClick={() => setShowSearch(!showSearch)} className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>
            </div>
            {showSearch && (
                <div className='flex items-center gap-2 pl-8 pr-4'>
                    <input 
                        type="text" 
                        placeholder="Search songs..." 
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className='flex-1 px-3 py-2 rounded bg-[#282828] text-white text-sm'
                    />
                </div>
            )}
        </div>
        <div className='bg-[#121212] h-[85%] rounded overflow-y-auto'>
            <div className='p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='w-8' src={assets.stack_icon} alt="" />
                    <p className='font-semibold'>Your Library ({library.length})</p>
                </div>
                <div className='flex items-center gap-3'>
                <img className='w-5' src={assets.arrow_icon} alt="" />
                <img className='w-5' src={assets.plus_icon} alt="" />
            </div>
            </div>
            
            {library.length > 0 ? (
                <div className='p-4'>
                    <h3 className='font-bold mb-3'>Liked Songs</h3>
                    {library.map((song) => (
                        <div key={song.id} className='p-2 bg-[#242424] rounded mb-2 text-sm'>
                            <p className='font-semibold'>{song.name}</p>
                            <p className='text-gray-400 text-xs'>{song.desc}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                        <h1>Create your first Playlist</h1>
                        <p className='font-light'>it's easy we will help you</p>
                        <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create playlist</button>
                    </div>
                    <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                        <h1>Find some Podcasts to Follow</h1>
                        <p className='font-light'>we'll keep you update on new episodes</p>
                        <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcasts</button>
                    </div>
                </>
            )}
        </div>
    </div>
  )
}

export default Sidebar