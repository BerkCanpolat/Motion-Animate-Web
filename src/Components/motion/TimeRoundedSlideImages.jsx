import React from 'react'
import { IMAGES } from '../../Constants/images.data'
import { motion } from 'motion/react'

const TimeRoundedSlideImages = ({ images }) => {
  return (
    <div className='overflow-hidden w-full rounded-2xl'>
        <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
        }}
        className='flex gap-3 w-max'
        >
            {[...images,...images].map((item,i) => (
                <div key={i} className='w-47.5 shrink-0'>
                    <img src={item.imgArray} className='h-45 w-full md:h-50 object-cover rounded-2xl shrink-0' />
                </div>
            ))}
        </motion.div>
    </div>
  )
}

export default TimeRoundedSlideImages