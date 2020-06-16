import React from 'react';
import './Contentbox.modules.css';
import SiteInfo from '../Site-info/SiteInfo';
import Bullitpoint from '../Bullitpoint/Bullitpoint';
import hourglas from './hourglas.svg';
import templates from './templates.png';
import support from './support.png';

export default () => (
    <section className="contentbox">
        <SiteInfo href="#prices" id="prices" name="Prices" text="Pricing solutions" />
        <section className="content__wrapper">
            <Bullitpoint heading="BY THE HOUR" text="I charge 600 DKK or 82 EUR This is the price I use to calculate my offers for your individual request" img={hourglas} imgAlt={hourglas} />
            <Bullitpoint heading="TEMPLATES" text="I have a nice catalog with different templates to choose from call me to know more" img={templates} imgAlt={templates} />
            <Bullitpoint heading="SUPPORT" text="When it comes to support, I have different standard packages to fullfill your needs call me to se what fits you" img={support} imgAlt={support} />
        </section>
    </section>
)