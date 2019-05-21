import React from 'react';
import Fade from 'react-reveal';

let newdate = new Date();
let year = newdate.getFullYear();

const footer = () => {
    return (
        
        <footer className="bck_red">
            <Fade delay={500}>
                <div className='font_righteous footer_logo_venue'>
                  The venue
                </div>
                <div className="footer_copyright">
                    The venue {year}.All rights reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default footer;