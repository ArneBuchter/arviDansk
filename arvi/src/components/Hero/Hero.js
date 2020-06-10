import React from 'react';
import './Hero.modules.css';
import SiteInfo from '../Site-info/SiteInfo';
import Intro from '../Intro/Intro';
import Image from './arne.jpg';

export default () => (
    <div className="relative">
        <div className="index-hero" id="home">
            <Intro src={Image} alt="Arne Emil Buchter" firsname="Arne" middlename="Emil" sirname="Buchter" title="Need a new website" href="#about" />
        </div>
        <SiteInfo href="#about" id="welcome" name="Welcome" text="Need a new website?" />
    </div>
    )