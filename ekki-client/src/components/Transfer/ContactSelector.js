import React from 'react';
import Contact from './Contact';
import '../shared/shared.css';

const ContactSelector = ({contacts, onSelection}) => {
    return(<ul className="list">
                {contacts.map(contact => {
                    return <Contact key={contact._id} onSelection={onSelection} contact={contact}/>
                })}
           </ul>);
};

export default ContactSelector;