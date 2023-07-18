import React from 'react'
import { aboutUs, price, service, smallLocation } from '../assets'

const Card = ({title, text , img}) => (
    <div className="flex gap-8 ss:gap-4">
        <img src={img} alt={"icon-" + title} />
        <div className="flex flex-col max-w-[400px] sm:max-w-[250px]">
            <h3 className='text-[22px] font-semibold text-[#1A202C] xl:text-[30px]'>{title}</h3>
            <p className='text-[#1A202C] text-[16px] xl:text-[22px]'>{text}</p>
        </div>
    </div>
)

const AboutUs = () => {
  return (
    <div className='flex flex-col items-center justify-center py-[2rem]' id='aboutus'>
        <h2 className='text-[48px] font-medium text-[#486284] mx-1'>Why Choose Us</h2>
        <p className='mx-1 text-center text-[#1A202C] text-[18px] my-4 max-w-[500px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e</p>
        <div className="flex md:flex-col gap-6 w-full items-center justify-between mt-8 sm:px-1 px-[4rem]">
            <div className='flex-1'>
                <img src={aboutUs} alt="family in a car" className='w-[90%] xl:ml-[10%] sm:mx-auto'/>
            </div>
            <div className="flex-1 flex flex-col w-max xl:items-center items-end justify-center gap-[2rem]">
                <Card title="Customer Support"
                text="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices."
                img={service} />
                <Card title="Best Price Guarantted"
                text="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices."
                img={price} />
                <Card title="Many Location"
                text="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices."
                img={smallLocation} />
            </div>
        </div>
    </div>
  )
}

export default AboutUs