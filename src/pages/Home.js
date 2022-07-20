import React from 'react';
import Navbar from '../components/header/Navbar.jsx';
import Hero from '../components/header/Hero';
import Footer from '../components/footer/Footer';
import About from '../components/about/About';
import GlassCards from '../components/glass-cards/GlassCards'
import Benefits from '../components/benefits/Benefits'
import Info from '../components/info/Info';
import Team from '../components/team/Team';


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Team />
        <GlassCards />
        <Benefits />
        <Info />
        <Footer />
    </div>
  )
}

export default Home;