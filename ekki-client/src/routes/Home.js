import React from 'react';
import styled from 'styled-components';

import './Home.css';

import avatar from '../images/avatar.svg';

const Title = styled.h2``;

const Container = styled.div`
    text-align: center;
    font-size: 5vw;
`;

const Header = styled.div``;

const ProfilePic = styled.img`
    width: 30vw;
    height: auto;
    margin-top: 5vh;
    max-width: 200px
    max-height: 200px
`;

const Body = styled.div` margin-top: 10vh`;

const Button = styled.button`
    margin: 2em;
    min-width: 30vw;
    min-height: 10vh;
    font-size: 3.5vw;
`;

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