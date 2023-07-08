import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { WorkExperienceJSON } from '../../assets/json/work_experience';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';

const WorkExperience = () => {
    return (
        <>
            <div className="experience-container">
                <div className="col-1 experience-title">
                    <div className="rotate-class rotate">
                        Work Experience
                    </div>
                </div>
                <div className="col-11">
                    <VerticalTimeline layout="1-column-left">
                        {
                            WorkExperienceJSON.map(work => {
                                return (
                                    <>
                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--work"
                                            contentStyle={{ background: 'rgba(23,37,64, 1)', color: '#fff' }}
                                            contentArrowStyle={{ borderRight: '7px solid  rgba(23,37,64, 1)' }}
                                            date={work?.duration}
                                            iconStyle={{ background: 'rgba(23,37,64, 1)', color: '#fff' }}
                                        >
                                            <h4 className="vertical-timeline-element-title">{work?.designation}</h4>
                                            <h6 className="vertical-timeline-element-subtitle">{work?.designationLocation}</h6>
                                            <div className="pt-2" dangerouslySetInnerHTML={{__html:work?.responsibility}}></div>
                                        </VerticalTimelineElement>
                                    </>
                                )
                            })
                        }
                    </VerticalTimeline>
                </div>
            </div>
        </>
    )
}
export default WorkExperience;