import React, { useState } from 'react'
import {assets, songsData} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const nav = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [library, setLibrary] = useState([]);
    const [showAddSongs, setShowAddSongs] = useState(false);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const addToLibrary = (song) => {
        if (!library.find(s => s.id === song.id)) {
            setLibrary([...library, song]);
            setShowAddSongs(false);
        }
    };

    const removeFromLibrary = (songId) => {
        setLibrary(library.filter(s => s.id !== songId));
    };

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex bg-gradient-to-b from-[#121212] to-black'>
        {/* Spotify Logo/Home Section */}
        <div className='bg-gradient-to-b from-[#1db954] to-[#1aa34a] h-[12%] rounded-lg flex flex-col justify-center items-center p-4 text-black font-bold text-2xl'>
            <p>♫ Spotify</p>
        </div>

        {/* Navigation */}
        <div className='bg-[#1a1a1a] h-[15%] rounded-lg flex flex-col justify-around border border-[#282828] hover:border-[#1db954] transition'>
            <div onClick={()=>nav('/')} className='flex items-center gap-4 pl-6 cursor-pointer hover:text-[#1db954] transition py-2'>
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='font-semibold'>Home</p>
            </div>
            <div onClick={() => setShowSearch(!showSearch)} className='flex items-center gap-4 pl-6 cursor-pointer hover:text-[#1db954] transition py-2'>
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-semibold'>Search</p>
            </div>
            {showSearch && (
                <div className='flex items-center gap-2 pl-6 pr-4 py-2'>
                    <input 
                        type="text" 
                        placeholder="Search songs..." 
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className='flex-1 px-3 py-2 rounded-lg bg-[#282828] text-white text-sm focus:outline-none focus:border-[#1db954]'
                    />
                </div>
            )}
        </div>

        {/* Your Library */}
        <div className='bg-[#1a1a1a] h-[73%] rounded-lg overflow-y-auto relative border border-[#282828]'>
            <div className='p-4 flex items-center justify-between sticky top-0 bg-[#1a1a1a] border-b border-[#282828]'>
                <div className='flex items-center gap-3'>
                    <img className='w-6' src={assets.stack_icon} alt="" />
                    <p className='font-bold text-sm'>Your Library</p>
                    <span className='bg-[#1db954] text-black text-xs rounded-full px-2 py-0.5 font-bold'>{library.length}</span>
                </div>
                <div className='flex items-center gap-2'>
                <img className='w-4 cursor-pointer hover:text-[#1db954] transition' src={assets.arrow_icon} alt="" />
                <img 
                    onClick={() => setShowAddSongs(!showAddSongs)} 
                    className='w-5 cursor-pointer hover:text-[#1db954] transition font-bold' 
                    src={assets.plus_icon} 
                    alt="add" 
                    title="Add songs to library"
                />
            </div>
            </div>

            {showAddSongs && (
                <div className='p-4 bg-gradient-to-b from-[#1db954]/20 to-[#121212] m-2 rounded-lg border border-[#1db954]/30'>
                    <h3 className='font-bold mb-3 text-[#1db954] text-sm'>+ Add Songs to Library</h3>
                    <div className='max-h-[250px] overflow-y-auto'>
                        {songsData.map((song) => (
                            <div key={song.id} className='p-2 bg-[#282828] rounded mb-2 flex items-center justify-between hover:bg-[#333333] transition'>
                                <div className='flex-1 min-w-0'>
                                    <p className='font-semibold text-xs truncate'>{song.name}</p>
                                    <p className='text-gray-500 text-xs truncate'>{song.desc}</p>
                                </div>
                                <button 
                                    onClick={() => addToLibrary(song)}
                                    disabled={library.find(s => s.id === song.id)}
                                    className='ml-2 px-2 py-1 bg-[#1db954] text-black rounded text-xs font-bold hover:bg-[#1ed760] disabled:opacity-50 disabled:cursor-not-allowed transition'
                                >
                                    {library.find(s => s.id === song.id) ? '✓' : '+'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            {library.length > 0 ? (
                <div className='p-4'>
                    <h3 className='font-bold mb-3 text-[#1db954] text-sm border-b border-[#282828] pb-2'>Your Liked Songs</h3>
                    {library.map((song) => (
                        <div key={song.id} className='p-2 bg-[#282828] rounded mb-2 flex items-center justify-between group hover:bg-[#333333] transition'>
                            <div className='flex-1 min-w-0'>
                                <p className='font-semibold text-xs truncate'>{song.name}</p>
                                <p className='text-gray-500 text-xs truncate'>{song.desc}</p>
                            </div>
                            <button 
                                onClick={() => removeFromLibrary(song.id)}
                                className='ml-2 text-red-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition font-bold'
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <div className='p-4 bg-gradient-to-br from-[#282828] to-[#1a1a1a] m-2 rounded-lg font-semibold flex flex-col items-start justify-start gap-2 border border-[#1db954]/30 hover:border-[#1db954] transition'>
                        <h1 className='text-white'>📋 Create Playlist</h1>
                        <p className='font-light text-xs text-gray-300'>Make your first playlist</p>
                        <button className='px-4 py-1 bg-[#1db954] text-black rounded-full mt-2 text-xs font-bold hover:bg-[#1ed760] transition'>Create</button>
                    </div>
                    <div className='p-4 bg-gradient-to-br from-[#282828] to-[#1a1a1a] m-2 rounded-lg font-semibold flex flex-col items-start justify-start gap-2 border border-[#1db954]/30 hover:border-[#1db954] transition'>
                        <h1 className='text-white'>🎙️ Podcasts</h1>
                        <p className='font-light text-xs text-gray-300'>Discover podcasts</p>
                        <button className='px-4 py-1 bg-[#1db954] text-black rounded-full mt-2 text-xs font-bold hover:bg-[#1ed760] transition'>Explore</button>
                    </div>
                </>
            )}
        </div>
    </div>
  )
}

export default Sidebar