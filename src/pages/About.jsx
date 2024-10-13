import React from 'react';
import Navbar from '../components/Home/Navbar';
import Banner from '../components/About/Banner';
import AboutMe from '../components/About/AboutMe';
import Education from '../components/About/Education';
import Contact from '../components/About/Contact';
import Footer from '../components/About/Footer';
import Navebar from '../components/About/Navebar';

const About = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <Education />
      <Contact />
    </>
  );
};

export default About;
