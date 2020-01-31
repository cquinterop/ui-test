import React from 'react';
import Header from '../components/ui/Header';
import MainRuling from '../components/ui/MainRuling';
import Closing from '../components/ui/Closing';
import pope from '../assets/img/hero-pope.jpg';

function Hero() {
    return (
        <div className="d-flex flex-column justify-content-between hero" style={{ backgroundImage: `url(${pope})` }}>
            <Header />
            <MainRuling />
            <Closing />
        </div>
    );
};

export default Hero;
