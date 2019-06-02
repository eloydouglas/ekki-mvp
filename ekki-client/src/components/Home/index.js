import React from 'react';

import {
    Container,
    Title,
    Header,
    ProfilePic,
    Body,
    Button
} from '../shared';

import avatar from '../../images/avatar.svg';

import './Home.css';

export default function Home(){
    return(
        <Container>
            <Title>Ekki</Title>
            <Header>
                <ProfilePic src={avatar} alt="Profile Picture"/>
            </Header>
            <Body className="body-grid"> 
                <Button className="activity">Activity</Button>
                <Button className="contacts">Contacts</Button>
                <Button className="send">Send</Button>
            </Body>
        </Container>
    )
};