import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Contentbox from './components/Contentbox/Contentbox';
import Services from './components/What-we-do/Services';
import Space from './components/space/Space';
import Support from './components/Support/Support';

function App() {
  return (
    <main className="index">
        <Navbar />
        <section className="index__content-wrapper">
           <Hero />
           <Contentbox />
           <Services />
           <Space />
           <Support />

        </section>
    </main>
  );
}

export default App;
