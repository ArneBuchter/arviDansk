import React from 'react';

export default function NavLink({ title, href, target }) {
    return (
        <li className="nav__item"><a href={href} target={target} className="nav__link">{title}</a></li>
    )
}

