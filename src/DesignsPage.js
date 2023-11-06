import React from 'react';
import './DesignsPage.css';
import firstImage from './testimage1.jpg';
import secondImage from './testimage2.jpg';
// Import your icons
import customIcon from './icons/custom-icon.svg';
import solutionIcon from './icons/solution-icon.svg';
import detailIcon from './icons/detail-icon.svg';
import functionalityIcon from './icons/functionality-icon.svg';
import styleIcon from './icons/style-icon.svg';
import approachIcon from './icons/approach-icon.svg';

const DesignsPage = () => {
    return (
        <div className="designs-page">
            <div className="introduction">
                <h1></h1>
                <p></p>
            </div>
            <div className="overlay">
                <div className="image-container">
                    <div className="cutout left-cutout" style={{ backgroundImage: `url(${firstImage})` }}></div>
                    <div className="text-box text-box-one">
                        <div className="feature">
                            <img src={customIcon} alt="Custom" className="feature-icon icon" />
                            <h3 className="feature-title">Custom Creations</h3>
                            <p className="feature-description">Every design begins with a blank canvas, promising a unique and personalized touch that reflects your brand's identity.</p>
                            <hr className="feature-divider" />
                        </div>
                        <div className="feature">
                            <img src={solutionIcon} alt="Solutions" className="feature-icon icon" />
                            <h3 className="feature-title">Innovative Solutions</h3>
                            <p className="feature-description">Stay ahead of the curve with cutting-edge design trends that push the boundaries of creativity and functionality.</p>
                            <hr className="feature-divider" />
                        </div>
                        <div className="feature">
                            <img src={detailIcon} alt="Detail" className="feature-icon icon" />
                            <h3 className="feature-title">Detail-Oriented</h3>
                            <p className="feature-description">From the macro to the micro, every aspect of your design is crafted with precision and a keen eye for detail.</p>
                            <hr className="feature-divider" />
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <div className="cutout right-cutout" style={{ backgroundImage: `url(${secondImage})` }}></div>
                    <div className="text-box text-box-two">
                        <div className="feature">
                            <img src={functionalityIcon} alt="Functionality" className="feature-icon icon" />
                            <h3 className="feature-title">Flexible Functionality</h3>
                            <p className="feature-description">Our designs are as flexible as they are beautiful, ensuring they adapt seamlessly to your project's requirements.</p>
                            <hr className="feature-divider" />
                        </div>
                        <div className="feature">
                            <img src={styleIcon} alt="Style" className="feature-icon icon" />
                            <h3 className="feature-title">Sustainable Style</h3>
                            <p className="feature-description">Go green with designs that prioritize eco-friendliness without compromising on aesthetic appeal.</p>
                            <hr className="feature-divider" />
                        </div>
                        <div className="feature">
                            <img src={approachIcon} alt="Approach" className="feature-icon icon" />
                            <h3 className="feature-title">Client-Centric Approach</h3>
                            <p className="feature-description">Your vision is our blueprint. We collaborate closely with you to bring your ideas to life in a way that exceeds expectations.</p>
                            <hr className="feature-divider" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DesignsPage;
