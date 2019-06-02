import React from 'react';
import Contact from './Contact'

const ContactsList = ({contacts}) => {
    return (
        <ul>
            {contacts.map(contact => {
                return <Contact name={contact.name} />
            })}
        </ul>
    )
}

export default ContactsList;