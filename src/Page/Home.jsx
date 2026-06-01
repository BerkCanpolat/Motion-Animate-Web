import React from 'react'
import Navbar from '../Components/common/Navbar'
import Hero from '../Sections/Hero/Hero'
import TimeRoundel from '../Sections/TimeRoundel/TimeRoundel'
import Logofolio from '../Sections/Logofolio/Logofolio'

const Home = () => {
  return (
    <section className=''>
      <Navbar />
        <Hero />
        <TimeRoundel />
        <Logofolio />
    </section>
  )
}

export default Home