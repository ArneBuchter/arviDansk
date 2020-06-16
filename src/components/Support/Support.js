import React from 'react';
import './support.modules.css';
import SiteInfo from '../Site-info/SiteInfo';

export default () => (
    <section className="support">
        <h2 className="support__heading">Support</h2>
        <p className="support__text">
            Support can be whatever you need. we have different support models to suit your needs. 
            We can mannage your Office 365, your hosting, your backup, make sure your site is always online, track your visitors,
            your marketing campaigns, if you have other wishes we or our partners can handle your request. 
            In other words: Lets take care of your www activities, and give you more time ot take care of what you do best. 
        </p>
        <SiteInfo href="#support" id="support" name="Support" text="Lets do your www" />
    </section>
)