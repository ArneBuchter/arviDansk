import React from 'react';
import Hero from '../../components/Hero/Hero';
import Contentbox from '../../components/Contentbox/Contentbox';
import Services from '../../components/What-we-do/Services';
import Support from '../../components/Support/Support';
import Marketing from '../../components/Marketing/Marketing';

function Home() {
  return (
    <section className="index__content-wrapper">
        <Hero />
        <Contentbox />
        <Services />
        <Support />
        <Marketing/>
    </section>
  );
}

export default Home;