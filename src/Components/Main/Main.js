import React from 'react';
import './Main.css';
import Activities from './Activities/Activities';
import Task from './Task/Task'
import Blogs from './Blogs/Blogs';

const Main = () => {
    const addToList = (time) => {
        const exerciseTime = document.getElementById('exercise-time');
        // console.log(+exerciseTime.innerText);
        exerciseTime.innerText = time + (+exerciseTime.innerText);
    }

    return (
        <main>
            <section className='Activity-tast-container'>
                <Activities addToList={addToList}></Activities>
                <Task></Task>
            </section>
            <Blogs></Blogs>
        </main>
    );
};

export default Main;