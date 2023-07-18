import React from 'react'
import { location1, location2 } from '../assets'

const Gallery = () => {
  return (
    <div className='bg-[#F3F3F3] py-16 sm:px-4 px-12 flex md:flex-col items-center gap-10 justify-center'>
        <div className="flex-1 h-[360px] xl:h-[600px] w-full overflow-hidden">
            <img src={location1} alt="car rental location" className='h-full w-full object-cover rounded-[10px]'/>
        </div>
        <div className="flex-1 h-[360px] xl:h-[600px] w-full">
            <img src={location2} alt="car rental location" className='h-full w-full object-cover rounded-[10px]'/>
        </div>
    </div>
  )
}

export default Gallery