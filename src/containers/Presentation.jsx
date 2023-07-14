import React from 'react'
import { introCar } from '../assets'

const Presentation = () => {
  return (
    <div className='bg-primary md:pt-[2rem] pt-[5rem] flex md:flex-col justify-between'>
      <div className="flex-1 flex flex-col pl-[4rem] pt-[2rem] pr-[2rem] md:mb-[2rem]
      justify-start md:items-center xl:items-center gap-[1rem]">
        <h4 className='text-[#1A202C] text-[14px]'>Neque porro quisquam est qui dolorem ipsum quia</h4>
        <h2 className='ss:text-[30px] text-[40px] font-extrabold leading-[50px] uppercase max-w-[500px]'>Lorem Ipsum Neque porro qui dolorem </h2>
        <p className='max-w-[500px] text-[16px] text-[#5f6164]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation</p>
        <div className="flex ss:flex-col-reverse gap-4 m-t-[1rem]">
          <button className='w-[150px] h-[44px] bg-white text-[16px] font-semibold hover:scale-105'>Booking Now</button>
          <button>See all cars</button>
        </div>
      </div>
      <div className="flex-1 md:h-[300px] h-[680px]">
        <img src={introCar} alt='car' className="h-full w-full object-cover bg-[#AAB5C3] rounded-tl-[60px]"/>
      </div>
    </div>
  )
}

export default Presentation