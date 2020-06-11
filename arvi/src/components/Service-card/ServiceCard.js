import React from 'react';
import './ServiceCard.modules.css';

export default function NavLink({ heading, text }) {
    return (
        <section class="services">
            <h2 class="services__heading">{heading}</h2>
            <p class="services__text">{text}</p>
        </section>
    )
}