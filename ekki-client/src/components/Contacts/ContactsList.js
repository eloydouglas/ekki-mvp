import React from 'react';
import Contact from './Contact';
import {List} from '../shared';
import '../shared/shared.css';

const ContactsList = ({contacts}) => {
    
    if(contacts.length > 0){
        return (
            <List>
                <ul className="list">
                    {contacts.map(contact => {
                        return <Contact name={contact.name} phone={contact.phone} key={contact._id}/>
                    })}
                </ul>
            </List>)
    }else{
        return <div>No Contacts</div>;
    }
}

export default ContactsList;