import React, { useRef } from 'react'
import Navbar from '../../Components/common/Navbar'
import HeroFloatingImages from '../../Components/motion/HeroFloatingImages'
import { IMAGES } from '../../Constants/images.data'
import { motion, scale, useScroll, useTransform } from 'motion/react'
import Featured from '../Featured/Featured'
import { parallaxImageData } from '../../Constants/ParallaxImageData'

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: {staggerChildren: .3, delayChildren: .7} }
}

 const items = {
     hidden: { opacity: 0, scale: 0},
     visible: { opacity: 1, scale: 1 }
 }

const Hero = () => {

    const mainRef = useRef(null);

    const section = 6;

    const { scrollYProgress } = useScroll(
        {
            target: mainRef,
            offset: ["start start","end end"]
        }
    );

    const scaleHero = useTransform(
        scrollYProgress,
        [0, 1.5 / section, 3 / section, 6 / section],
        [1, 0.5, 0.5, 1]
    );

    const imageYParallax = parallaxImageData.map(({y}) => useTransform(
        scrollYProgress,
        [0, 1],
        y
    ))

  return (
    <section ref={mainRef} className='px-5 py-5'>
        <motion.div 
        style={{ scale: scaleHero }}
        className='bg-[linear-gradient(180deg,#056b57_0%,#005141_100%)] h-[95vh] border-8 border-[#056b57] rounded-4xl sticky top-5'>

            <div className='relative w-full h-full overflow-hidden rounded-4xl'>
            <div className=''>
                <img src={IMAGES.HEROBG} className='absolute inset-0 w-full h-full object-cover rounded-4xl' />


                {/* Üst ve alt kenarlar */}
                <div className='absolute inset-0 bg-[linear-gradient(180deg,#005141_0%,transparent_20%,transparent_80%,#005141_100%)] rounded-4xl' />
                {/* Sol ve sağ kenarlar */}
                <div className='absolute inset-0 bg-[linear-gradient(90deg,#005141_0%,transparent_15%,transparent_85%,#005141_100%)] rounded-4xl' />
                {/* Orta */}
                <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,81,65,0.3)_0%,transparent_70%)] rounded-4xl' />

                
            </div>

            <div className='relative z-10 flex flex-col items-center justify-center h-full'>
                <div className='flex items-center -mb-5 md:-mb-7.5 z-10'>
                    <img src={IMAGES.HERO13} className='w-35 h-35 md:w-45 md:h-45 object-cover -mr-10' />
                    <img src={IMAGES.HERO14} className='w-35 h-35 md:w-45 md:h-45 object-cover' />
                </div>

                <motion.div
                initial={{ opacity:0, scale: 0 }}
                animate={{ opacity:1, scale: 1 }}
                transition={{ duration: .5, stiffness: 300, damping: 15, type: "spring" }}
                >
                    <h1 className='text-2xl leading-10 md:text-7xl font-extrabold text-[#68baa2] text-center uppercase font-stretch-110% md:leading-22'>welcome to <br /> viha's portfolio</h1>
                </motion.div>

                <div className='mt-5'>
                    <button className='bg-[rgb(240,253,250)] text-[rgb(0,150,137)] px-6 py-2.5 rounded-full capitalize'>view projects</button>
                </div>
            </div>

            <motion.div variants={container} initial="hidden" animate="visible" className='hidden md:block'>
                <HeroFloatingImages variants={items} img={IMAGES.HERO1} className={"-top-20 -left-20 w-100 h-100 -rotate-45"}/>
                <HeroFloatingImages variants={items} img={IMAGES.HERO2} className={"absolute top-134 -left-9 w-50 h-50 object-cover"}/>
                <HeroFloatingImages variants={items} img={IMAGES.HERO3} className={"absolute -bottom-10 -right-13 w-50 h-50 object-cover"}/>
                <HeroFloatingImages variants={items} img={IMAGES.HERO4} className={"absolute bottom-25 right-25 w-50 h-50 object-cover"}/>
                <HeroFloatingImages variants={items} img={IMAGES.HERO5} className={"absolute -top-25 right-40 -rotate-25 w-80 h-80 object-cover"}/>
                <HeroFloatingImages variants={items} img={IMAGES.HERO6} className={"absolute -bottom-10 -left-10 -rotate-35 w-55 h-55 object-cover"}/>
                <HeroFloatingImages variants={items} img={IMAGES.HERO7} className={"absolute top-80 -right-16 -rotate-135 w-60 h-60 object-cover"}/>
                <HeroFloatingImages variants={items} img={IMAGES.HERO8} className={"absolute bottom-15 left-50 w-75 rotate-10 h-25 object-cover"}/>
                <HeroFloatingImages variants={items} img={IMAGES.HERO9} className={"absolute top-45 -rotate-50 left-65 w-50 h-50 object-cover"}/>
                <HeroFloatingImages variants={items} img={IMAGES.HERO10} className={"absolute top-105 -rotate-167 left-25 w-75 h-75 object-cover"}/>
                <HeroFloatingImages variants={items} img={IMAGES.HERO11} className={"absolute -bottom-35 right-70 -rotate-10 w-60 h-90 object-cover"}/>
                <HeroFloatingImages variants={items} img={IMAGES.HERO12} className={"absolute top-8 -right-10 w-48 h-50 object-cove"}/>
            </motion.div>

            </div>



        </motion.div>

        <div className='h-dvh'/>

        <div className='relative'>
        <Featured imageYParallax={imageYParallax}/>
        </div>
    </section>
  )
}

export default Hero