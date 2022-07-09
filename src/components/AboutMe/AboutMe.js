import React from 'react';
import AboutMePic from './../../assets/images/aboutMe_4x3.jpg';
import ResumePdf from './../../assets/json/ameyjeurkar_resume.pdf';
import './AboutMe.css';

const AboutMe = () => {

    const downloadFile = () => {
      window.location.href = "./../../assets/json/ameyjeurkar_resume.pdf";
    };

    const calculateYearsofExperience = (startDate, endDate) => {
      let monthsOfExperience =  endDate.getMonth() - startDate.getMonth() + 12*(endDate.getFullYear() - startDate.getFullYear());
      let convertMonthsToYears = parseInt(monthsOfExperience/12)
      let monthsMissed = monthsOfExperience%12;
      return `${convertMonthsToYears}${monthsMissed>6 ? '.' : ''}${monthsMissed>6 ? 5 : ''}years`;
    }

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
              I'm enthusiastic and motivated frontend Developer with more than {calculateYearsofExperience(new Date('2020-12-14'), new Date())} of 
              industry experience, working in the 
              front-end technologies, building 
              industry-grade web-applications and 
              Distributed systems. Proficient in major 
              web-application technologies (i.e.
              React.js & Angular2+). I have maintained 
              and developed multiple projects from 
              scratch, carrying the development of its 
              frontend & backend codebase.
              </p>
            </div>
            <div className="mx-0">
              <button
                id="resumeSection"
                type="button"
                className="btn btn-outline-light btn-size mx-0 btn-size"
                onClick={downloadFile}>
                  <a href={ResumePdf} download="AmeyJeurkarResume" className="css-remove">
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