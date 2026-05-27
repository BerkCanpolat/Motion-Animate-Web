import React from 'react'
import FeaturedParallaxImages from '../../Components/motion/FeaturedParallaxImages'
import { parallaxImageData } from '../../Constants/ParallaxImageData'

const Featured = ({ imageYParallax }) => {


  return (
    <section className='h-[350dvh]'>
        <div className='h-full'>
        <h1 className='text-black text-2xl md:text-5xl font-extrabold mt-90 z-50 [writing-mode:vertical-rl] [text-orientation:upright] uppercase tracking-[-0.1rem] md:tracking-[-0.9rem]'>featured projects</h1>
        </div>
        {
            parallaxImageData.map(({imgPath,title,subTitle, className}, i) => (
                <FeaturedParallaxImages imgPath={imgPath} title={title} subTitle={subTitle} className={className} y={imageYParallax[i]} key={imgPath+i}/>
            ))
        }
    </section>
  )
}

export default Featured