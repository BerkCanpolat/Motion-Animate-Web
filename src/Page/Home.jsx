import React from 'react'
import Navbar from '../Components/common/Navbar'
import Hero from '../Sections/Hero/Hero'
import TimeRoundel from '../Sections/TimeRoundel/TimeRoundel'
import Logofolio from '../Sections/Logofolio/Logofolio'
import Aboutme from '../Sections/AboutMe/Aboutme'

const Home = () => {
  return (
    <section className=''>
      <Navbar />
        <Hero />
        <TimeRoundel />
        <Logofolio />
        <Aboutme />
    </section>
  )
}

export default Home