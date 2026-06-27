import React, { useEffect, useRef, useState } from 'react'
import { IMAGES, LOGOFOLIOARRAY } from '../../Constants/images.data'
import { motion, useScroll, useTransform } from 'motion/react';
import { imageConfigs } from '../../Animations/logofolio.config';
import LogoFolioImage from '../../Components/motion/LogoFolioImage';

const Logofolio = () => {

    const [isMobile, setIsMobile] = useState(
        window.innerWidth < 768
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize",handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

const transforms = imageConfigs.map((config) => {
    const currentConfig = isMobile ? config.mobile : config.desktop;

    return {
        x: useTransform(
           scrollYProgress,
           [0, 0.4],
           currentConfig.x
        ),
        y: useTransform(
           scrollYProgress,
           [0, 0.4],
           currentConfig.y
        ),
        rotate: useTransform(
           scrollYProgress,
           [0, 0.4, 1],
           config.rotate
        ),
    }
})

  return (
    <section className='h-[600dvh] relative' ref={logoFolioRef}>
        <h1 className='uppercase text-gray-300 font-extrabold text-5xl mt-25 md:text-7xl  md:ml-70 md:mt-50'>logofolio</h1>
        <div className='sticky top-0 h-screen overflow-hidden'>

            <div className='absolute inset-0 z-10 flex items-center justify-center'>
                {transforms.map((item,index) =>(
                    <LogoFolioImage key={index} x={item.x} y={item.y} rotate={item.rotate} image={LOGOFOLIOARRAY[index].logoFolio} className={`${index == 6 ? "w-40 md:w-100 -z-10" : ""} ${index == 4 ? "w-50 md:w-110" : ""} ${index == 2 ? "z-4" : ""} w-40 md:w-120`}/>
                ))}
            </div>

            <motion.div 
            style={{ y: folderY, opacity: folderOpacity }}
            className='absolute w-[90%] h-[65%] left-[5%] top-[35%] md:left-[12%] md:top-[22%] md:w-[77%] md:h-[52%] z-20'>
                <img src={IMAGES.LOGOFOLIOFOLDER} className='w-full'/>
            </motion.div>
        </div>

    </section>
  )
}

export default Logofolio