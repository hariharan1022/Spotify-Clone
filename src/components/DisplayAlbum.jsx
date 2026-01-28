import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {

    const { id } = useParams();
    const albumDatalocal = albumsData[Number(id)];
    const { playWithId } = useContext(PlayerContext);
    const albumSongs = songsData.filter((song) => song.album === albumDatalocal?.name);

    if (!albumDatalocal) {
        return (
            <div className='mt-10'>
                <h2 className='text-4xl font-bold mb-4'>Album not found!</h2>
            </div>
        )
    }

    return (
        <>
            <Navbar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumDatalocal.image} alt="" />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='text-4xl font-bold mb-4 md:text-6xl'>
                        {albumDatalocal.name}
                    </h2>
                    <h4>{albumDatalocal.desc}</h4>
                    <p className='mt-2'>
                        <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                        <b> Spotify Clone</b> &bull; 33,62,251 likes &bull;
                        <b>{albumSongs.length} {albumSongs.length === 1 ? 'song' : 'songs'}</b>
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden md:block'>Date Added</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt="" />
            </div>
            <hr />
            {
                albumSongs.length > 0
                    ? albumSongs.map((item, index) => (
                        <div onClick={() => playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-3 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer group rounded-md'>
                            <p className='text-white flex items-center'>
                                <span className='mr-4 text-[#a7a7a7] w-4 text-center group-hover:hidden'>{index + 1}</span>
                                <img className='mr-4 w-4 hidden group-hover:block' src={assets.play_icon} alt="" />
                                <img className='inline w-10 mr-5 rounded' src={item.image} alt="" />
                                {item.name}
                            </p>
                            <p className='text-[15px]'>{albumDatalocal.name}</p>
                            <p className='text-[15px] hidden md:block'>3 days ago</p>
                            <p className='text-[15px] text-center'>{item.duration}</p>
                        </div>
                    ))
                    : <p className='p-4 text-center text-gray-400'>No songs available in this playlist yet.</p>
            }
        </>
    )
}

export default DisplayAlbum