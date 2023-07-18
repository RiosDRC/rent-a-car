import React, { useRef, useState } from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { comments } from '../constants/constants'

const Review = ({img, name, rating, city, comment}) => (
    <div className='flex flex-col gap-2 min-w-[320px] h-[220px] max-w-[380px] bg-[#D3DCE7] p-6 rounded-[10px] text-[#486284] snap-center'>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img src={img} alt="" className='w-[40px] h-[40px] rounded-full object-cover'/>
                <div className="flex flex-col">
                    <h5 className='text-[18px] font-medium'>{name}</h5>
                    <h4 className='text-[14px]'>{city}</h4>
                </div>
            </div>
            <h3 className='text-[16px]'>{rating}</h3>
        </div>
        <p className='text-[14px] leading-[30px]'>{comment}</p>
    </div>
)

const Testimonial = () => {
    const [ maxNumber, setMaxNumber ] = useState(3);
    const [ minNumber, setMinNumber ] = useState(0);
    const [ limitedComments, setLimitedComments ] = useState(comments.slice(0, 3))
    const scrollRef = useRef();

    const handleClick = (direction) => {
        const { current } = scrollRef;

        if (direction === 'right' && (maxNumber + 3) <= 12) {
            setMaxNumber(prev=>prev + 3)
            setMinNumber(prev=>prev + 3)
            setLimitedComments(comments.slice(minNumber, maxNumber))
            current.scrollLeft = 0;
        }

        if (direction === 'left' && (minNumber - 3) >= 0) {
            setMaxNumber(prev=>prev - 3)
            setMinNumber(prev=>prev - 3)
            setLimitedComments(comments.slice(minNumber, maxNumber))
            current.scrollLeft = 0;
        }
    }

  return (
    <div className='flex flex-col items-center justify-center py-20 font-[rubik]' id='testimonial'>
        <h2 className='max-w-[422px] text-center text-[35px] font-medium text-[#486284] px-1'>Trusted by Thousands of Happy Customer</h2>
        <p className='max-w-[450px] text-center text-[18px] mt-3 font-[jakarta] px-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
        <div className="flex overflow-scroll w-[90%] items-center xl:justify-center justify-start p-[4rem] xl:gap-20 gap-12 mx-auto snap-x-proximity md-scrollbar-hidden" ref={scrollRef}>
            {limitedComments.map((comment, index) => (
                <Review key={comment.fullName + index} img={comment.imgUrl} rating={comment.rating.toFixed(1)}
                city={comment.location} comment={comment.comment} name={comment.fullName} />
            ))}
        </div>
        <div className="flex items-center justify-between w-[85%]">
            <div className="flex gap-2">
                <div className={`${minNumber === 0 ? 'w-[45px]  bg-[#1A202C]' : 'w-[15px] bg-[#DDE0E4]'} h-[15px] rounded-full`} />
                <div className={`${minNumber === 3 ? 'w-[45px]  bg-[#1A202C]' : 'w-[15px] bg-[#DDE0E4]'} h-[15px] rounded-full`} />
                <div className={`${minNumber === 6 ? 'w-[45px]  bg-[#1A202C]' : 'w-[15px] bg-[#DDE0E4]'} h-[15px] rounded-full`} />
                <div className={`${minNumber === 9 ? 'w-[45px]  bg-[#1A202C]' : 'w-[15px] bg-[#DDE0E4]'} h-[15px] rounded-full`} />
            </div>
            <div className="flex items-center text-[30px] text-[#486284] left-0">
                <BsArrowLeftShort className={`cursor-pointer`} onClick={()=>handleClick('left')}/>
                <BsArrowRightShort className={`cursor-pointer`} onClick={()=>handleClick('right')}/>
            </div>
        </div>
    </div>
  )
}

export default Testimonial