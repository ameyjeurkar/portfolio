import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import './Footer.css';

const Footer = () => {

    return (
        <footer id="contactSection" className="page-footer font-small footer-container container-fluid p-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
                        <div className="d-flex flex-row">
                            <div className="v-center">
                                <i className={`fa fa-map-marker fa-lg footer-icon mx-3`} aria-hidden="true"></i>
                            </div>
                            <div className="d-flex flex-column">
                                <p className="my-0 fs-12">Nagpur</p>
                                <p className="my-0 fs-12">Maharashtra, India</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row mt-3">
                            <i className={`fa fa-phone fa-lg footer-icon mx-3`} aria-hidden="true"></i>
                            <div className="d-flex flex-column">
                                <p className="my-0 fs-12">(+91) 866-904-9754</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row mt-3">
                            <i className={`fa fa-envelope fa-sm footer-icon mx-3`} aria-hidden="true"></i>
                            <div className="d-flex flex-column">
                                <p className="my-0 fs-12">jeurkaramey@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column">
                        <div className="d-flex flex-column v-center mt-20">
                            <p className="my-0 fs-12 align-center">Also reach out via:</p>  
                            <SocialMedia page="footer"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;