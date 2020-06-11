import React from 'react';
import './Contentbox.modules.css';
import SiteInfo from '../Site-info/SiteInfo';
import Bullitpoint from '../Bullitpoint/Bullitpoint';
import hourglas from './hourglas.svg';

export default () => (
    <section className="contentbox">
        <SiteInfo href="#prices" id="prices" name="Prices" text="Pricing solutions" />
        <section className="content__wrapper">
            <Bullitpoint heading="BY THE HOUR" text="I charge 600 DKK or 82 EUR This is the price I use to calculate my offers for your individual request" img={hourglas} imgAlt={hourglas} />
            <Bullitpoint heading="TEMPLATES" text="I charge 600 DKK or 82 EUR This is the price I use to calculate my offers for your individual request" img={hourglas} imgAlt={hourglas} />
            <Bullitpoint heading="SUPPORT" text="I charge 600 DKK or 82 EUR This is the price I use to calculate my offers for your individual request" img={hourglas} imgAlt={hourglas} />
        </section>
    </section>
)