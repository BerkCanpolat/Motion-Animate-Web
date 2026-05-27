import React from 'react'
import { twMerge } from 'tailwind-merge'
import { motion } from 'motion/react'

const FeaturedParallaxImages = ({ imgPath, className, title, subTitle,y }) => {
  return (
    <motion.div
    style={{ y: y}}
    className={twMerge("absolute grid w-30 h-30 md:w-100 md:h-80", className)}
    
    >
        <img src={imgPath} className='w-full h-full object-cover rounded-2xl' />
        <p className='text-red-500 text-sm md:text-2xl font-bold'>{title}</p>
        <p className='text-gray-400 font-bold max-sm:text-xs'>{subTitle}</p>
    </motion.div>
  )
}

export default FeaturedParallaxImages