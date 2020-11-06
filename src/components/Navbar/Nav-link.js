import React from 'react';

export default function NavLink({ title }) {
    return (
        <li className="nav__item"><p className="nav__link">{title}</p></li>
    )
}

