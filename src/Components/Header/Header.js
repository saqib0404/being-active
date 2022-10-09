import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header>
            <h1>
                <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                &nbsp; Being Active
            </h1>
            <h2>Today's Activities</h2>
        </header>
    );
};

export default Header;