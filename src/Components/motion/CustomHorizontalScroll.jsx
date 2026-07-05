import React from 'react'
import { motion } from 'motion/react'
import { twMerge } from 'tailwind-merge'

const CustomHorizontalScroll = ({ style, imgPath, className }) => {
  return (
    <motion.div
    style={style}
    className={twMerge("absolute w-80 aspect-video overflow-clip", className)}
    >
        <img src={imgPath} className='w-full h-full object-cover' />
    </motion.div>
  )
}

export default CustomHorizontalScroll