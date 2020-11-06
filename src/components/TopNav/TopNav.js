import React from 'react';
import './Topnav.css';



function TopNav() {
    return (
        <nav className="topnav">
            <ul className="topnav__ul">
                <li className="topnav__li"><a href="#arviready" className="topnav__a">Arvi Ready</a></li>
                <li className="topnav__li"><a href="#egetmedie" className="topnav__a">Eget Medie</a></li>
                <li className="topnav__li"><a href="#templates" className="topnav__a">Template</a></li>
                <li className="topnav__li"><a href="#tilføjelser" className="topnav__a">Tilføjelser</a></li>
            </ul>
        </nav>
    );
  }
  
  export default TopNav;