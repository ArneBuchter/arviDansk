import React from 'react';

export default function NavLink({ href, logo,  alt, id, text }) {
    return (
        <a href={href} id={id} className="header__link"><img className="header__img" src={logo} alt={alt} />{text}</a>
    )
}