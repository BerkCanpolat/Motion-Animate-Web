import React from 'react'
import { IMAGEBRANDS } from '../../Constants/images.data'

const Brands = () => {
  return (
    <div>
        <h1 className='uppercase my-15 md:my-10 text-[rgb(161,161,161)] font-medium text-center'>partner brands | worked with</h1>

        <div className='flex flex-col md:flex-row items-center gap-20 md:gap-30'>
            {IMAGEBRANDS.map((items,i) => (
                <img key={i} src={items.brandsArray} className='w-22 h-full object-cover' />
            ))}
        </div>
    </div>
  )
}

export default Brands