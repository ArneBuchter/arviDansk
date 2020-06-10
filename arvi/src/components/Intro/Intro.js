import React from 'react';
import './Intro.modules.css';
import ScrollDown from '../Scroll-down/ScrollDown';

export default function Hero({ src, alt, firsname, middlename, sirname, title, href }) {
    return (
        <div className="index-hero_profileimg-wrapper">
            <img  className="index-hero_profileimg" src={src} alt={alt} srcset="" />
    <h1 className="index-hero_heading">{firsname} <span className="index-hero_color">{middlename}</span> {sirname}</h1>
            <p className="index-hero_titel">{title}</p>
            <a href={href}>            
             <ScrollDown />           
            </a>
        </div>
    )
}