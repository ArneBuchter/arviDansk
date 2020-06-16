import React from 'react';

export default function NavLink({ href, logo,  alt }) {
    return (
        <a href={href} className="header__link"><img className="header__img" src={logo} alt={alt} /></a>
    )
}