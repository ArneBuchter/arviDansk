import React from 'react';
import './SingleProduct.css';


function SingleProduct({ headline, text, id, src, alt, h2, pictureId, href}){ 
    return(
            <div className="SingleProduct__wrapper" id={id}>
                <h2 className="SingleProduct__heading">{headline}</h2>
                <p className="SingleProduct__text">{text}</p>
                <section className="picturesection">
                    <a href={href} className="SingleProduct__a"><section className="picturecard" id={pictureId}>
                        <h2 className="SingleProduct__h2">{h2}</h2>
                        <img src={src} className="SingleProduct__img" alt={alt}/>
                    </section></a>               
                </section>
            </div>
    )
}

export default SingleProduct;