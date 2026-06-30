import React, { useState } from 'react'
import { ABOUTFREEZERARRAY, ABOUTMEARRAY, IMAGES } from '../../Constants/images.data'
import { AnimatePresence, motion } from 'motion/react';

const Aboutme = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIdx, setNextIdx] = useState(null);
    const [phase, setPhase] = useState('idle');

    const handleImageClick = () => {
        if (phase !== 'idle') return;
        const next = (currentIndex + 1) % ABOUTMEARRAY.length;
        setNextIdx(next);
        setPhase('down');
    }

    const handleDownComplete = () => {
        setPhase('up'); 
    }

    const handleUpComplete = () => {
        setCurrentIndex(nextIdx);
        setNextIdx(null);
        setPhase('idle');
    }


    const [isScaled, setIsScaled] = useState(false);

  const handleTap = () => {
    setIsScaled(true);
    setTimeout(() => {
      setIsScaled(false);
    }, 1000);
  };

  return (
    <section className='md:mt-100'>
        <div className='w-fit mx-auto'>

        <h1 className='uppercase text-gray-300 font-extrabold text-5xl md:text-7xl md:mb-20'>about me</h1>
        <div className='flex items-center justify-center gap-10'>
            {/* Freeze */}
            <div className='relative'>
                <img src={IMAGES.ABOUTFREEZER} className='w-85 h-160 rounded-2xl' />
                {
                    ABOUTFREEZERARRAY.map((item,i) => (
                        <img key={i} src={item.aboutFreezer} className={`w-15 absolute cursor-pointer object-cover ${item.className}`} />
                    ))
                }
            </div>
            {/* Board */}
            <div className='flex flex-col gap-11'>
                <div className='w-105.5 h-71 bg-amber-500 rounded-2xl'>

                </div>

                <div className='flex items-center gap-5'>
                    <img src={IMAGES.ABOUTBOOK} className='w-50 h-76 object-cover'/>
                    <img src={IMAGES.ABOUTBOOK} className='w-50 h-76'/>
                </div>
            </div>
            {/* Me */}
            <div className='flex flex-col justify-between h-158'>
                <div className='relative w-100 h-100  rounded-2xl cursor-pointer'
                onClick={handleImageClick}>
                    <motion.img
                    onTap={handleTap}
                    animate={{ scale: isScaled ? 0.9 : 1 }}
      transition={{ duration: 0.3 }}
                        src={ABOUTMEARRAY[currentIndex].aboutMe}
                        className='absolute inset-0 w-full h-full object-cover rounded-2xl'
                        style={{ zIndex: phase === 'up' ? 0 : 1 }}
                    />

                            {phase === 'down' && nextIdx !== null && (
                                <motion.img
                                    src={ABOUTMEARRAY[nextIdx].aboutMe}
                                    className='absolute inset-0 w-full h-full object-cover rounded-2xl'
                                    style={{ zIndex: 0 }}
                                    initial={{ y: '0%' }}
                                    animate={{ y: '105%' }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 25,
                                        mass: 1,
                                    }}
                                    onAnimationComplete={handleDownComplete}
                                />
                            )}

                            {phase === 'up' && nextIdx !== null && (
                                <motion.img
                                    src={ABOUTMEARRAY[nextIdx].aboutMe}
                                    className='absolute inset-0 w-full h-full object-cover rounded-2xl'
                                    style={{ zIndex: 2 }}
                                    initial={{ y: '105%' }}
                                    animate={{ y: '0%' }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 80,
                                        damping: 18,
                                        mass: 1,
                                    }}
                                    onAnimationComplete={handleUpComplete}
                                />
                            )}
                </div>
                <div className=''>
                    <iframe 
                    data-testid="embed-iframe" 
                    style={{borderRadius: '12px'}} 
                    src="https://open.spotify.com/embed/artist/6RTC1abMgBC7Krg6qJQHJh?utm_source=generator&si=56d62079a7b7444c" 
                    width="100%" 
                    height="152" 
                    frameBorder="0" 
                    allowFullScreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"></iframe>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Aboutme