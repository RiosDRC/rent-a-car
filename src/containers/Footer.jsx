import React from 'react'
import { logo } from '../assets'
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-16 pb-8 bg-primary sm:px-1 px-[5%]">
        <div className="flex sm:flex-col sm:gap-4 items-center justify-between w-full pb-8">
            <div className="flex flex-col sm:items-center items-start gap-4">
                <img src={logo} alt="logo" className='h-[45px]'/>
                <p className='max-w-[260px] text-[16px]'>Our vision is to provide convenience and help increase your sales business.</p>
                <div className="flex gap-3">
                    <BiLogoFacebook className='hover:scale-110 text-[25px] p-[5px] rounded-full bg-white shadow-lg cursor-pointer'/>
                    <BiLogoTwitter className='hover:scale-110 text-[25px] p-[5px] rounded-full bg-white shadow-lg cursor-pointer'/>
                    <BiLogoInstagram className='hover:scale-110 text-[25px] p-[5px] rounded-full bg-white shadow-lg cursor-pointer'/>
                </div>
            </div>

            <div className="flex sm:w-full w-[50%] justify-between sm:justify-center">
                <div className="flex flex-col text-[16px] gap-4">
                    <h3 className='font-semibold text-[20px]'>About</h3>
                    <a href='#'  className='hover:text-[#5A5A5A]'>How it works</a>
                    <a href='#'  className='hover:text-[#5A5A5A]'>Featured</a>
                    <a href='#'  className='hover:text-[#5A5A5A]'>Partnership</a>
                    <a href='#'  className='hover:text-[#5A5A5A]'>Bussiness Relation</a>
                </div>
                <div className="flex flex-col text-[16px] gap-4">
                    <h3 className='font-semibold text-[20px]'>Community</h3>
                    <a href='#'  className='hover:text-[#5A5A5A]'>Events</a>
                    <a href='#'  className='hover:text-[#5A5A5A]'>Blog</a>
                    <a href='#'  className='hover:text-[#5A5A5A]'>Podcast</a>
                    <a href='#'  className='hover:text-[#5A5A5A]'>Invite a friend</a>
                </div>
                <div className="flex flex-col text-[16px] gap-4">
                    <h3 className='font-semibold text-[20px]'>Socials</h3>
                    <a href='#'  className='hover:text-[#5A5A5A]'>Discord</a>
                    <a href='#'  className='hover:text-[#5A5A5A]'>Instagram</a>
                    <a href='#'  className='hover:text-[#5A5A5A]'>Twitter</a>
                    <a href='#'  className='hover:text-[#5A5A5A]'>Facebook</a>
                </div>
            </div>
        </div>

        <div className="flex sm:flex-col sm:gap-3 items-center justify-between w-full text-[16px] font-semibold pt-6 border-[#4862845d] border-t-[1px]">
            <p>©2023 Company Name. All rights reserved</p>
            <div className="flex gap-8 cursor-pointer">
                <h5 className='hover:text-[#5A5A5A]'>Privacy & Policy</h5>
                <h5 className='hover:text-[#5A5A5A]'>Terms & Condition</h5>
            </div>
        </div>
    </div>
  )
}

export default Footer