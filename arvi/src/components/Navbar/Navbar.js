import React from 'react';
import './Navbar.modules.css'

export default () => (
    <nav className="nav">
        <a href="https://arvi.dk" target="blank" className="nav__logo">arvi</a>
        <ul>
            <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
            <li className="nav__item"><a href="#portfolio" className="nav__link">Portfolio</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">Contact</a></li>
        </ul>
    </nav>
)