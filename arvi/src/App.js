import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Contentbox from './components/Contentbox/Contentbox';
import Services from './components/What-we-do/Services';
import Space from './components/space/Space';
import Support from './components/Support/Support';
import Marketing from './components/Marketing/Marketing';
import Spacetwo from './components/space/Spacetwo';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main className="index">
        <Header />
        <Navbar />
        <section className="index__content-wrapper">
           <Hero />
           <Contentbox />
           <Services />
           <Space />
           <Support />
           <Marketing />
           <Spacetwo />
           <Footer />
        </section>
    </main>
  );
}

export default App;
