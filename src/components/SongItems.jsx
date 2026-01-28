import React, { useContext, useState } from 'react'
import { PlayerContext } from '../context/PlayerContext'
import { assets } from '../assets/assets'

const SongItems = (props) => {

  const {playWithId} = useContext(PlayerContext);
  const [liked, setLiked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  return (
    <div className='max-w-[200px] min-h-[100px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] relative group'>
        <img onClick={()=>playWithId(props.id)} className='rounded min-w-[155px] max-h-[189px] w-full' src={props.image} alt="" />
        <p className='font-bold mt-2 mb-1'>{props.name}</p>
        <p className='text-slate-200 text-sm'>{props.desc}</p>
        <button 
          onClick={handleLike}
          className={`absolute top-2 right-2 p-2 rounded-full ${liked ? 'bg-red-500' : 'bg-[#1db954]'} text-white opacity-0 group-hover:opacity-100 transition-opacity`}
        >
          <img src={assets.like_icon} alt="like" className='w-4 h-4' />
        </button>
    </div>
  )
}

export default SongItems