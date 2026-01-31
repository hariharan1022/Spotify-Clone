import React from 'react'

const ArtistItem = ({ image, name, desc, id }) => {
    return (
        <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-all duration-300 group'>
            <img className='rounded-full w-full shadow-lg drop-shadow-2xl mb-4' src={image} alt={name} />
            <p className='font-bold mb-1 text-white text-base truncate'>{name}</p>
            <p className='text-[#a7a7a7] text-sm font-medium'>Artist</p>
        </div>
    )
}

export default ArtistItem
