import React from 'react';
import './Bullitpoint.modules.css';

export default function NavLink({ heading, text, href, img, imgAlt, src, alt }) {
    return (
    <section className="bullit">
        <a href={href} className="bullit__link">
            <div className="bullit__wrapper">
                <div className="bullit__cirkel">
                    <img id="bullit-img" className="bullit__img" src={img} alt={imgAlt} />
                </div>
                <h2 className="bullit__heading" id="bullit__heading">{heading}</h2>
                <div className="bullit__textwrap">
                    <p id="bullit-text" className="bullit__text">{text}</p>
                    <img className="bullit__arrow" src={src} alt={alt} />
                </div>
            </div>
        </a>
    </section>
    )
}