import React from 'react';
import './Marketing.modules.css';
import SiteInfo from '../Site-info/SiteInfo';


export default () => (
    <section className="relative" id="marketing">  
        <div className="marketing__bgimg"></div>
        <div className="marketing__wrapper">
            <h2 className="marketing__heading">Ask how much you earn</h2>
            <p className="marketing__text">
                Online presence matters Do you remember the last time you opened up a newspaper to find a carpender or a plumber?
                You don't! Today you search for everything you need online. If this is what you do I can guarantee you are not the only one.
                the vast majority of new business relations are made online these days.
                Our main competence is building websites and apps, but through very competent partners we offer high quality online campains 
                and SEO (search Engine Optimizing). Marketing is where you as a business needs to think differently. If you blindly take 
                the cheapest offer, it just might be throwing money out the window. You need to look at what you get in return. Also called
                ROI (Return Of Investment). When making campaigns online it is very easy to know what your ROI is. Lets talk if you want to know more
            </p>
        </div>
        <SiteInfo href="#marketing" id="marketing" name="Marketing" text="Ask not what you pay" />
    </section>
    )