import React from 'react'
import Intro from '../components/HomeComponents/Intro'
import Services from '../components/HomeComponents/Services'
import Features from '../components/HomeComponents/Features'
import Footer from '../components/HomeComponents/Footer'

const Home = () => {
  return (
    <div>
        <Intro/>
        <Services/>
        <Features/>
        <Footer/>
    </div>
  )
}

export default Home