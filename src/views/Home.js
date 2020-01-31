import React from 'react';
import Hero from '../components/Hero';
import SpeakOut from '../components/SpeakOut';
import Votes from '../components/Votes';
import SubmitName from '../components/SubmitName';
import Footer from '../components/Footer';

function Home() {
  
  return (
    <>
      <Hero />
      <SpeakOut />
      <Votes />
      <SubmitName />
      <Footer />
    </>
  );
};

export default Home;
