import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {Container, Button, Body, Title, List, Loader, SubmitButton} from '../shared';
import { fetchContacts } from '../../redux/actions/contacts';
import { createTransaction } from '../../redux/actions/transactions';

import ContactSelector from './ContactSelector';
import ConfirmTransaction from './ConfirmTransaction';

const Transfer = ({user, account, contacts, fetching, getContacts, transfer}) => {

    useEffect(()=>{
        if(user && !contacts){
            getContacts(user.contacts);
        };
    }, []);

    const [ selectedContact, setContact ] = useState(null);

    const handleSelection = (contactId) => {
        setContact(contacts.find(contact => contact._id == contactId));
    } 

    return (<Container>
                <Body>
                    <Title>Transfer to:</Title>
                   {selectedContact ? <ConfirmTransaction user={user} account={account} transfer={transfer} contact={selectedContact}/> 
                   : <List>
                    { !fetching && contacts ?
                            <ContactSelector onSelection={handleSelection} contacts={contacts}/> 
                            : <Loader/>}
                    </List>}
                    <Link to="/"><Button>Back</Button></Link>
                </Body>
            </Container>)
};

const mapDispatchToProps = dispatch => {
    return {
        getContacts: userContacts => {
            dispatch(fetchContacts(userContacts));
        },
        transfer: transaction => {
            dispatch(createTransaction(transaction));
        }
    };
};

const mapStateToProps = state => {
    return {
        contacts: state.contacts.data,
        fetching: state.contacts.fetching,
        user: state.user.data,
        account: state.account.data
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transfer);