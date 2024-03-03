import React from 'react';
import { SkillJSON } from '../../assets/json/skills';
import './Skills.css';


const Skills = () => {
    return (
        <div id="skillsSection" className="container-fluid py-2 fade-in-hover">
            <div className="row skill-container">
                <div className="col-12 px-0">
                    <p className="skill-title mb-0 mt-3">Skills</p>
                </div>
                <div className="col-12 px-0 d-flex pb-2 fade-in-hover">
                    <div className="col-2 px-0 skill-type">Frontend</div>
                    <div className="col-10 px-0">
                        {
                            SkillJSON.map(skill => {
                                return (
                                    skill?.skillType==="frontend" && 
                                    <>
                                        <img className="skill-icon" key={skill?.id} src={skill.skillIcon} alt={skill.skillName}/>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <hr className='skill-seperator'></hr>
                <div className="col-12 px-0 d-flex pb-2">
                    <div className="col-2 px-0 skill-type">Backend</div>
                    <div className="col-10 px-0">
                        {
                            SkillJSON.map(skill => {
                                return (
                                    skill?.skillType==="backend" && 
                                    <>
                                        <img className="skill-icon" key={skill?.id} src={skill.skillIcon} alt={skill.skillName}/>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <hr className='skill-seperator'></hr>
                <div className="col-12 px-0 d-flex">
                    <div className="col-2 px-0 skill-type">Others</div>
                    <div className="col-10 px-0">
                        {
                            SkillJSON.map(skill => {
                                return (
                                    skill?.skillType==="other" && 
                                    <>
                                        <img className="skill-icon" key={skill?.id} src={skill.skillIcon} alt={skill.skillName}/>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;