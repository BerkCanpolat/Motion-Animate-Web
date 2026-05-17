import React from 'react'
import Navbar from '../../Components/common/Navbar'
import { IMAGES } from '../../Constants/images.data'

const Hero = () => {
  return (
    <section className='px-5 py-5'>
        <div className='bg-[linear-gradient(180deg,#056b57_0%,#005141_100%)] h-[95vh] border-8 border-[#056b57] rounded-4xl'>

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
                <div className='flex items-center -mb-7.5 z-10'>
                    <img src={IMAGES.HERO13} className='w-45 h-45 object-cover -mr-10' />
                    <img src={IMAGES.HERO14} className='w-45 h-45 object-cover' />
                </div>

                <div>
                    <h1 className='text-7xl font-extrabold text-[#68baa2] text-center uppercase font-stretch-110% leading-22'>welcome to <br /> viha's portfolio</h1>
                </div>

                <div className='mt-5'>
                    <button className='bg-[rgb(240,253,250)] text-[rgb(0,150,137)] px-6 py-2.5 rounded-full capitalize'>view projects</button>
                </div>
            </div>

            <div className=''>
                <img src={IMAGES.HERO1} className='absolute -top-20 -left-20 w-100 h-100 -rotate-45 object-cover' />
                <img src={IMAGES.HERO2} className='absolute top-134 -left-9 w-50 h-50 object-cover' />
                <img src={IMAGES.HERO3} className='absolute -bottom-10 -right-13 w-50 h-50 object-cover' />
                <img src={IMAGES.HERO4} className='absolute bottom-25 right-25 w-50 h-50 object-cover' />
                <img src={IMAGES.HERO5} className='absolute -top-25 right-40 -rotate-25 w-80 h-80 object-cover' />
                <img src={IMAGES.HERO6} className='absolute -bottom-10 -left-10 -rotate-35 w-55 h-55 object-cover' />
                <img src={IMAGES.HERO7} className='absolute top-80 -right-16 -rotate-135 w-60 h-60 object-cover' />
                <img src={IMAGES.HERO8} className='absolute bottom-15 left-50 w-75 rotate-10 h-25 object-cover' />
                <img src={IMAGES.HERO9} className='absolute top-45 -rotate-50 left-65 w-50 h-50 object-cover' />
                <img src={IMAGES.HERO10} className='absolute top-105 -rotate-167 left-25 w-75 h-75 object-cover' />
                <img src={IMAGES.HERO11} className='absolute -bottom-35 right-70 -rotate-10 w-60 h-90 object-cover' />
                <img src={IMAGES.HERO12} className='absolute top-8 -right-10 w-48 h-50 object-cover' />
            </div>

            </div>



        </div>
    </section>
  )
}

export default Hero