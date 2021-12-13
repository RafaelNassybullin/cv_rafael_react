import React from 'react';

const Icons = (props) => {
    return (
        <div>
            {props.sun ? icon.sun : ''}
            {props.moon ? icon.moon : ''}
        </div>
    );
};

export default Icons;

const icon = {
    sun: <svg className={'sun'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.68 52.68">
        <rect x="24.6" width="3.48" height="8.04" rx="1.74"/>
        <rect x="24.6" y="44.64" width="3.48" height="8.04" rx="1.74"/>
        <rect x="2.28" y="22.32" width="3.48" height="8.04" rx="1.74" transform="translate(-22.32 30.36) rotate(-90)"/>
        <rect x="46.92" y="22.32" width="3.48" height="8.04" rx="1.74" transform="translate(22.32 75) rotate(-90)"/>
        <rect x="8.82" y="6.54" width="3.48" height="8.04" rx="1.74" transform="translate(-4.37 10.56) rotate(-45)"/>
        <rect x="40.38" y="38.1" width="3.48" height="8.04" rx="1.74" transform="translate(-17.45 42.12) rotate(-45)"/>
        <rect x="8.82" y="38.1" width="3.48" height="8.04" rx="1.74" transform="translate(-11.76 79.37) rotate(-135)"/>
        <rect x="40.38" y="6.54" width="3.48" height="8.04" rx="1.74" transform="translate(64.44 47.81) rotate(-135)"/>
        <circle cx="26.34" cy="26.34" r="12.12"/>
    </svg>,
    moon: <svg className={'moon'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.74 34.74">
        <path
            d="M25.75,20.93A10.46,10.46,0,0,1,22.1.67a17.36,17.36,0,1,0,12.64,16.7c0-.49,0-1-.07-1.45A10.45,10.45,0,0,1,25.75,20.93Z"/>
    </svg>,
}
