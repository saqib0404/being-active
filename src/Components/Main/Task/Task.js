import React, { Children } from 'react';
import './Task.css';
import image from './images/profile.png'

const Task = () => {
    const btnAddBreak = element => {
        const breakTime = document.getElementById('break-time')
        breakTime.innerText = element.children[0].innerText;
        // console.log();
    }
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

            <div className='break=section'>
                <h3>Add a Break</h3>
                <div className='break-buttons'>
                    <button onClick={() => btnAddBreak(document.activeElement)}><span>10</span>s</button>
                    <button onClick={() => btnAddBreak(document.activeElement)}><span>20</span>s</button>
                    <button onClick={() => btnAddBreak(document.activeElement)}><span>30</span>s</button>
                    <button onClick={() => btnAddBreak(document.activeElement)}><span>40</span>s</button>
                    <button onClick={() => btnAddBreak(document.activeElement)}><span>50</span>s</button>
                </div>
            </div>

            <div className='activity-details'>
                <h3>Activity Details</h3>
                <div>
                    <h4>Exercise Time:</h4>
                    <p><span id='exercise-time'></span> seconds</p>
                </div>
                <div>
                    <h4>Break Time:</h4>
                    <p><span id='break-time'></span> seconds</p>
                </div>
            </div>

            <button className='btn-complete'>Activity Completed</button>
        </section>
    );
};

export default Task;