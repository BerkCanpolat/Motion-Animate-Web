import React, { useEffect, useState } from 'react'
import { ABOUTBOARDARRAY, ABOUTFREEZERARRAY, ABOUTMEARRAY, IMAGES, TOOLSARRAY } from '../../Constants/images.data'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react';
import CustomCursor from '../../Components/ui/CustomCursor';
import ScrollColorText from '../../Components/motion/CustomScrollText';

const Aboutme = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIdx, setNextIdx] = useState(null);
    const [phase, setPhase] = useState('idle');

    const [isHovered,setIsHovered] = useState(false);
    const [isHoveredCard,setIsHoveredCard] = useState(false);
    const [showCursor, setShowCursor] = useState(false);
    const [cursorText, setCursorText] = useState("Explore");

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
  
  const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

  useEffect(() => {
  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

const boxVariants = {
  idle: { rotateX: 0, y: 0, scale: 1 },
  hover: {
    rotateX: -30,
    y: -0,
    scale: 1.0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};



  return (
    <section 
    onMouseEnter={() => {
            setShowCursor(true)
        }}
        onMouseLeave={() => {
            setShowCursor(false)
        }}
    className='md:mt-100 cursor-none'>

        <CustomCursor showCursor={showCursor} cursorText={cursorText} mouseX={mouseX} mouseY={mouseY}/>

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
                        <motion.img 
                        dragElastic={1}
                        dragConstraints={{bottom:0,left:0,right:0,top:0}}
                        drag
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        key={i} src={item.aboutFreezer} className={`w-15 absolute cursor-none object-cover] ${item.className}`} />
                    ))
                }
            </div>
            <div className='flex flex-col gap-11 max-md:hidden'>
            {/* Board */}
<div
onMouseEnter={() => setIsHoveredCard(true)} 
    onMouseLeave={() => setIsHoveredCard(false)}  
style={{ perspective: 700 }} className="relative z-30">

  <motion.div
    initial="idle"
    whileHover="hover"
    variants={boxVariants}
    onMouseEnter={() => setCursorText("My top 3 board games")}
    className="w-105.5 h-71 relative"   
    style={{ transformOrigin: "bottom center" }}
  >
    <div
    className="flex justify-center items-center absolute -top-13 w-full z-0">
      {ABOUTBOARDARRAY.map((b, i) => (
        <motion.img
        animate={
                                isHoveredCard ? {
                                    x: i === 0 ? -50 : i === 2 ? 50 : 0,
                                    y: i === 0 ? -60 : i === 1 ? -75 : i === 2 ? -60 : 0,
                                    width: b.w2,
                                    scale: 1.1
                                } : {
                                    x: 0,
                                    y: 0
                                }
                            } 
          key={i}
          src={b.aboutboard}
          className="w-40 object-center rounded-2xl border-6 border-white shadow-2xl shadow-gray-500 -mx-10"
          style={{
            width: b.w,
            rotate: b.rotate,
            transformOrigin: "bottom center",
            zIndex: i === 0 ? 1 : i === 1 ? 2 : i === 2 ? 1 : 0
          }}
        />
      ))}
    </div>

    <div className="absolute inset-0 bg-[#c9934c] rounded-2xl z-10" />

    <div className="filter drop-shadow-[0_8px_6px_rgba(0,0,0,0.35)] relative z-20">
      <div
        className="w-120 h-19 rounded-bl-2xl rounded-br-2xl absolute top-0 -left-7.5 shadow-lg bg-[#a37233]"
        style={{ clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)' }}
      />
    </div>

    <div className="absolute top-[40%] -left-2 w-[104%] h-14 bg-[#76d795] -rotate-2 flex items-center justify-center shadow-lg border-b-4 border-[#5cb377] z-20">
      <span className="text-[#13542a] font-bold text-2xl tracking-wide">
        Berk's Board Games
      </span>
    </div>
  </motion.div>
</div>

                <div className='flex items-end justify-between gap-5 w-full'>
                    <motion.img
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
                                zIndex: i === 2 ? 50 : i === 0 ? 50 : t.index,
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
                        className='absolute inset-0 w-full h-full object-cover rounded-2xl cursor-none'
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

        <ScrollColorText />

        <div className='h-screen'/>
    </section>
  )
}

export default Aboutme