import React from 'react'
import { IMAGEBRANDS } from '../../Constants/images.data'

const Brands = () => {
  return (
    <div>
        <h1 className='uppercase my-10 text-[rgb(161,161,161)] font-medium text-center'>partner brands | worked with</h1>

        <div className='flex items-center gap-30'>
            {IMAGEBRANDS.map((items,i) => (
                <img src={items.brandsArray} className='w-22 h-full object-cover' />
            ))}
        </div>
    </div>
  )
}

export default Brands