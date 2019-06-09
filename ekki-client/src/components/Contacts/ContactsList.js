import React from 'react';
import Contact from './Contact'
import './Contact.css';

const ContactsList = ({contacts}) => {
    
    if(contacts.length > 0){
        return (
            <ul className="list">
                {contacts.map(contact => {
                    return <Contact name={contact.name} key={contact._id}/>
                })}
            </ul>)
    }else{
        return <div>No Contacts</div>;
    }
}

export default ContactsList;