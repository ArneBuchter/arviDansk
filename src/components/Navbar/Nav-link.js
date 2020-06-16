import React from 'react';

export default function NavLink({ title, href }) {
    return (
        <li className="nav__item"><a href={href} className="nav__link">{title}</a></li>
    )
}

