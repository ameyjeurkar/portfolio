import React from 'react';
import AboutMePic from './../../assets/images/aboutMe_4x3.jpg';
import ResumePdf from './../../assets/json/amey_j_resume21.pdf';
import './AboutMe.css';

const AboutMe = () => {

    const downloadFile = () => {
      window.location.href = "./../../assets/json/amey_j_resume21.pdf";
    };

    return (
      <div id="aboutMeSection" className="about-container container-fluid px-0 px-5">
        <div className="row d-flex justify-content-center my-3">
          <img src={AboutMePic} alt="About Me Pic" className="col-lg-6 col-md-6 col-sm-12 about-me-pic" />
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className="about-me-heading mx-0">
                <p>About Me</p>
            </div>
            <div className="about-me-description mx-0">
              <p>
                I'm a Full Stack Web Developer responsible for the responsive
                designs and construction of websites. I ensure websites meet user
                expectations by ensuring they look good, run smoothly and offer
                easy access points with no loading issues between pages or error
                messages.
              </p>
            </div>
            <div className="mx-0">
              <button
                id="resumeSection"
                type="button"
                className="btn btn-outline-light btn-size mx-0 btn-size"
                onClick={downloadFile}>
                  <a href={ResumePdf} download='resume' className="css-remove">
                    View Resume
                  </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutMe;