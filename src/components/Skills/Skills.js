import React, { useState } from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import './Skills.css';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const Skills = () => {
    const [isHovered, setIsHovered] = useState(false);
    const RadarOptions = {
        scale: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 10
            },
            angleLines: {
                color: `${isHovered ? 'white' : 'white'}`,
                lineWidth: 1
            },
            gridLines: {
                color: `${isHovered ? 'white' : 'white'}`,
                circular: true
            }
        }
    }
    
    const data = {
        labels: ['React', 'Angular', 'Javascript', 'Node.js', 'Expressjs', 'MongoDB'],
        datasets: [
            {
                label: 'Proficiency',
                data: [8, 7, 7, 7, 7, 8],
                fill: true,
                backgroundColor: 'rgb(212,59,64, 0.7)',
                borderColor: `${isHovered ? 'white':'white'}`,
                hoverBorderColor: `${isHovered ? 'white':'white'}`,
                borderWidth: 2
            }
        ],
    };

    const handleHover = (value) => {
        setIsHovered(value)
    }

    return (
        <div id="skillsSection" className="container-fluid py-2 fade-in-hover-animation" onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>
            <div className="row">
                <div className="col-12">
                    <p className="skill-title mb-0 mt-3">Skills</p>
                </div>
                <div className="col-12 skill-container d-flex margin-auto">
                    <Radar data={data} options={RadarOptions}/>
                </div>
            </div>
        </div>
    )
}
export default Skills;