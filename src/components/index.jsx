import React from 'react'
import About from './about/About'
import Consulting from './Consulting/Consulting';
import Header from './header'
import Industries from './industries/Industries';
import Services from './services/Services';
import Skills from './skills/Skills';
import Testimonials from './testimonials/Testimonials';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

const Main = () => {
  return (
    <>
    <Navbar/>
      <Header />
      <About />
      <Skills />
      <Consulting />
      <Industries/>
      <Services/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Main
