import React from 'react';
import './Marketing.modules.css';

function MarketingDetails({ headline, text}){ 
    return(
            <div className="marketing__wrapper">
                <h2 className="marketing__heading">{headline}</h2>
                <p className="marketing__text">{text}</p>
            </div>
    )
}

export default MarketingDetails;