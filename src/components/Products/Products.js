import React from 'react';
import './Products.css';
import TopNav from '../TopNav/TopNav';
import SiteInfo from '../Site-info/SiteInfo';
import MarketingDetails from '../../components/Marketing/MarketingDetails';



function Products() {
    return (
      <section className="index__content-wrapper">
          <TopNav />
          <div className="relative products__siteinfo">
            <SiteInfo id="Products" name="Produkter" text="Hjemmesider til alle" />  
          </div>
            <div id="arviready">
                <MarketingDetails headline="Arvi Ready" text="Ved at vælge en Arvi Ready løsning betaler du fra 900 kroner i oprettelse af en hjemmeside og efterfølgende
                300 kroner om måneden i minimum 36 måneder. Denne løsning inkluderer hosting af selve siden, et CMS der gør det muligt at rette i indholdet selv. Det er en kodet side, 
                hvilket giver dig som kunde ekstra gode forhold på google, da siden er hurtigere end de fleste" />
            </div>
            <div id="egetmedie">
                <MarketingDetails headline="Eget Medie" text="Dette er et produkt under udvikling, men der gælder samme system som med arvi ready.
                Det vil sige at man kan få sit helt eget medie, fra 1200 kroner i oprettelse og 350 kroner om måneden i minimum 36 måneder. Prisforskellen skyldes 
                de særlige tilføjelser, der gør det muligt at have en lukket nyhedskanal for betalende læsere." />
            </div>
            <div id="templates">
                <MarketingDetails headline="Templates" text="Dette er de templates/skabeloner man kan vælge imellem. De kan både bruges til produkterne
                Arvi Ready og Eget Medie. De kan desuden også købes ved en engangsbetaling." />
            </div>
            <div id="tilføjelser">
                <MarketingDetails headline="Tilføjelser" text="Dette er de tilføjeser man kan få på sin Arvi hjemmeside. Priserne der ses er et tillæg, alt efter hvordan
                man vælger at købe sin hjemmeside" />
            </div>
      </section>
    );
  }
  
  export default Products;