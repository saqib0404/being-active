import React from 'react';
import './Activity.css'

const Activiy = ({ activity, addToList }) => {
    // console.log(addToList);
    const { age, id, img, name, time } = activity;
    return (
        <div className='activity'>
            <div>
                <img className='avtivity-img' src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>For Age: {age}</p>
                <p>Required Time: {time}</p>
                <button onClick={() => { addToList(time) }} className='btn-add'>Add to List</button>
            </div>
        </div>
    );
};

export default Activiy;