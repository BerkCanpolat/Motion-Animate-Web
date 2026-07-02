import React, { useEffect, useState } from 'react'
import { ABOUTFREEZERARRAY, ABOUTMEARRAY, IMAGES, TOOLSARRAY } from '../../Constants/images.data'
import { AnimatePresence, motion } from 'motion/react';

const Aboutme = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIdx, setNextIdx] = useState(null);
    const [phase, setPhase] = useState('idle');

    const [isHovered,setIsHovered] = useState(false);
    const [showCursor, setShowCursor] = useState(false);
    const [cursorText, setCursorText] = useState("Explore");
    const [mousePosition, setMousePoisition] = useState({
        x: 0,
        y: 0
    })

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
    }, 650);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
        setMousePoisition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
        window.removeEventListener("mousemove", handleMouseMove);
    };
  },[]);

  return (
    <section 
    onMouseEnter={() => {
            console.log("ENTER")
            setShowCursor(true)
        }}
        onMouseLeave={() => {
            console.log("LEAVE")
            setShowCursor(false)
        }}
    className='md:mt-100'>

        {showCursor && (
  <motion.div
    className="fixed pointer-events-none z-[9999]"
    animate={{
      left: mousePosition.x,
      top: mousePosition.y,
    }}
    transition={{
      type: "spring",
      stiffness: 1000,
      damping: 60,
    }}
  >
    <div className="flex items-center gap-3">
      
      <motion.div
        animate={{
          rotate: -20,
        }}
        className="
          w-0 h-0
          border-t-[12px]
          border-b-[12px]
          border-l-[20px]
          border-t-transparent
          border-b-transparent
          border-l-blue-600
        "
      />

      <div className="
        bg-blue-600
        text-white
        px-8
        py-4
        rounded-full
        text-lg
        whitespace-nowrap
      ">
        {cursorText}
      </div>

    </div>
  </motion.div>
)}



        <div className='w-fit mx-auto'>
        <h1 className='uppercase text-gray-300 font-extrabold text-5xl mb-10 md:text-7xl md:mb-20'>about me</h1>
        <div 
        className='flex items-center justify-center gap-10 cursor-none'>
            {/* Freeze */}
            <div 
            onMouseEnter={() => setCursorText("Drag me around!")}
            className='relative max-md:hidden'>
                <img src={IMAGES.ABOUTFREEZER} className='w-85 h-160 rounded-2xl' />
                {
                    ABOUTFREEZERARRAY.map((item,i) => (
                        <img key={i} src={item.aboutFreezer} className={`w-15 absolute cursor-pointer object-cover ${item.className}`} />
                    ))
                }
            </div>
            {/* Board */}
            <div className='flex flex-col gap-11 max-md:hidden'>
                <div
                onMouseEnter={() => setCursorText("My top 3 board games")} 
                className='w-105.5 h-71 bg-amber-500 rounded-2xl'>

                </div>

                <div className='flex items-end justify-between gap-5 w-full'>
                    <img 
                    onMouseEnter={() => setCursorText("Favorite Books")}
                    src={IMAGES.ABOUTBOOK} className='w-50 h-76 object-cover'/>
                    <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className='relative w-45 h-45'>
                    {
                        TOOLSARRAY.map((t,i) => (
                            <motion.img
                            animate={
                                isHovered ? {
                                    x: i === 0 ? -75 : i === 2 ? 75 : 0,
                                    y: i === 0 ? -60 : i === 1 ? -100 : i === 2 ? -60 : 0,
                                    rotate: i === 0 ? -15 : i === 2 ? 15 : 0,
                                    scale: 1.3
                                } : {
                                    x: 0,
                                    y: 0
                                }
                            } 
                            key={i} 
                            src={t.toolsArray} 
                            className='w-18 absolute' 
                            style={{
                                top: t.top !== undefined ? `${t.top}px`: undefined,
                                left: t.left !== undefined ? `${t.left}px`: undefined,
                                right: t.right !== undefined ? `${t.right}px`: undefined,
                                width: t.widht !== undefined ? `${t.widht}px` : undefined,
                                zIndex: i === 2 ? 50 : t.index,
                            }}
                            />
                        ))
                    }

                    <div className='bg-[#e3edd9]/40 backdrop-blur-md border border-white/20 rounded-[40px] shadow-md flex items-center justify-center p-6 w-45 h-45 z-50 relative'>
                    <img
                    onMouseEnter={() => setCursorText("My Favourite Tools")} 
                    src={IMAGES.ABOUTTOOLS} className='w-27 h-27'/>
                    </div>
                    </div>
                </div>
            </div>
            {/* Me */}
            <div className='flex flex-col justify-between h-158'>
                <div
                onMouseEnter={() => setCursorText("Click Me!")} 
                className='relative w-85 h-90 md:w-100 md:h-100 max-md:mx-auto rounded-2xl cursor-pointer'
                onClick={handleImageClick}>
                    <img src={IMAGES.ABOUTPAPERCLIP} className='w-20 absolute -top-8 -right-5 z-999'/>
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
                                        stiffness: 180,
                                        damping: 28,
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
                                        stiffness: 120,
                                        damping: 22,
                                        mass: 1,
                                    }}
                                    onAnimationComplete={handleUpComplete}
                                />
                            )}
                </div>
                <div
                onMouseEnter={() => setCursorText("Favorite Music")} 
                className=''>
                    <iframe
                    className='w-[92%] md:w-full max-md:mx-auto' 
                    data-testid="embed-iframe" 
                    style={{borderRadius: '12px'}} 
                    src="https://open.spotify.com/embed/artist/6RTC1abMgBC7Krg6qJQHJh?utm_source=generator&si=56d62079a7b7444c" 
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