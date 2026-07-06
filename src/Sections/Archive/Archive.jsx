import { motion,useScroll, useTransform } from 'motion/react';
import imgOne from '../../assets/featured/featured-1.avif'
import React, { useRef } from 'react'
import CustomHorizontalScroll from '../../Components/motion/CustomHorizontalScroll';
import air from '../../assets/archive/paperair.avif';
import archive1 from '../../assets/archive/archive1.avif';
import archive2 from '../../assets/archive/archive2.avif';
import archive3 from '../../assets/archive/archive3.avif';
import archive4 from '../../assets/archive/archive4.avif';
import archive5 from '../../assets/archive/archive5.avif';
import ScrollColorText from '../../Components/motion/CustomScrollText';

const Archive = () => {
  const sliderRef = useRef(null);


  const { scrollYProgress: sliderProgress } = useScroll({
  target: sliderRef,
  offset: ["start start", "end start"]
});

const slideX = useTransform(
  sliderProgress,
  [0, 0.8],
  ["5%", "-50%"]
);

const deneme1 = useTransform(
    sliderProgress,
    [0,0.70],
    ["-90%", "220%"]
);
const deneme2 = useTransform(
    sliderProgress,
    [0,0.70],
    ["500%","70%"]
);

const deneme3 = useTransform(
    sliderProgress,
    [0,0.70],
    [1.8,0.5]
);

const diagonalRange = [0, 0.70];

const shadowGap = useTransform(sliderProgress, diagonalRange, [300, 5]);
const shadowGapX = useTransform(
    sliderProgress,
    [0,0.70],
    ["90%","7%"]
);
const shadowOpacity = useTransform(sliderProgress, [0, 0.55, 0.70], [0.45, 0.45, 0]);
const shadowBlurPx = useTransform(sliderProgress, diagonalRange, [6, 16]);
const shadowFilter = useTransform(shadowBlurPx, (b) => `brightness(0) blur(${b}px)`);

  return (
    <div className='mt-70'>

        <div className='ml-5 md:ml-67'>

       <h1 className='uppercase text-gray-300 font-extrabold text-5xl mb-10 md:text-7xl md:mb-20'>archive</h1>

        </div>
        <div className='ml-0 md:ml-18'>
       <ScrollColorText />
        </div>
        <div
      ref={sliderRef}
      className='relative h-[400dvh]'
      >

      <div className='sticky top-0 h-screen overflow-hidden px-5'>

        <motion.div style={{ y: deneme1, x: deneme2, scale: deneme3 }} className='absolute z-20 max-md:hidden'>

            <motion.div
    style={{
      y: shadowGap,
      x: shadowGapX,
      opacity: shadowOpacity,
      filter: shadowFilter,
    }}
    className="absolute top-0 left-0 w-100 shrink-0 -z-10 pointer-events-none"
  >
    <img src={air} className="w-full h-full object-cover" />
  </motion.div>

            <CustomHorizontalScroll imgPath={air} className={"w-100 shrink-0 relative"}/>
        </motion.div>

        <motion.div
        style={{ x: slideX }}
        className='flex items-center gap-10 h-full w-max'
        >
        <CustomHorizontalScroll imgPath={archive1} className={"w-100 h-90 md:w-150 md:h-100 shrink-0 relative rounded-2xl"}/>
        <CustomHorizontalScroll imgPath={archive2} className={"w-100 h-90 md:w-150 md:h-100 shrink-0 relative rounded-2xl"}/>
        <CustomHorizontalScroll imgPath={archive3} className={"w-100 h-90 md:w-150 md:h-100 shrink-0 relative rounded-2xl"}/>
        <CustomHorizontalScroll imgPath={archive4} className={"w-100 h-90 md:w-150 md:h-100 shrink-0 relative rounded-2xl"}/>
        <CustomHorizontalScroll imgPath={archive5} className={"w-100 h-90 md:w-150 md:h-100 shrink-0 relative rounded-2xl"}/>
        <CustomHorizontalScroll imgPath={archive1} className={"w-100 h-90 md:w-150 md:h-100 shrink-0 relative rounded-2xl"}/>
        <CustomHorizontalScroll imgPath={archive2} className={"w-100 h-90 md:w-150 md:h-100 shrink-0 relative rounded-2xl"}/>
        <CustomHorizontalScroll imgPath={archive3} className={"w-100 h-90 md:w-150 md:h-100 shrink-0 relative rounded-2xl"}/>
        </motion.div>
      </div>

      </div>


    </div>
  )
}

export default Archive