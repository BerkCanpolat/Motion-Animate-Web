import React from "react";
import { motion } from "motion/react"
import { twMerge } from 'tailwind-merge';


const HeroFloatingImages = ({ style, className, img, variants }) => {
  return (
      <motion.img
      variants={variants}
        src={img}
        className={twMerge("absolute object-cover", className)}
      />

  );
};

export default HeroFloatingImages;
