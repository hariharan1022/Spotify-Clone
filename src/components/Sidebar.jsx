import React, { useState, useContext, useEffect } from 'react';
import { assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ onLogout }) => {
    const nav = useNavigate();
    const { setSearchQuery } = useContext(PlayerContext) || {};
    const [showSearch, setShowSearch] = useState(false);
    const [localSearchQuery, setLocalSearchQuery] = useState('');
    const [library, setLibrary] = useState(() => {
        try {
            const saved = localStorage.getItem('spotify_library');
            const parsed = saved ? JSON.parse(saved) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            return [];
        }
    });
    const [showAddSongs, setShowAddSongs] = useState(false);

    useEffect(() => {
        localStorage.setItem('spotify_library', JSON.stringify(library));
    }, [library]);

    const handleSearch = (query) => {
        setLocalSearchQuery(query);
        if (setSearchQuery) setSearchQuery(query);
        if (query.length > 0) {
            nav('/');
        }
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
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-gray-300 hidden lg:flex bg-black'>
            {/* Navigation */}
            <div className='bg-[#121212] h-auto rounded-lg flex flex-col justify-around p-2'>
                <div onClick={() => nav('/')} className='flex items-center gap-4 pl-4 cursor-pointer hover:text-white transition-all duration-300 py-2'>
                    <img className='w-6' src={assets.home_icon} alt="Home" />
                    <p className='font-bold'>Home</p>
                </div>
                <div onClick={() => setShowSearch(!showSearch)} className='flex items-center gap-4 pl-4 cursor-pointer hover:text-white transition-all duration-300 py-2'>
                    <img className='w-6' src={assets.search_icon} alt="Search" />
                    <p className='font-bold'>Search</p>
                </div>
                {showSearch && (
                    <div className='flex items-center gap-2 pl-4 pr-2 py-2'>
                        <input
                            type="text"
                            placeholder="Search your songs..."
                            value={localSearchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            className='flex-1 px-3 py-2 rounded-md bg-[#282828] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1db954]'
                        />
                    </div>
                )}
            </div>

            {/* Your Library */}
            <div className='bg-[#121212] flex-grow rounded-lg overflow-y-auto relative'>
                <div className='p-4 flex items-center justify-between sticky top-0 bg-[#121212]'>
                    <div className='flex items-center gap-3'>
                        <img className='w-6' src={assets.stack_icon} alt="Library" />
                        <p className='font-bold text-sm'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img
                            onClick={() => setShowAddSongs(!showAddSongs)}
                            className='w-5 h-5 cursor-pointer hover:scale-110 transition-transform font-bold'
                            src={assets.plus_icon}
                            alt="Add to library"
                            title="Add songs to library"
                        />
                        <img className='w-4 h-4 cursor-pointer hover:scale-110 transition-transform' src={assets.arrow_icon} alt="" />
                    </div>
                </div>

                {showAddSongs && (
                    <div className='p-4 bg-gradient-to-b from-[#1db954]/10 to-[#121212] m-2 rounded-lg border border-white/10'>
                        <h3 className='font-bold mb-3 text-white text-sm'>Add Songs to Library</h3>
                        <div className='max-h-[200px] overflow-y-auto pr-2'>
                            {songsData.map((song) => (
                                <div key={song.id} className='p-2 bg-[#282828] rounded mb-2 flex items-center justify-between hover:bg-[#383838] transition-all duration-300'>
                                    <div className='flex-1 min-w-0'>
                                        <p className='font-semibold text-xs truncate'>{song.name}</p>

                                        <p className='text-gray-400 text-xs truncate'>{song.desc}</p>
                                    </div>
                                    <button
                                        onClick={() => addToLibrary(song)}
                                        disabled={library.find(s => s.id === song.id)}
                                        className='ml-2 px-3 py-1 bg-[#1db954] text-black rounded-full text-xs font-bold hover:bg-[#1ed760] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300'
                                    >
                                        {library.find(s => s.id === song.id) ? 'Added' : 'Add'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {library.length > 0 ? (
                    <div className='p-2'>
                        <h3 className='font-bold mb-3 text-white text-sm px-2'>Liked Songs</h3>
                        {library.map((song) => (
                            <div key={song.id} className='p-2 rounded mb-2 flex items-center justify-between group hover:bg-[#282828] transition-all duration-300 cursor-pointer'>
                                <div className='flex-1 min-w-0 flex items-center gap-3'>
                                    <img src={song.image} className="w-10 h-10 rounded" alt={song.name} />
                                    <div>
                                        <p className='font-semibold text-sm truncate text-white'>{song.name}</p>
                                        <p className='text-gray-400 text-xs truncate'>{song.desc}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromLibrary(song.id)}
                                    className='ml-2 text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity font-bold'
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='p-4'>
                        <div className='p-4 bg-[#242424] m-2 rounded-lg font-semibold flex flex-col items-start justify-start gap-2 border border-white/10 hover:border-white/20 transition-all duration-300'>
                            <h1 className='text-white font-bold'>Create your first playlist</h1>
                            <p className='font-light text-sm'>It's easy, we'll help you</p>
                            <button className='px-4 py-1.5 bg-white text-black rounded-full mt-3 text-xs font-bold hover:bg-gray-200 hover:scale-105 transition-transform duration-300'>Create playlist</button>
                        </div>
                        <div className='p-4 bg-[#242424] m-2 rounded-lg font-semibold flex flex-col items-start justify-start gap-2 border border-white/10 hover:border-white/20 transition-all duration-300'>
                            <h1 className='text-white font-bold'>Let's find some podcasts to follow</h1>
                            <p className='font-light text-sm'>We'll keep you updated on new episodes</p>
                            <button className='px-4 py-1.5 bg-white text-black rounded-full mt-3 text-xs font-bold hover:bg-gray-200 hover:scale-105 transition-transform duration-300'>Browse podcasts</button>
                        </div>
                    </div>
                )}

                {/* Footer Links and Language */}
                <div className='p-6 mt-4'>
                    <div className='flex flex-wrap gap-x-4 gap-y-2 mb-6'>
                        {['Legal', 'Safety & Privacy Center', 'Privacy Policy', 'Cookies', 'About Ads', 'Accessibility'].map((link) => (
                            <a key={link} href="#" className='text-[11px] text-gray-400 hover:underline hover:text-white transition-colors'>{link}</a>
                        ))}
                        <a href="#" className='text-[11px] text-gray-400 hover:underline hover:text-white transition-colors'>Cookies</a>
                    </div>

                    <button className='flex items-center gap-2 px-3 py-1.5 border border-[#727272] hover:border-white rounded-full text-white text-sm font-bold bg-transparent hover:scale-105 transition-all'>
                        <img src={assets.search_icon} className='w-4 h-4 invert' alt="Globe" />
                        English
                    </button>
                </div>
            </div>
            {/* Logout Button */}
            <div className='bg-[#121212] h-[8%] rounded-lg flex items-center justify-center border-t border-white/10'>
                <button
                    onClick={onLogout}
                    className='px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 font-bold flex items-center gap-2 text-sm'
                >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L9 5.414V17a1 1 0 102 0V5.414l4.293 4.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;