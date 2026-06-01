import React, { useRef } from 'react'
import { IMAGES } from '../../Constants/images.data'
import { motion, useScroll, useTransform } from 'motion/react';

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

//Images
//1
const x1 = useTransform(
    scrollYProgress,
    [0,0.4],
    ["195%", "170%"]
)

const y1 = useTransform(
    scrollYProgress,
    [0,0.4],
    [180, -50]
)

const r1 = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [-5, -5, -17]
)

const s1 = useTransform(
    scrollYProgress,
    [0, 0.4],
    [0.9, 1]
)

//2
const y2 = useTransform(
    scrollYProgress,
    [0,0.4],
    [160, 0]
);

const r2 = useTransform(
    scrollYProgress,
    [0,0.4, 1],
    [0, 5, 12]
);

const x2 = useTransform(
    scrollYProgress,
    [0,0.4],
    ["130%", "150%"]
);

//3
const y3 = useTransform(
    scrollYProgress,
    [0,0.4],
    [155, 305]
);

const x3 = useTransform(
    scrollYProgress,
    [0,0.4],
    ["65%", "20%"]
);

const r3 = useTransform(
    scrollYProgress,
    [0,0.4, 1],
    [50, 50, 30]
);

//4
const y4 = useTransform(
    scrollYProgress,
    [0,0.4],
    [90, 0]
);

const r4 = useTransform(
    scrollYProgress,
    [0,0.4, 1],
    [0, 10, 50]
);

//5
const y5 = useTransform(
    scrollYProgress,
    [0,0.4],
    [310, 0]
);

const x5 = useTransform(
    scrollYProgress,
    [0,0.4],
    ["-65%", "-25%"]
);


const r5 = useTransform(
    scrollYProgress,
    [0,0.4,1],
    [10, 10, -20]
);


//6
const y6 = useTransform(
    scrollYProgress,
    [0,0.4],
    [150, 240]
);

const r6 = useTransform(
    scrollYProgress,
    [0,0.4,1],
    [0, 20, 85]
);

const x6 = useTransform(
    scrollYProgress,
    [0,0.4],
    ["-110%", "-80%"]
);

//7
const y7 = useTransform(
    scrollYProgress,
    [0,0.4],
    [180, 300]
);

const r7 = useTransform(
    scrollYProgress,
    [0,0.4, 1],
    [0, 10, 20]
);

const x7 = useTransform(
    scrollYProgress,
    [0,0.4],
    ["-370%", "-330%"]
);

 

  return (
    <section className='h-[500dvh] relative' ref={logoFolioRef}>
        <div className='sticky top-0 h-screen bg-neutral-100 overflow-hidden'>

            <div className='absolute inset-0 z-10 flex items-center justify-center'>
                <motion.img 
                style={{ x: x1, y: y1, rotate: r1 }}
                src={IMAGES.LOGOFOLIO1} className='w-120 object-cover rounded-2xl z-5' />
                <motion.img 
                style={{ x: x2, y: y2, rotate: r2 }}
                src={IMAGES.LOGOFOLIO2} className='w-120 object-cover rounded-2xl' />
                <motion.img 
                style={{ x: x3, y: y3, rotate: r3 }}
                src={IMAGES.LOGOFOLIO3} className='w-120 object-cover rounded-2xl z-4' />
                <motion.img 
                style={{ x: "-5%", y: y4, rotate: r4}}
                src={IMAGES.LOGOFOLIO4} className='w-110 object-cover rounded-2xl' />
                <motion.img 
                style={{ x: x5, y: y5, rotate: r5 }}
                src={IMAGES.LOGOFOLIO5} className='w-120 object-cover rounded-2xl' />
                <motion.img 
                style={{ x: x6, y: y6, rotate: r6 }}
                src={IMAGES.LOGOFOLIO6} className='w-120 object-cover rounded-2xl' />
                <motion.img 
                style={{ x: x7, y: y7, rotate: r7 }}
                src={IMAGES.LOGOFOLIO7} className='w-100 object-cover rounded-2xl -z-10' />
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