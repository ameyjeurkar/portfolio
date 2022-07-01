import React from 'react';
import { getProjectTechnology } from './../../common/CommonService';
import './Portfolio.css';

const Portfolio = ({project, pID, liquidBoxAnimation}) => {

    const myStyle = {
      "--framework-background": getProjectTechnology(project.projectType)?.background
    }

    const navigateToProject =  (projectLink) => {
        window.open(projectLink, '_blank');
    }
  
    return (
        <div 
          key={project.displaySequence}
          className={`col-lg-3 col-md-4 col-sm-12 project-card m-2 ${project.displaySequence === pID ? 'liquid-box' : ''}`}
          style={myStyle}
          onMouseOver={() => liquidBoxAnimation(project.displaySequence, 'mouseover')} 
          onMouseOut={() => liquidBoxAnimation(project.displaySequence, 'mouseout')}
          onClick={() => navigateToProject(project.projectLink)}>
            <div className="d-flex flex-column">
                <img className="card-img-top" src={getProjectTechnology(project.projectType)?.framework} alt={project.projectType} />
                <p className="project-name">{project.projectName}</p>
                <p className="project-desc mx-4 mb-5">{project.projectDesc}</p>
                {/* <button className="btn btn-outline-light mx-4 mt-2 mb-4" onClick={() => navigateToProject(project.projectLink)}>View Project</button> */}
            </div>
        </div>
    );
}

export default Portfolio;