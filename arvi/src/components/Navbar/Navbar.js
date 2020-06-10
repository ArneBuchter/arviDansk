import React from 'react';
import './Navbar.modules.css'
import NavLink from './Nav-link';

export default () => (
    <nav className="nav">
        <a href="https://arvi.dk" target="blank" className="nav__logo">arvi</a>
        <ul>
            <NavLink title="About" href="#about" />
            <NavLink title="Prices" href="#prices" />
            <NavLink title="My work" href="#mywork" />
            <NavLink title="Support" href="#support" />
            <NavLink title="Marketing" href="#marketing" />
            <NavLink title="Facebook" href="#facebook" />
            <NavLink title="Contact" href="#contact" />
        </ul>
    </nav>
)