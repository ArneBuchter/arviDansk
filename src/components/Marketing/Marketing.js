import React from 'react';
import './Marketing.modules.css';
import MarketingDetails from './MarketingDetails'
import SiteInfo from '../Site-info/SiteInfo';

function Marketing(){ 
    return(
    <section className="relative" id="marketing">  
        <div className="marketing__bgimg">
            <MarketingDetails  headline="Spørg om hvad du tjener" text="Online tilstedeværelse er vigtigt. Kan du huske sidste gang, du åbnede en avis for at finde en tømrer eller en vvs'er?
                    Nej vel! Idag søger du efter alt online og det er ikke længere ny viden at alle andre gør det samme.
                    Idag er internettet stedet hvor virksomheder finder nye partnere, kunder og andre alliancer. 
                    Vores hovedkompetence er at bygge hjemmesider og webaps og vi vil med det samme gøre det klart at det ikke er os der laver din online markedsføring,
                    men en af vores samarbejdspartnere. Dog sørger vi altid for at vores hjemmesider, på forhånd er toptunet til SEO. Det betyder at du som kunde
                    har et forspring i forhold til dine konkurrenter." />
        </div>
        <SiteInfo href="#marketing" id="marketing" name="Marketing" text="Spørg ikke hvad det koster" />
    </section>
    )
}

export default Marketing;