import React from 'react';
import './Header.modules.css';
import HeaderLink from './Header-link';
import Home from './home.svg';
import Prices from './price.svg';
import Services from './services.svg';
import Support from './support.svg';
import Marketing from './marketing.svg';
import Contact from './contact.svg'

export default () => (
    <header className="header">
        <HeaderLink href="https://arvi.dk" logo={Home}  alt="" />
        <HeaderLink href="#prices" logo={Prices}  alt="" />
        <HeaderLink href="#services" logo={Services}  alt="" />
        <HeaderLink href="#support" logo={Support}  alt="" />
        <HeaderLink href="#marketing" logo={Marketing}  alt="" />
        <HeaderLink href="#contact" logo={Contact}  alt="" />
    </header>
)