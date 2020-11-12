import React from 'react';
import './About.css';
import SiteInfo from '../Site-info/SiteInfo';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import References from '../../components/References/References';


function About() {
    return (
      <section className="About__content-wrapper">
        <div className="About__siteinfo relative">
            <SiteInfo id="OmOs" name="Om os" text="Vi elsker at skabe" />  
        </div>            
            <SingleProduct headline="Hvorfor" text="Arvi Aps er startet pga. interesse. Ikke kun af interesse for at programmere, men også pga. interesse for at skabe forretning. 
                Med Arvi ApS har vi skabt vores egen forretning, interessen for at skabe stopper ikke her. Vores forretning er skabt for at være en forretning, der skaber forretning.
                Uanset om du har en frisør, butik, fabrik, er jounalist eller noget helt femte, har vi interesse for at hjælpe dig, med at skabe din forretning.
                Vi håber på at både kunne hjælpe dig nu og og igen senere, når du skal have optimeret vores tidligere arbejde, for igen at skabe momentum." />
      
            <SingleProduct headline="Hvem er vi" text="Arvi Aps blev startet den 15/11 2020 og er derfor et ret nyt selskab. Det er ejet af Arne Emil Buchter og Vibeke Buchter.
            Selskabet bliver til dagligt drevet af Arne Emil Buchter." />

            <References />
      </section>
    );
  }
  
  export default About;