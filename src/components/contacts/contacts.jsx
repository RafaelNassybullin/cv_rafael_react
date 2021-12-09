import React from 'react';
import './contacts.scss';
import Icons from "./Icons";

const Contacts = () => {
    const contactItemData = [
        {text:'1997.06.08',icon:<Icons smile/>},
        {text:'Актобе, Казахстан',icon:<Icons map/>},
        {text:'crazynihonjin97@gmail.com',icon:<Icons email/>},
        {link:'@Rafael_RFL',icon:<Icons telegramm/>}
    ]
    return (
        <>
            {contactItemData.map((item,i)=>(
                <div key={i} className={'contacts-item'}>
                    <p>{item.text}{<a href="https://t.me/Rafael_RFL">{item.link}</a>}</p>
                    <div className="icon">{item.icon}</div>
                </div>
            ))
        }
        </>
    );
};

export default Contacts;
