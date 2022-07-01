import React, { useState } from 'react';
import Portfolio from '../Portfolio/Portfolio';
import { ProjectsJson } from './../../assets/json/projects';

const PortfolioContainer = () => {
    const [pID, setPID] = useState(null);

    const liquidBoxAnimation = (pid, eventTriggered) => {
        eventTriggered === 'mouseover' ? setPID(pid) : setPID(null);
    }

    return (
        <div id="portfolioSection" className="container-fluid mb-3">
            <div className="row">
                <div className="col-12">
                    <p className="section-title mb-0 mt-3">Portfolio</p>
                </div>
                <div className="col-12 d-flex flex-wrap justify-content-center">
                    {
                        ProjectsJson.map(project => {
                        return (
                            <Portfolio key={project.displaySequence} project={project} pID={pID} liquidBoxAnimation={liquidBoxAnimation}/>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}
export default PortfolioContainer;