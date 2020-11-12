import React from 'react';
import './Contact.css'
import SiteInfo from '../Site-info/SiteInfo';


function Home() {
  return (
    <section className="index__content-wrapper">
        <div className="relative Contact__siteinfo">
            <SiteInfo id="Contact" name="Kontakt" text="Lad os snakke sammen" />  
        </div>
        <section className="Contact__address-box">
            <div>
                <h2 className="footer__name">Arvi ApS</h2>
                <address className="footer__address">Agervej 25</address>
                <address className="zip-city">4400 Kalundborg</address>
            </div>
        </section>
        <section className="Contact__contact">
            <div>
                <a href="mailto:arne@arvi.dk" className="footer__email">arne@arvi.dk</a>
                <p className="footer__phone">(+45) 27 14 30 40</p>
            </div>
        </section>
    </section>
  );
}

export default Home;