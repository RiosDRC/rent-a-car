import React, { useRef, useState } from 'react'
import {small, large, exclusive, popular} from '../constants/constants'
import {AiOutlineHeart} from "react-icons/ai"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"


const CarOptions = () => {
    const [selected, setSetselected] = useState("Popular")
    const [carCat, setCarCat] = useState(popular)
    const [arrow, setArrow] = useState('left')
    
    const Category = ({title, cat}) => (
        <h3 className={`${selected === title ? 'text-black border-b-black border-b-[3px]' : 'border-b-[#90A3BF] border-b-[1px]'}
        cursor-pointer pb-4 w-full text-center ss:text-[15px] xl:text-[30px] text-[22px]`}
        onClick={()=>{setSetselected(title) ; setCarCat(cat)}}>{title}</h3>
    )

    const scrollRef = useRef()
    
    const scroll = (direction) =>{
      const { current } = scrollRef;
    
      if (direction === "left") {
        current.scrollLeft -= 310;
      } else {
        current.scrollLeft += 310;
      }

      if (current.scrollLeft < 10) {
        setArrow('left')
      } else if (current.scrollLeft >= current.scrollWidth - current.clientWidth - 150) {
        setArrow('right')
      } else {
        setArrow("none")
      }
    }

  return (
    <div className='bg-[#FAFBFD] flex flex-col items-center justify-between pt-[100px] pb-[2rem] relative' id='cars'>
        <h2 className='text-[#486284] text-[48px] text-center mx-1'>Lorem ipsum dolor sit amet</h2>
        <p className='max-w-[530px] text-center text-[18px] text-[#1A202C] mt-4 mx-1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        </p>
        <div className="flex md:w-full w-[80%] items-center justify-between text-[22px] mt-4 text-[#90A3BF] mx-[20%]">
            <Category cat={popular} title="Popular"/>
            <Category cat={small} title="Small cars"/>
            <Category cat={large} title="Large cars"/>
            <Category cat={exclusive} title="Exclusive"/>
        </div>
        <div className='flex flex-wrap items-center justify-center mt-4 gap-6 mx-[2rem] snap-x-proximity no-scrollbar
         md:flex-nowrap md:overflow-scroll md:max-w-[90%] md:justify-start' ref={scrollRef}>
            {carCat.map((car, index)=>(
                <div key={car.brand + index} className='min-w-max p-[1rem] bg-[#DEE5ED] flex flex-col max-w-[310px] m-2 rounded-[10px] xl:gap-10 gap-3 snap-center'>
                    <div className='flex items-center justify-between w-full'>                
                        <h4 className='text-[20px] font-bold'>{car.brand}</h4>
                        <AiOutlineHeart className='hover:text-[#ff2c2c] cursor-pointer text-[20px]'/>
                    </div>
                    <img src={car.imgUrl} alt="" className='w-[250px] h-[250px] ss:w-[230px] xl:w-[350px] object-cover rounded-[10px]'/>
                    <div className="flex items-center justify-between">
                        <h3 className='text-[20px] font-bold'>${car.price.toFixed(2)}/ <span className='text-[14px]'>day</span></h3>
                        <button className="whiteButton">Rent Now</button>
                    </div>
                </div>
            ))
            }
            <div className="absolute md:flex hidden items-center w-full justify-between text-[50px] left-0">
                <BsArrowLeftShort onClick={()=>scroll('left')} className={`${arrow === 'left' && 'opacity-0'} cursor-pointer`}/>
                <BsArrowRightShort onClick={()=>scroll('right')} className={`${arrow === 'right' && 'opacity-0'}  cursor-pointer`}/>
            </div>
        </div>
        <div className="flex relative items-center justify-center my-12 w-[80%]">
            <h5 className='text-[16px] text-[#486284] font-semibold cursor-pointer'>Show more cars</h5>
            <p className='absolute right-1 text-[14px]'>120 Cars</p>
        </div>
    </div>
  )
}

export default CarOptions