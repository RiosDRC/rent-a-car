import React, { useState } from 'react'
import { logo } from  '../assets'
import { TfiMenuAlt, TfiMinus } from 'react-icons/tfi'

const Links = ({styles}) => (
    <div className={`${styles} text-[#486284] text-[16px] font-normal`}>
        <a href="#home" className='text-black font-semibold'>Home</a>
        <a href="#Introduction" className='hover:text-black'>How it works</a>
        <a href="#RentDetails" className='hover:text-black'>Rental Details</a>
        <a href="#aboutus" className='hover:text-black'>Why Choose Us</a>
        <a href="#testimonial" className='hover:text-black relative'>Testimonial<span className='md:hidden absolute right-[-12px]'>|</span></a>
        <a href="#" className='mr underline hover:text-black'>Register</a>
        <button className='box-border py-[4px] px-[12px] bg-[#486284] hover:bg-[#9dbae0] rounded-[4px] text-white'>Login</button>
    </div >
)

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

  return (
    <div className='flex items-center bg-primary sm:pl-[1rem] pl-[4rem] md:pr-[1rem] pr-[4rem] h-[100px] border-b-[#a4a4a4] border-[1px]'>
        <div className="flex-[20%] md:flex-[80%] flex items-center justify-start gap-1">
            <a href="https://riosdrc.github.io"><img src={logo} alt="" className='w-[60px] h-[60px]'/></a>
            <h1 className='text-[20px] font-bold shadow-black drop-shadow-lg'>Rent-a-Car</h1>
        </div>
        <div className="md:flex-[20%] flex-[80%] flex w-[100%] items-center justify-end">
            <div className="md:hidden">
                <Links styles="gap-6 flex items-center"/>
            </div>
            <div className="md:flex hidden relative">
                {toggle
                ? <TfiMinus className='cursor-pointer text-[30px]' onClick={()=>setToggle(prev=>!prev)}/> 
                : <TfiMenuAlt className='cursor-pointer text-[30px]' onClick={()=>setToggle(prev=>!prev)}/>
                }
                {toggle &&
                <Links styles="gap-2 flex flex-col items-start justify-center absolute top-[4.1rem] right-[-1rem] bg-[#AAB5C3] p-5 tilt-in-fwd-br" />
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar