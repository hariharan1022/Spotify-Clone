import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'
import { assets } from '../assets/assets'

const SongItems = (props) => {

  const { playWithId } = useContext(PlayerContext) || {};

  return (
    <div onClick={() => playWithId && playWithId(props.id)} className='min-w-[180px] p-2 px-3 rounded rounded-xl cursor-pointer hover:bg-[#ffffff26] bg-[#181818] transition-all duration-300 group hover:scale-105'>
      <div className='relative'>
        <img className='rounded rounded-xl w-full mb-2 shadow-lg drop-shadow-2xl' src={props.image} alt={props.name} />
        <div className={`absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-2 group-hover:translate-y-0`}>
          <button className='w-12 h-12 bg-[#1ed760] rounded-full flex items-center justify-center shadow-xl shadow-black/40 hover:scale-105 hover:bg-[#1fdf64] transition-transform'>
            <img src={assets.play_icon} alt="play" className='w-5 h-5 ml-1 text-black' style={{filter: "brightness(0) saturate(100%)"}} />
          </button>
        </div>
      </div>
      <p className='font-bold mt-2 mb-1 text-white text-base truncate'>{props.name}</p>
      <p className='text-[#a7a7a7] text-sm font-medium line-clamp-2'>{props.desc}</p>
    </div>
  )
}

export default SongItems