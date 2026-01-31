import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {

    const { id } = useParams();
    const albumData = albumsData.find((album) => album.id === Number(id));
    const { playWithId } = useContext(PlayerContext) || {};
    const albumSongs = songsData.filter((song) => song.album === albumData?.name);

    if (!albumData) {
        return (
            <div className='mt-10 px-4'>
                <h2 className='text-4xl font-bold mb-4 text-white'>Album not found!</h2>
                <p className='text-gray-400'>This album might have been removed or the link is incorrect.</p>
            </div>
        )
    }

    return (
        <>
            <div className={`mt-10 flex gap-8 flex-col md:flex-row md:items-end px-4`}>
                <img className='w-48 h-48 rounded-lg shadow-xl' src={albumData.image} alt={albumData.name} />
                <div className='flex flex-col'>
                    <p className='text-sm font-bold text-white'>Playlist</p>
                    <h2 className='text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-white'>
                        {albumData.name}
                    </h2>
                    <p className='text-gray-300'>{albumData.desc}</p>
                    <p className='mt-2 flex items-center gap-2'>
                        <img className='inline-block w-6 h-6 rounded-full' src={assets.spotify_logo} alt="Spotify" />
                        <b className='text-white'>Spotify</b> &bull; 1,234,567 likes &bull;
                        <b className='text-white'>{albumSongs.length} {albumSongs.length === 1 ? 'song' : 'songs'}</b>, about 4 hr 30 min
                    </p>
                </div>
            </div>
            <div className='mt-10 mb-4 px-4'>
                <div className='flex items-center gap-6'>
                    <div className='w-14 h-14 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform'>
                        <img src={assets.play_icon} alt='play' className='w-6 h-6 ml-1' />
                    </div>
                    <img src={assets.like_icon} alt='like' className='w-8 h-8 cursor-pointer opacity-70 hover:opacity-100' />
                    <p className='text-3xl text-gray-400 cursor-pointer'>...</p>
                </div>
            </div>
            <div className='hidden md:grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] mt-10 mb-4 px-4 pl-2 text-[#a7a7a7] text-sm border-b border-white/10 pb-2 font-medium tracking-wider uppercase'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt="" />
            </div>

            <div className='px-4 mb-20 md:mb-0'>
                {
                    albumSongs.length > 0
                        ? albumSongs.map((item, index) => (
                            <div onClick={() => playWithId && playWithId(item.id)} key={item.id} className='grid grid-cols-[auto_1fr_auto] md:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] gap-4 md:gap-2 p-2 items-center text-[#a7a7a7] hover:bg-white/10 cursor-pointer group rounded-md transition-colors duration-300'>
                                <p className='text-white hidden md:block'>
                                    <span className='w-4 inline-block text-center group-hover:hidden'>{index + 1}</span>
                                    <img className='w-4 hidden group-hover:inline-block' src={assets.play_icon} alt="" />
                                </p>
                                <div className='flex items-center gap-3 md:col-start-2'>
                                    <img className='inline w-12 h-12 md:w-10 md:h-10 rounded object-cover shadow-lg' src={item.image} alt="" />
                                    <div className='flex flex-col'>
                                        <p className='text-white text-base md:text-sm font-semibold truncate w-40 md:w-auto'>{item.name}</p>
                                        <p className='text-xs text-gray-400 font-medium hover:underline cursor-pointer hover:text-white'>Artist Name</p>
                                    </div>
                                </div>
                                <p className='text-sm hidden md:block hover:text-white cursor-pointer'>{albumData.name}</p>
                                <p className='text-sm hidden md:block'>5 days ago</p>
                                <p className='text-sm text-center md:text-center'>{item.duration}</p>
                            </div>
                        ))
                        : <p className='p-4 text-center text-gray-400'>No songs available in this playlist yet.</p>
                }
            </div>
        </>
    )
}

export default DisplayAlbum