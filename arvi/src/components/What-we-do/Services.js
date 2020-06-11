import React from 'react';
import './Services.modules.css';
import SiteInfo from '../Site-info/SiteInfo';
import ServiceCard from '../Service-card/ServiceCard';

export default () => (
    <section className="relative">  
        <div className="bgimg"></div>
        <div className="Service__wrapper" id="services">
            <ServiceCard heading="Websites" text="Websites span over a big pallete of things, from a small bussiness shopwindow to huge platforms. No task is to small or to big for us, as we can easily scale our taskforce to meet your wishes " />
            <ServiceCard heading="Webshops" text="We have different ways of making you a great webshop. our sites are build from templates and cms systems to plain code from zero. The method of choise depends on your needs. Lets have a chat" />
            <ServiceCard heading="Shopify" text="A great way to get online quick and all the features you can wish for to make an online store, with lost of awesome built in marketing feature" />
            <ServiceCard heading="CMS Systems" text="We prefer using Contentful, but can work with both Wordpress and Drupal. We can work with templates of your choise." />
            <ServiceCard heading="Apps" text="Do you need an app for your company? If you can think it, we can build it. But your app doesn't have to revolutionize the world. A lot of companies make an app to market them selves or sell their products." />
            <ServiceCard heading="Full service" text="We are able to take from zero to 100. You can come in empty handed and walk out fully equiped. We can mannage design, developement, adverticing, support and the list goes on. We can be the only partner you need on the internet." />
        </div>
        <SiteInfo href="#services" id="services" name="What we do" text="We build websites and apps" />
    </section>
    )