import React from 'react'
import { calendar, location, transport, curves } from '../assets'

const Card = ({img, title, text}) => (
    <div className="flex flex-col text-[24px] items-center">
        <img src={img} alt="calendar" />
        <h4 className='font-semibold text-[#1A202C]'>{title}</h4>
        <p className='text-[14px] max-w-[260px] text-center mt-4'>{text}</p>
    </div>
)

const RentalDetails = () => {
  return (
    <div className='flex flex-col my-10 ss:mt-[25rem]' id='RentDetails'>
        <div className="flex flex-col items-center">
            <h2 className='text-[#486284] text-[48px] text-center mx-1'>Lorem Ipsum passage</h2>
            <p className='text-[18px] max-w-[450px] text-center mt-6 mx-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        </div>

        <div className="flex-wrap flex justify-evenly gap-8 w-full mt-10 relative">
            <Card img={location} text='Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.' className="flex-[30%]"/>
            <img src={curves} alt="curves" className='max-w-[22%] max-h-[80px] absolute left-[23%] xl:left-[30%] md:hidden'/>
            <Card img={calendar} text='Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.' className="flex-[30%]"/>
            <img src={curves} alt="curves" className='max-w-[22%] max-h-[80px] absolute right-[23%] xl:right-[30%] md:hidden'/>
            <Card img={transport} text='Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.' className="flex-[30%]"/>
        </div>
    </div>
  )
}

export default RentalDetails