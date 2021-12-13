import React from 'react';
import './hero.scss'
import Contacts from "../contacts/contacts";

// function setThemePreference() {
//         let date = new Date();
//
//         let currentHour = date.getHours();
//
//         currentHour >= 19||currentHour<=6?'':''
//
//     }

const Hero = ({engBollean}) => {
    return (
        <main>
            <h1>{engBollean?'Рафаэль Насыбуллин':'Rafael Nassybullin'}</h1>
            <h5>{engBollean?'Фронтенд разработчик':'Frontend Developer'}</h5>
            <Contacts language={engBollean}/>
            <div className="mid-border">
            </div>
        </main>
    );
};

export default Hero;
