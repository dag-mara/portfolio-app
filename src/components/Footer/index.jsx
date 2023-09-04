import React from "react";
import { ReactSVG } from 'react-svg'
import './style.css';


export const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return(
        <footer id="contact">
            <div className="footer-inner">
                <div className="contact-div phone">
                    <a href="tel:+420776236432">
                        <ReactSVG src="images/envelope-fill.svg"/>
                        +420 776 236 432
                    </a>
                </div>
                <div className="contact-div email">
                    <a href="mailto:sucha.dagmar@gmail.com">
                        <ReactSVG src="images/telephone-fill.svg"/>
                        sucha.dagmar@gmail.com
                    </a>
                </div>
                <div className="contact-div">
                    <a href="https://www.linkedin.com/in/dagmar-sucha/" target="_blank">
                        <ReactSVG src="images/linkedin.svg"/>
                        LinkedIn
                    </a>
                </div>
            </div>
            <ReactSVG src="images/arrow-top.svg" className="arrow-top" onClick={scrollToTop}/>
        </footer>
    )
}