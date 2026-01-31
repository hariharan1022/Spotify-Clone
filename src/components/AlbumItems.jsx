import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const AlbumItems = (props) => {

    const nav = useNavigate()
  return (
    <div onClick={()=>nav(`/album/${props.id}`)} className='min-w-[180px] max-w-[280px] p-3 rounded-lg cursor-pointer hover:bg-[#282828]/80 transition-all duration-300 group bg-[#181818] hover:scale-105'>
        <div className='relative'>
          <img className='rounded-lg w-full h-auto' src={props.image} alt="" />
          <button className='absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 shadow-xl'>
            <img src={assets.play_icon} alt="" className='w-6 h-6 ml-0.5' />
          </button>
        </div>
        <p className='font-bold mt-3 mb-1 text-white text-base line-clamp-1'>{props.name}</p>
        <p className='text-gray-400 text-sm line-clamp-2'>{props.desc}</p>
    </div>
  )
}

export default AlbumItems
