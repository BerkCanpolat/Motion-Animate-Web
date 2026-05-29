import React from 'react'
import { IMAGEARRAY, IMAGES } from '../../Constants/images.data'
import TimeRoundedSlideImages from '../../Components/motion/TimeRoundedSlideImages'
import Brands from './Brands'

const TimeRoundel = () => {
  return (
    <section className='flex flex-col items-center justify-center mt-40'>
        <div className='flex flex-col justify-cente items-center max-w-100 md:flex-row md:items-center md:justify-between gap-10 md:max-w-270 mx-auto'>
            {/* First Section */}
            <div className='w-90 h-90 md:w-100 md:h-100 shrink-0 rounded-4xl bg-[#c00] flex flex-col justify-between py-8 px-8 text-[rgba(255,255,255,0.25)]'>
                <div className=''>
                    <p className='text-xl md:text-2xl'>Internship @Target</p>
                    <p className='text-4xl md:text-5xl font-bold'>Roundel</p>
                </div>
                    <img src={IMAGES.TIMEROUND} className='w-30 h-30 md:w-40 md:h-40 object-cover' />
            </div>
            {/* Second Section */}
            <div className='md:flex-1 w-full md:min-w-0 md:h-100'>
                <div className=''>
                    <h1 className='text-2xl font-medium'>My Time at Roundel</h1>
                    <p className='text-gray-400 mt-2 mb-3 max-md:w-95'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci iure quo voluptas odio laudantium. Voluptatibus debitis repellat cumque eveniet aperiam iste iusto amet sit! Voluptatem distinctio alias numquam ipsa aut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. A odit temporibus dicta, aperiam optio repellendus, eos culpa totam inventore voluptates corrupti sapiente facilis debitis. Tempore alias dicta eius numquam possimus.</p>
                </div>
                    <div className='relative'>
                        <TimeRoundedSlideImages images={IMAGEARRAY}/>
                        <img src={IMAGES.TIMECHART} className='absolute w-50 h-50 object-cover top-0 right-0 hidden' />
                    </div>
            </div>
        </div>
        <Brands />
    </section>
  )
}

export default TimeRoundel