import React from 'react';
import './textblock.scss';

const TextBlock = ({textData}) => {
    return (
        <div className={'text-block'}>
            <h1>{textData.h1}</h1>
            <h3>{textData.subtitle1}</h3>
            <p>{textData.paragr1}</p>
            <h3>{textData.subtitle2}</h3>
            <p>{textData.paragr2}</p>
            <h3>{textData.subtitle3}</h3>
            <p>{textData.paragr3}</p>
            <p>{textData.paragr4}</p>
            <a rel="noopener noreferrer" target='_blank' href={textData.link}>{textData.linkTitle}</a>
        </div>
    );
};
export default TextBlock;
