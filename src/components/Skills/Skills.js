import React from 'react';
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

export const data = {
    labels: ['Javascript', 'CSS', 'HTML', 'ReactJS', 'AngularJS', 'MongoDB'],
    datasets: [
        {
            label: 'Proficiency',
            data: [7, 7, 8, 7, 6, 8],
            backgroundColor: 'rgba(255, 99, 132, 0.3)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2
        },
    ],
};

const Skills = () => {
    return (
        <div id="skillsSection" className="container skill-container">
            <Radar data={data} />
        </div>
    )
}
export default Skills;