import React, { useState } from 'react'
import moment from 'moment'

const cities = [
    "Miami",
    "Orlando",
    "Tampa",
    "Jacksonville",
    "Fort Lauderdale",
    "Miami Beach",
    "Key West",
    "Naples",
    "Sarasota",
    "Fort Myers"
  ]

const Menu = () => {
    const [pickup, setPickup] = useState({
        city: "",
        date: moment(Date.now()).format("YYYY-MM-DD"),
        time: moment(Date.now()).format("HH:mm")
    })

    const [dropoff, setDropoff] = useState({
        city: "",
        date: moment().add(1, "day").format("YYYY-MM-DD"),
        time: moment().format("HH:mm")
    })

    const handleClick = () => {
        console.log({"data": {pickup, dropoff}})
    }

  return (
    <div className='relative bg-[#F6F7F9] min-h-[145px] min-w-full'>
        <div className="absolute md:flex-col flex md:items-start items-center w-[90%] min-h-[132px] 
        bg-[#DEE1E4] rounded-[10px] md:top-[-5rem] top-[-66px] left-[5%] md:px-[2rem] py-5">
            <div className="w-full flex-[45%] flex-col pr-[2rem] gap-4 ss:mb-5 ss:pb-5 ss:border-b-[1px] border-black">
                <div className="flex gap-2 pl-8">                    
                    <input type='radio'/>
                    <label className='font-semibold text-[16px]'>Pick-up</label>
                </div>
                <div className="flex-wrap flex items-center w-full justify-between">
                    <div className="flex flex-col mt-1 flex-1 pl-8">
                        <h5 className='font-bold text-[16px]'>Locations</h5>
                        <label className='text-[12px]'>Select your city</label>
                        <select className='max-w-[80%]'
                        value={pickup.city} onChange={e=>setPickup((prev)=>({...prev, ['city']: e.target.value}))}>
                            <option disabled></option>
                            {cities.map((city, index)=>(
                                <option value={city.replace(" ", "-")} key={`${city} - ${index}`}>{city}</option> 
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col mt-1 border-r-black ss:border-r-0 ss:border-l-0 border-r-[1px] border-l-black border-l-[1px] flex-1 pl-8">
                        <h5 className='font-bold text-[16px]'>Date</h5>
                        <label className='text-[12px]'>Select your day</label>
                        <input type="date" className='w-max'
                        value={pickup.date} onChange={e=>setPickup((prev)=>({...prev, ['date']: e.target.value}))}/>
                    </div>
                    <div className="flex flex-col mt-1 flex-1 pl-8">
                        <h5 className='font-bold text-[16px]'>Time</h5>
                        <label className='text-[12px]'>Select your time</label>
                        <input className='w-max' type="time" value={pickup.time} onChange={e=>setPickup((prev)=>({...prev, ['time']: e.target.value}))}/>
                    </div>
                </div>
            </div>
            <div className="w-full flex-[45%] flex-col left pr-[2rem] gap-4">
                <div className="flex gap-2 pl-8">                    
                    <input type='radio' value='drop-off'/>
                    <label className='font-semibold text-[16px]'>Drop-off</label>
                </div>
                <div className="flex-wrap flex items-center w-full justify-between">
                    <div className="flex flex-col mt-1 flex-1 pl-8">
                        <h5 className='font-bold text-[16px]'>Locations</h5>
                        <label className='text-[12px]'>Select your city</label>
                        <select className='max-w-[80%]' value={dropoff.city} onChange={e=>setDropoff((prev)=>({...prev, ['city']: e.target.value}))}>
                            <option disabled></option>
                            {cities.map((city, index)=>(
                                <option value={city.replace(" ", "-")} key={`${city} - ${index}`}>{city}</option> 
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col mt-1 border-r-black ss:border-r-0 ss:border-l-0  border-r-[1px] border-l-black border-l-[1px] flex-1 pl-8">
                        <h5 className='font-bold text-[16px]'>Date</h5>
                        <label className='text-[12px]'>Select your day</label>
                        <input type="date" className='w-max'
                        value={dropoff.date} onChange={e=>setDropoff((prev)=>({...prev, ['date']: e.target.value}))}/>
                    </div>
                    <div className="flex flex-col mt-1 flex-1 pl-8">
                        <h5 className='font-bold text-[16px]'>Time</h5>
                        <label className='text-[12px]'>Select your time</label>
                        <input type="time" className='w-max'
                        value={dropoff.time} onChange={e=>setDropoff((prev)=>({...prev, ['time']: e.target.value}))}/>
                    </div>
                </div>
            </div>
            <div className='flex-[10%] flex items-center md:justify-center md:mx-auto md:my-4 justify-start'>
                <button className='whiteButton' onClick={handleClick}>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Menu