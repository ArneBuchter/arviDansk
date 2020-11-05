import React from 'react';
import './Hero.modules.css';
import SiteInfo from '../Site-info/SiteInfo';
import ServiceCard from '../Service-card/ServiceCard';
import Intro from '../Intro/Intro';
import ScrollDown from '../Scroll-down/ScrollDown';

export default () => (
    <div className="relative">
        <div className="hero" id="home">
            <section className="herobox">
                <ServiceCard heading="Arvi Ready" text="Få dig en ny, tidssvarende og Teknisk Seo optimeret hjemmeside fra kun 900 kroner i oprettelse og 300 kroner om måneden." />
                <ServiceCard heading="Eget medie" text="Er du journalist og ønsker du at starte et niche medie med både åben side og betalingsside så ring for mere info." />
            </section>
            <section className="herolinks">
                <a className="herlinks__a">Om os</a>
                <a className="herlinks__a">Produkter</a>
                <a className="herlinks__a">Referencer</a>
            </section>
        </div>
        <SiteInfo href="#about" id="welcome" name="Velkommen" text="Hjemmesider til alle" />
        <a href="#prices">
            <ScrollDown />
        </a>
    </div>
    )