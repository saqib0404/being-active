import React from 'react';
import './Task.css';
import image from './images/profile.png'

const Task = () => {
    return (
        <section className='task'>
            <div className='profile'>
                <img className='profile-image' src={image} alt="" />
                <div className='profile-details'>
                    <b>Saqib Ahmad</b> <br />
                    Jr.Developer
                </div>
            </div>
            <div className='personal-details'>
                <div>
                    75<sub>kg</sub> <br />
                    Weight
                </div>
                <div>
                    5.8<sub>ft</sub> <br />
                    Height
                </div>
                <div>
                    18<sub>yrs</sub> <br />
                    Age
                </div>
            </div>
        </section>
    );
};

export default Task;