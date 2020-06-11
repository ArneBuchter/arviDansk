import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Contentbox from './components/Contentbox/Contentbox';

function App() {
  return (
    <main className="index">
        <Navbar />
        <section className="index__content-wrapper">
           <Hero />
           <Contentbox />

        </section>
    </main>
  );
}

export default App;
