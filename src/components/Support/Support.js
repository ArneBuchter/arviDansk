import React from 'react';
import './support.modules.css';
import SiteInfo from '../Site-info/SiteInfo';

export default () => (
    <section className="support">
        <h2 className="support__heading">Support</h2>
        <p className="support__text">
            Support kan være lige det du har behov for. Med vores netværk af samarbejdspartnere, er der ikke en opgave vi ikke kan løse.
            Vi har både standard løsninger og løsninger der kan strikkes sammen efter dit behov. Med andre ord vil vi gerne være din online partner, 
            så I kan koncentrere jer om det I er bedst til.
        </p>
        <SiteInfo href="#support" id="support" name="Support" text="Lets do your www" />
    </section>
)