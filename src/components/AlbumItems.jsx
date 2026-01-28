import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const AlbumItems = (props) => {

    const nav = useNavigate()
  return (
    <div onClick={()=>nav(`/album/${props.id}`)} className='min-w-[180px] max-w-[280px] p-3 rounded-lg cursor-pointer hover:bg-[#282828]/50 transition group bg-gradient-to-br from-[#282828] to-[#121212]'>
        <div className='relative'>
          <img className='rounded-lg w-full h-auto' src={props.image} alt="" />
          <button className='absolute bottom-2 right-2 w-10 h-10 bg-[#1db954] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition translate-y-2 group-hover:translate-y-0 shadow-lg'>
            <img src={assets.play_icon} alt="" className='w-5 h-5' />
          </button>
        </div>
        <p className='font-bold mt-3 mb-1 text-sm line-clamp-2'>{props.name}</p>
        <p className='text-slate-400 text-xs line-clamp-2'>{props.desc}</p>
    </div>
  )
}

export default AlbumItems
