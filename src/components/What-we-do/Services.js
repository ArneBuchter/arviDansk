import React from 'react';
import './Services.modules.css';
import SiteInfo from '../Site-info/SiteInfo';
import ServiceCard from '../Service-card/ServiceCard';

export default () => (
    <section className="relative" id="services">  
        <div className="bgimg-service">
            <div className="Service__wrapper">
                <ServiceCard heading="Websider" text="Vi tilbyder både hjemmesider vha templates, templates med abonnement og naturligvis bygget fra bunden." />
                <ServiceCard heading="Webshops" text="Webshops er for mange forretninger hele grundlaget for at eksistere. Derfor vil vi gerne give dig en stærk løsning, der vinder over konkurrenterne." />
                <ServiceCard heading="Shopify" text="Shopify er et stærkt værktøj, der både kan stå alene som shop og bruges sammen med andre services som f.eks. Amazon." />
                <ServiceCard heading="CMS" text="CMS er det sted du skriver dit indhold. Vi bruger både Contentful og Cockpit til  denne opgave. Vi prøver at komme væk fra wordpress, som er ved at være ret forældet." />
                <ServiceCard heading="Apps" text="Du kan godt få en app gennem Arvi. Vi har størst erfaring med at lave PWAer, som er en app der ikke fylder så meget og kan downloades direkte fra din hjemmeside." />
                <ServiceCard heading="Full service" text="Da vi har en del samarbejdspartnere, er vi i stand til at tage dig fra 0% til 100% Det vil sige at du bare fortæller os hvad du ønsker og så klarer vi resten." />
            </div>
        </div>
        <SiteInfo href="#services" id="services" name="Om os" text="Vi elsker at programmere" />
    </section>
    )