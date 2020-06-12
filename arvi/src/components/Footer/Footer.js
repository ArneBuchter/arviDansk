import React from 'react';
import './Footer.modules.css';

export default () => (
    <footer className="footer" id="contact">
        <section className="footer__address-box">
            <h2 className="footer__name">arvi</h2>
            <address className="footer__address">Agervej 25</address>
            <address className="zip-city">4400 Kalundborg</address>
        </section>
        <section className="footer__contact">
            <a href="mailto:arne@arvi.dk" className="footer__email">E-mail: arne@arvi.dk</a>
            <p className="footer__phone">tel: (+45) 27 14 30 40</p>
        </section>
        <section className="footer__copy">
            <p>copyright &copy; 2020 Arne Emil Buchter</p>
        </section>
    </footer>
)