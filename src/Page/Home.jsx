import React from 'react'
import Navbar from '../Components/common/Navbar'
import Hero from '../Sections/Hero/Hero'
import TimeRoundel from '../Sections/TimeRoundel/TimeRoundel'

const Home = () => {
  return (
    <section className=''>
      <Navbar />
        <Hero />
        <TimeRoundel />
    </section>
  )
}

export default Home