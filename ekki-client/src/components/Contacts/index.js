import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {Container, Button, Loader, Body, Title} from '../shared';
import ContactsList from './ContactsList';
import { fetchContacts } from "../../redux/actions/contacts";

const mapStateToProps = (state) => {
    return{
        user: state.user.data,
        contacts: state.contacts.data,
        fetched: state.contacts.fetched
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getContacts: userContacts => {
            dispatch(fetchContacts(userContacts));
        }
    };
};

const Contacts = ({ user, contacts, fetched, getContacts }) => {
    useEffect(()=>{
        if(user && !fetched){
            getContacts(user.contacts);
        }
    });

    return (
        <Container>
            <Title>Contacts</Title>
            <Body>
                {(fetched && contacts != null) ? <ContactsList contacts={contacts} /> :  <Loader/>}
                <Link to="/"><Button>Back</Button></Link>
                <Link to="/contacts/new"><Button>Add Contact</Button></Link>
            </Body>
        </Container>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);