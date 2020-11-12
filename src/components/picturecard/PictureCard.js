import React from 'react';
import './PictureCard.css'

function PictureCard({ src, alt, pictureId, h2 }){ 
    return(
            <section className="picturecard" id={pictureId}>
                <h2>{h2}</h2>
                <img src={src} className="References__img" alt={alt}/>
            </section>
    )
}

export default PictureCard;