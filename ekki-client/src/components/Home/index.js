import React, {useEffect} from 'react';
import {
    Container,
    Title,
    Body,
    Button
} from '../shared';
import './Home.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import UserData from '../UserData';

const Home = ({user, onPageLoad, handleContacts}) => {

    useEffect(()=>{
        onPageLoad("5cf305aecd10d512aa936d56");
    },[]);

    return(
        <Container>
            <Title>Ekki</Title>
            <UserData user={user} account={{ balance: 1000 }}/>
            <Body className="body-grid"> 
                <Button className="activity">Activity</Button>
                <Button className="">
                    <Link to="/contacts">Contacts</Link>
                </Button>
                <Button className="send">Transfer</Button>
            </Body>
        </Container>
    )
};

export default connect()(Home);