import React from 'react'
import { LOGOFOLIOARRAY } from '../../Constants/images.data'
import { motion } from 'motion/react'
import { twMerge } from 'tailwind-merge'

const LogoFolioImage = ({ x,y,rotate, className, image}) => {
  return (
    <>
            <motion.img
            style={{ x,y, rotate }}
            whileHover={{ scale: 1.1 }}
            className={twMerge("object-cover rounded-2xl cursor-pointer",className)}
            src={image} />
    </>
  )
}

export default LogoFolioImage