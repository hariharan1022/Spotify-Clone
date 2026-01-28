import React, { useContext, useState } from 'react'
import { PlayerContext } from '../context/PlayerContext'
import { assets } from '../assets/assets'

const SongItems = (props) => {

  const { playWithId } = useContext(PlayerContext);
  const [liked, setLiked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  return (
    <div onClick={() => playWithId(props.id)} className='max-w-[200px] min-h-[100px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] relative group transition-colors duration-300'>
      <div className='relative'>
        <img className='rounded min-w-[155px] max-h-[189px] w-full' src={props.image} alt="" />
        <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded'>
          <button className='w-10 h-10 bg-[#1db954] rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
            <img src={assets.play_icon} alt="play" className='w-5 h-5 ml-1' />
          </button>
        </div>
      </div>
      <p className='font-bold mt-2 mb-1 truncate'>{props.name}</p>
      <p className='text-slate-200 text-sm truncate'>{props.desc}</p>
    </div>
  )
}

export default SongItems