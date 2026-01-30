import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'
import { assets } from '../assets/assets'

const SongItems = (props) => {

  const { playWithId } = useContext(PlayerContext) || {};

  return (
    <div onClick={() => playWithId && playWithId(props.id)} className='w-full md:w-auto min-w-[180px] max-w-[220px] p-3 rounded-lg cursor-pointer bg-[#181818] hover:bg-[#282828]/80 transition-all duration-300 group hover:scale-105'>
      <div className='relative'>
        <img className='rounded-lg w-full' src={props.image} alt={props.name} />
        <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg'>
          <button className='w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-xl transform transition-all duration-300 translate-y-2 group-hover:translate-y-0'>
            <img src={assets.play_icon} alt="play" className='w-6 h-6 ml-0.5' />
          </button>
        </div>
      </div>
      <p className='font-bold mt-3 mb-1 text-white text-base truncate'>{props.name}</p>
      <p className='text-gray-400 text-sm truncate'>{props.desc}</p>
    </div>
  )
}

export default SongItems