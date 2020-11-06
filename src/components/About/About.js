import React from 'react';
import './About.css';
import SiteInfo from '../Site-info/SiteInfo';
import MarketingDetails from '../../components/Marketing/MarketingDetails';

function About() {
    return (
      <section className="About__content-wrapper">
        <div className="About__siteinfo relative">
            <SiteInfo id="OmOs" name="Om os" text="Vi elsker at skabe" />  
        </div>            
            <MarketingDetails headline="Hvorfor" text="Arvi Aps er startet pga. interesse. Ikke kun af interesse for at programmere, men også pga. interesse for at skabe forretning. 
                Med Arvi ApS har vi skabt vores egen forretning, interessen for at skabe stopper ikke her. Vores forretning er skabt for at være en forretning, der skaber forretning.
                Uanset om du har en frisør, butik, fabrik, er jounalist eller noget helt femte, har vi interesse for at hjælpe dig, med at skabe din forretning.
                Vi håber på at både kunne hjælpe dig nu og og igen senere, når du skal have optimeret vores tidligere arbejde, for igen at skabe momentum." />
      </section>
    );
  }
  
  export default About;