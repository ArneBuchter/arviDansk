import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import References from './components/References/References';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 
function App() {
  return (
    <Router>
      <main className="index">
          <Header />
          <Navbar />
          <section className="index__content-wrapper">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Products" component={Products} />
              <Route path="/References" component={References} />
            </Switch>
            <Footer />
          </section>
      </main>
    </Router>
  );
}

export default App;
