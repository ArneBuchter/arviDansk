import React from 'react';
import './SiteInfo.modules.css';

export default function Hero({ href, id, name, text }) {
    return (
        <a href={href} id={id} className="description__link absolute">
            <div className="description">
                <h2 className="description__heading">{name}</h2>
                <p className="description__text">{text}</p>
            </div>
        </a>
    )
}