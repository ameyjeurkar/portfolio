import React from 'react';
import ResumePdf from './../../assets/json/AmeyJeurkarMERN.pdf';
import './AboutMe.css';

const AboutMe = () => {
    const downloadFile = () => {
      window.location.href = "./../../assets/json/AmeyJeurkarMERN.pdf";
    };

    const calculateYearsofExperience = (startDate, endDate) => {
      let monthsOfExperience =  endDate.getMonth() - startDate.getMonth() + 12*(endDate.getFullYear() - startDate.getFullYear()) + 6;
      let convertMonthsToYears = parseInt(monthsOfExperience/12)
      let monthsMissed = monthsOfExperience%12;
      return `${convertMonthsToYears}${monthsMissed>0 ? '.' : ''}${monthsMissed>0 ? monthsMissed : ''}`;
    }

    return (
      <div id="aboutMeSection" className="about-container container-fluid px-4">
        <div className="row d-flex justify-content-center my-3">
          <div className='col-lg-8 col-md-8 col-sm-12'>
            <div className="about-me-heading mx-0">
              <p>About Me</p>
            </div>
            <div className="about-me-description mx-0">
              <p>
                Welcome to my portfolio! I am an enthusiastic and dedicated MERN Full Stack developer with a passion for creating impactful and innovative web applications. Over the course of my <span className='experienceYears'>{calculateYearsofExperience(new Date('2020-12-14'), new Date())}</span> year journey in the world of software development, I have gained valuable experience and expertise that has shaped me into the professional I am today.
              </p>
              <p>
                I have a strong belief in lifelong learning, especially in the fast-paced world of technology. I thrive on exploring new technologies and staying updated with the latest advancements. Whether it's diving into new frameworks, embracing emerging libraries, or delving into cloud technologies, I am always eager to expand my skill set and take on new challenges.
              </p>
              <p>
              I am excited about the possibility of collaborating with talented individuals like yourself to create something truly extraordinary. I look forward to connecting with you soon and embarking on this amazing journey together!
              </p>
            </div>
            <div className="mx-0">
              <button
                id="resumeSection"
                type="button"
                className="btn btn-outline-light btn-size mx-0 btn-size"
                onClick={downloadFile}>
                  <a href={ResumePdf} download="AmeyJeurkarResume" className="css-remove">
                    Download Resume
                  </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutMe;
