import React from "react";
import { ReactSVG } from 'react-svg'
import './style.css';


export const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <footer id="contact">
            <div className="footer-inner">
                <div className="contact-div">
                    <a href="https://www.linkedin.com/in/dagmar-sucha/" target="_blank">
                        <ReactSVG src="images/linkedin.svg" />
                        LinkedIn
                    </a>
                </div>
                <hr></hr>
                <div className="code-link">
                    <p>you can find the code of this website at this address: <a href="https://github.com/dag-mara/portfolio-app" target="_blank">https://github.com/dag-mara/portfolio-app</a></p>
                </div>
            </div>
            <ReactSVG src="images/arrow-top.svg" className="arrow-top" onClick={scrollToTop} />
        </footer>
    )
}