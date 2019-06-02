import React from 'react';
import UserContacts from '../../containers/UserContacts';
import { Link } from 'react-router-dom';
import {
    Container,
    Button
} from '../shared'
const Contacts = () => {
    return (
        <Container>
            <UserContacts/>
            <Button><Link to="/contacts/new">Add Contact</Link></Button>
            <Button><Link to="/">Back</Link></Button>
        </Container>
    )
}

export default Contacts;