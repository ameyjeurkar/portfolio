import React from 'react';
import ReactLogoImage from './../../assets/images/react_png.png';
import { ProjectsJson } from './../../assets/json/projects';
import './Portfolio.css';

const Portfolio = () => {

    const navigateToProject =  (projectLink) => {
      window.open(projectLink, '_blank');
    }
  
    return (
      <div id="portfolioSection" className="container-fluid">
        <div className="row">
          <div className="col-12">
            <p className="section-title mb-0 mt-3">Portfolio</p>
          </div>
          <div className="col-12 d-flex flex-wrap justify-content-center">
              {
                ProjectsJson.map(project => {
                  return (
                    <div key={project.displaySequence} className="col-lg-3 col-md-4 col-sm-12 project-card m-2">
                      <div className="d-flex flex-column">
                        <img className="card-img-top" src={ReactLogoImage} alt={project.projectType} />
                        <p className="project-name">{project.projectName}</p>
                        <p className="project-desc mx-4">{project.projectDesc}</p>
                        <button className="btn btn-outline-light mx-4 mt-2 mb-4" onClick={() => navigateToProject(project.projectLink)}>View Project</button>
                      </div>
                    </div>
                  )
                })
              }
          </div>
        </div>
      </div>
    );
}

export default Portfolio;