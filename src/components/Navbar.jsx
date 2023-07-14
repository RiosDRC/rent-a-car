import React, { useState } from 'react'
import { logo } from  '../assets'
import { TfiMenuAlt, TfiMinus } from 'react-icons/tfi'

const Links = ({styles}) => (
    <div className={`${styles} text-[#486284] text-[18px]`}>
        <a href="#home" className='text-black font-semibold'>Home</a>
        <a href="#" className='hover:text-black'>How it works</a>
        <a href="#" className='hover:text-black'>Rental Details</a>
        <a href="#" className='hover:text-black'>Why Choose Us</a>
        <a href="#" className='hover:text-black'>Testimonial</a>
        <div className='mx-[0] md:block hidden'>|</div>
        <a href="#" className='mr underline hover:text-black'>Register</a>
        <button className='box-border py-[4px] px-[12px] bg-[#486284] hover:bg-[#9dbae0] rounded-[4px] text-white'>Login</button>
    </div >
)

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

  return (
    <div className='flex items-center bg-primary pl-[4em] pr-[4rem] h-[100px] border-b-[#a4a4a4] border-[1px]'>
        <div className="flex-[20%] flex items-center justify-start gap-1">
            <img src={logo} alt="" className='w-[60px] h-[60px]'/>
            <h1 className='text-[20px] font-bold shadow-black drop-shadow-lg'>Rent-a-Car</h1>
        </div>
        <div className="flex-[80%] flex w-[100%] items-center justify-end">
            <div className="md:hidden">
                <Links styles="gap-3 flex items-center"/>
            </div>
            <div className="md:flex hidden relative">
                {toggle
                ? <TfiMinus className='cursor-pointer text-[30px]' onClick={()=>setToggle(prev=>!prev)}/> 
                : <TfiMenuAlt className='cursor-pointer text-[30px]' onClick={()=>setToggle(prev=>!prev)}/>
                }
                {toggle &&
                <Links styles="gap-2 flex flex-col items-start justify-center absolute top-[4.1rem] right-[-4rem] bg-[#AAB5C3] p-5 tilt-in-fwd-br" />
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar