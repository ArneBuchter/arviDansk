import React from 'react';
import './Navbar.modules.css'
import NavLink from './Nav-link';
import { Link } from 'react-router-dom';

function Navbar() {

    return(
        <nav className="nav">
            <a href="https://arvi.dk" target="blank" className="nav__logo">arvi</a>
            <ul className="nav__list">
                <Link to="/" className="nav__link"><NavLink title="Hjem" /></Link>
                <Link to="/About" className="nav__link"><NavLink title="Om os" /></Link>
                <Link to="/Products" className="nav__link"><NavLink title="Produkter" /></Link>
                <Link to="/Contact" className="nav__link"><NavLink title="Kontakt" /></Link>   
            </ul>
        </nav>
    );
}

export default Navbar;