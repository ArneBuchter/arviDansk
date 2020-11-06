import React from 'react';
import './Navbar.modules.css'
import NavLink from './Nav-link';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="nav">
            <a href="https://arvi.dk" target="blank" className="nav__logo">arvi</a>
            <ul>
                <Link to="/About" className="nav__link"><NavLink title="Om os" /></Link>
                <Link to="/Products" className="nav__link"><NavLink title="Produkter" /></Link>
                <Link to="/References" className="nav__link"><NavLink title="Referencer" /></Link>
                <NavLink title="Kontakt" href="#contact" />   
            </ul>
        </nav>
    );
}

export default Navbar;