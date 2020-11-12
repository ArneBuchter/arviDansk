import React, { useEffect } from 'react';
import './Header.modules.css';
import HeaderLink from './Header-link';
import Navbar from '../../components/Navbar/Navbar';

function Header() {
    useEffect(() => {
        function OpenCloseMenu() {
            if(document.querySelector('#menu').innerText === 'Menu'){
                document.querySelector('.nav').className = 'open'
                document.querySelector('#menu').innerHTML = 'Luk Menu'
            }else{
                document.querySelector('.open').className = 'nav'
                document.querySelector('#menu').innerHTML = 'Menu'
            }
        }
    
        document.querySelector('#menu').addEventListener('click', OpenCloseMenu);

        function closeMenu(e){
            if(e.target.classList.contains('nav__link')){
                document.querySelector('.open').className = 'nav'
                document.querySelector('#menu').innerHTML = 'Menu'
            }
        }

        document.querySelector('.nav__list').addEventListener('click', closeMenu);
    }, [])

    return(
        <header className="header">
            <HeaderLink href="https://arvi.dk" text="arvi"  alt="" />
            <HeaderLink id="menu" text="Menu" />
            <Navbar />
        </header>
    )
}

export default Header;
