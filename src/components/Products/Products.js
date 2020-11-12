import React from 'react';
import './Products.css';
import SiteInfo from '../Site-info/SiteInfo';
import SingleProduct from '../../components/SingleProduct/SingleProduct';

function Products() {
    return (
      <section className="index__content-wrapper">
          <div className="relative products__siteinfo">
            <SiteInfo id="Products" name="Produkter" text="Hjemmesider til alle" />  
          </div>
                <SingleProduct id="arviready" headline="Arvi Ready" text="Ved at vælge en Arvi Ready løsning betaler du fra 900 kroner i oprettelse af en hjemmeside og efterfølgende
                300 kroner om måneden i minimum 36 måneder. Denne løsning inkluderer hosting af selve siden, et lokalt CMS der gør det muligt at rette i indholdet selv. Det er en kodet side, 
                hvilket giver dig som kunde ekstra gode forhold på google, da siden er hurtigere end de fleste">
                </SingleProduct>

                <SingleProduct id="Shopify" headline="Shopify" text="Webshop er for mange, det der får hele forretningen til at fungere. Det betyder også at man ikke skal vælge en dårlig løsning.
                Shopify kan mange ting nemt. Det betyder også at når det ført er sat op, kan du selv klare det meste. Det er nemt at lægge varer ind, tilføje den ønskede betalingsløsning
                og som en rigtig fed ting er det også nemt at bruge sine varer på andre platforme som f.eks. Amazon eller facebook. Det betyder at man kan handle med sine varer på flere forskellige 
                platforme og kun behøver at vedligeholde det hele et sted. Det kan godt være nogen af jer der læser dette, tænker, men jeg vil jo bare sælge i min egen shop, men om et til to år kommer Amazon 
                ind på det danske marked og det betyder altså at man SKAL være med her, hvis man fortsat vil have en online forretning og Det kan vi hjælpe med at gøre dig klar til." />
            
                <SingleProduct id="egetmedie" headline="Eget Medie" text="Dette er et produkt under udvikling, men der gælder samme system som med arvi ready.
                Det vil sige at man kan få sit helt eget medie, fra 1200 kroner i oprettelse og 350 kroner om måneden i minimum 36 måneder. Prisforskellen skyldes 
                de særlige tilføjelser, der gør det muligt at have en lukket nyhedskanal for betalende læsere." />

                <SingleProduct id="templates" headline="Templates" text="Dette er de templates/skabeloner man kan vælge imellem. De kan både bruges til produkterne
                Arvi Ready og Eget Medie. De kan desuden også købes ved en engangsbetaling." />

                <SingleProduct id="tilføjelser" headline="Tilføjelser" text="Dette er de tilføjeser man kan få på sin Arvi hjemmeside. Priserne der ses er et tillæg, alt efter hvordan
                man vælger at købe sin hjemmeside" />
      </section>
    );
  }
  
  export default Products;