import React from 'react';
import '../shared/shared.css';


const Contact = ({contact, onSelection}) => {
    return (<li className="listItem">
                <button value={contact._id} className="contactButton" onClick={event => onSelection(event.target.value)}>
                    {contact.name}<br/>
                    <br/>
                    Phone: {contact.phone}
                </button>
            </li>)
};

export default Contact;