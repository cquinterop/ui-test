import React from 'react';
import Hero from '../components/Hero';
import SpeakOut from '../components/SpeakOut';
import SubmitName from '../components/SubmitName';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
         <Hero />
         <SpeakOut />
         <SubmitName />
         <Footer />
    </div>
  );
}

export default Home;
