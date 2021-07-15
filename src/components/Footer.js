import { GitHub, Instagram, LinkedIn, Email, Twitter } from '@material-ui/icons';

import React from 'react';

const Footer = () => {
    return(
        <>
         <div className="footer" id="contact">
            <h1 className="footer-name">Suresh</h1>
                <div className="footer-items">
                    <a target="_blank" href="https://www.linkedin.com/in/suresh-suthar-48245a215/" className="footer-link"><LinkedIn/></a>
                    <a target="_blank" href="https://www.instagram.com/_suresh_207_/" className="footer-link"><Instagram/></a>
                    <a target="_blank" href="https://github.com/271Suresh" className="footer-link"><GitHub/></a>
                    <a target="_blank" href="mailto: sureshsuthar262626@gmail.com" className="footer-link"><Email/></a>
                    <a target="_blank" href="https://twitter.com/Suresh82589388" className="footer-link"><Twitter/></a>
                </div>
         </div>
        </>
    );
}

export default Footer;