import React from "react";
import CV from "../../assets/CV_Cotuna_Dumitru-Sorin.pdf";
import ReactGA from "react-ga";

const CTA = () => {
    const handleClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "Download CV Button",
        });
    };

    return (
        <div className="cta">
            <a onClick={handleClick} href={CV} download className="btn">
                Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
                Let's Talk
            </a>
        </div>
    );
};

export default CTA;
