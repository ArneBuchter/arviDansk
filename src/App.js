import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Contentbox from './components/Contentbox/Contentbox';
import Services from './components/What-we-do/Services';
import Support from './components/Support/Support';
import Marketing from './components/Marketing/Marketing';
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
           <Support />
           <Marketing />
           <Footer />
        </section>
    </main>
  );
}

export default App;
