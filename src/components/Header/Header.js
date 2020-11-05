import React, { useEffect } from 'react';
import './Header.modules.css';
import HeaderLink from './Header-link';
import Navbar from '../../components/Navbar/Navbar';

export default () => (
    useEffect(() => {
        function OpenCloseMenu() {
            if(document.querySelector('#menu').innerText == 'Menu'){
                document.querySelector('.nav').className = 'open'
                document.querySelector('#menu').innerHTML = 'Luk Menu'
            }else{
                document.querySelector('.open').className = 'nav'
                document.querySelector('#menu').innerHTML = 'Menu'
            }
        }
    
        document.querySelector('#menu').addEventListener('click', OpenCloseMenu);
      }, []),

    <header className="header">
        <HeaderLink href="https://arvi.dk" text="arvi"  alt="" />
        <HeaderLink id="menu" text="Menu" />
        <Navbar />
    </header>
)