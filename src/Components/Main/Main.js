import React from 'react';
import './Main.css';
import Activities from './Activities/Activities';
import Task from './Task/Task'

const Main = () => {
    const addToList = (time) => {
        const exerciseTime = document.getElementById('exercise-time');
        exerciseTime.innerText = time;
    }
    return (
        <main>
            <section className='Activity-tast-container'>
                <Activities addToList={addToList}></Activities>
                <Task></Task>
            </section>
        </main>
    );
};

export default Main;