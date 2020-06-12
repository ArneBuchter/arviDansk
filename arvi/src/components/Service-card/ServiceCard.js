import React from 'react';
import './ServiceCard.modules.css';

export default function NavLink({ heading, text }) {
    return (
        <section className="services">
            <h2 className="services__heading">{heading}</h2>
            <p className="services__text">{text}</p>
        </section>
    )
}