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

const Hero = () => {

    return (
        <main>
            <h1>Рафаэль Насыбуллин</h1>
            <h5>Frontend разработчик</h5>
            <Contacts/>
            <div className="mid-border">
            </div>
        </main>
    );
};

export default Hero;
