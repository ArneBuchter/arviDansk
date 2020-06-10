import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <main className="index">
        <Navbar />
        <section className="index__content-wrapper">
           <Hero />
        </section>
    </main>
  );
}

export default App;
