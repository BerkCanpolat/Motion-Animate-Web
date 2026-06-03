import React, { useRef } from 'react'
import { IMAGES, LOGOFOLIOARRAY } from '../../Constants/images.data'
import { motion, useScroll, useTransform } from 'motion/react';
import { imageConfigs } from '../../Animations/logofolio.config';
import LogoFolioImage from '../../Components/motion/LogoFolioImage';

const Logofolio = () => {

const logoFolioRef = useRef(null);

const { scrollYProgress } = useScroll(
    {
        target: logoFolioRef,
        offset: ["start start", "end end"]
    }
);

const folderY = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["40vh", "110vh"]
);

const folderOpacity = useTransform(
    scrollYProgress,
    [0,0.4],
    [1, 0]
)

const transforms = imageConfigs.map((config) => ({
    x: useTransform(scrollYProgress,[0,0.4],config.x),
    y: useTransform(scrollYProgress,[0,0.4],config.y),
    rotate: useTransform(scrollYProgress,[0,0.4,1],config.rotate),
}))

 

  return (
    <section className='h-[550dvh] relative' ref={logoFolioRef}>
        <div className='sticky top-0 h-screen bg-neutral-100 overflow-hidden'>

            <div className='absolute inset-0 z-10 flex items-center justify-center'>
                {transforms.map((item,index) =>(
                    <LogoFolioImage key={index} x={item.x} y={item.y} rotate={item.rotate} image={LOGOFOLIOARRAY[index].logoFolio} className={`${index == 6 ? "w-100 -z-10" : ""} ${index == 4 ? "w-110" : ""} ${index == 2 ? "z-4" : ""} w-120`}/>
                ))}
            </div>

            <motion.div 
            style={{ y: folderY, opacity: folderOpacity }}
            className='absolute left-[12%] top-[22%] w-[77%] h-[52%] z-20'>
                <img src={IMAGES.LOGOFOLIOFOLDER} className='w-full'/>
            </motion.div>
        </div>

    </section>
  )
}

export default Logofolio