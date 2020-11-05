import React from 'react';
import './Navbar.modules.css'
import NavLink from './Nav-link';

export default () => (
    <nav className="nav">
        <a href="https://arvi.dk" target="blank" className="nav__logo">arvi</a>
        <ul>
            <NavLink title="Om os" href="" />
            <NavLink title="Produkter" href="" />
            <NavLink title="Referencer" href="" />
            <NavLink title="Kontakt" href="#contact" />
        </ul>
    </nav>
)