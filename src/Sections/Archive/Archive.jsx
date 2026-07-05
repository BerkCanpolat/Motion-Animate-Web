import { motion,useScroll, useTransform } from 'motion/react';
import imgOne from '../../assets/featured/featured-1.avif'
import React, { useRef } from 'react'
import CustomHorizontalScroll from '../../Components/motion/CustomHorizontalScroll';
import air from '../../assets/archive/paperair.avif';

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

// const slideY = useTransform(
//   sliderProgress,
//   [0, 0.5 ,1],
//   ["0%","0%","30%"]
// );

// const deneme1 = useTransform(
//     sliderProgress,
//     [0,0.5,1],
//     ["-90%","100%","250%"]
// );
// const deneme2 = useTransform(
//     sliderProgress,
//     [0,1],
//     ["460%","-20%"]
// );

// const deneme3 = useTransform(
//     sliderProgress,
//     [0,1],
//     [1.8,0.3]
// )

const deneme1 = useTransform(
    sliderProgress,
    [0,0.45],
    ["-90%", "220%"]
);
const deneme2 = useTransform(
    sliderProgress,
    [0,0.45],
    ["460%","90%"]
);

const deneme3 = useTransform(
    sliderProgress,
    [0,0.45],
    [1.8,0.5]
)
  return (
    <div>
        {/* <div className='h-[200dvh]'/> */}

        <div
      ref={sliderRef}
      className='relative h-[400dvh]'
      >

      <div className='sticky top-0 h-screen overflow-hidden px-5'>

        <motion.div style={{ y: deneme1, x: deneme2, scale: deneme3 }} className='absolute z-20'>
            <CustomHorizontalScroll imgPath={air} className={"w-100 shrink-0 relative"}/>
        </motion.div>

        <motion.div
        style={{ x: slideX }}
        className='flex items-center gap-10 h-full w-max'
        >
        <CustomHorizontalScroll imgPath={imgOne} className={"w-150 h-100 shrink-0 relative rounded-2xl"}/>
        <CustomHorizontalScroll imgPath={imgOne} className={"w-150 h-100 shrink-0 relative rounded-2xl"}/>
        <CustomHorizontalScroll imgPath={imgOne} className={"w-150 h-100 shrink-0 relative rounded-2xl"}/>
        <CustomHorizontalScroll imgPath={imgOne} className={"w-150 h-100 shrink-0 relative rounded-2xl"}/>
        <CustomHorizontalScroll imgPath={imgOne} className={"w-150 h-100 shrink-0 relative rounded-2xl"}/>
        <CustomHorizontalScroll imgPath={imgOne} className={"w-150 h-100 shrink-0 relative rounded-2xl"}/>
        <CustomHorizontalScroll imgPath={imgOne} className={"w-150 h-100 shrink-0 relative rounded-2xl"}/>
        <CustomHorizontalScroll imgPath={imgOne} className={"w-150 h-100 shrink-0 relative rounded-2xl"}/>
        </motion.div>
      </div>

      </div>

    </div>
  )
}

export default Archive