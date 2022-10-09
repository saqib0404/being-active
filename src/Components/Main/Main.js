import React from 'react';
import './Main.css';
import Activities from './Activities/Activities';
import Task from './Task/Task'

const Main = () => {
    return (
        <main>
            <section className='Activity-tast-container'>
                <Activities></Activities>
                <Task></Task>
            </section>
        </main>
    );
};

export default Main;