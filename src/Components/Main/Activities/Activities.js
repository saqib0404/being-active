import React, { useEffect, useState } from 'react';
import './Activities.css';
import Activiy from './Activity/Activiy';

const Activities = ({addToList}) => {
    const [activities, setActivities] = useState([]);
    // console.log(addToList);
    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    return (
        <section className='activities'>
            {
                activities.map(activity => <Activiy
                key={activity.id}
                activity = {activity}
                addToList={addToList}
                ></Activiy> )
            }
        </section>
    );
};

export default Activities;