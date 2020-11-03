import React from 'react';
import './Contentbox.modules.css';
import SiteInfo from '../Site-info/SiteInfo';
import Bullitpoint from '../Bullitpoint/Bullitpoint';
import hourglas from './hourglas.svg';
import templates from './templates.png';
import support from './support.png';

export default () => (
    <section className="contentbox">
        <SiteInfo href="#prices" id="prices" name="Priser" text="Få et godt tilbud" />
        <section className="content__wrapper">
            <Bullitpoint heading="Template" text="Vi tilbyder både produkter med abonnement og engangsbeløb. Derudover kan vi naturligvis også skræddersy din hjemmeside efter dit eget ønske." img={hourglas} imgAlt={hourglas} />
            <Bullitpoint heading="Arvi Ready" text="Få dig en ny, tidssvarende og Teknisk Seo optimeret hjemmeside fra kun 900 kroner i oprettelese og 300 kroner om måneden." img={templates} imgAlt={templates} />
            <Bullitpoint heading="Niche Medie" text="Er du journalist og ønsker du at starte et niche medie med både åben side og betalingsside så læs mere her." img={support} imgAlt={support} />
        </section>
    </section>
)