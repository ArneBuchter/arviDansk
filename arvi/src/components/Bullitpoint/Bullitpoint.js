import React from 'react';
import './Bullitpoint.modules.css';

export default function NavLink({ heading, text, href, img, imgAlt, src, alt }) {
    return (
    <section className="bullit">
        <a href={href} className="bullit__link">
            <div className="bullit__wrapper">
                <div className="bullit__cirkel">
                    <img id="bullit-img" className="bullit__img" src={img} alt={imgAlt} srcset="" />
                </div>
                <h2 className="bullit__heading" id="bullit__heading">{heading}</h2>
                <div className="bullit__textwrap">
                    <p id="bullit-text" class="bullit__text">{text}</p>
                    <img class="bullit__arrow" src={src} alt={alt} srcset="" />
                </div>
            </div>
        </a>
    </section>
    )
}