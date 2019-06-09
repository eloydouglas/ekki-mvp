import React from 'react';
import styled from 'styled-components';
import './Loader.css';

export const Title = styled.h2``;

export const Container = styled.div`
    text-align: center;
    font-size: 5vw;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.div``;

export const ProfilePic = styled.img`
    width: 30vw;
    height: auto;
    margin-top: 5vh;
    max-width: 200px
    max-height: 200px
`;

export const Body = styled.div` margin-top: 10vh`;

export const Button = styled.button`
    margin: 2em;
    min-width: 30vw;
    min-height: 10vh;
    font-size: 3.5vw;
`;

export const Loader = () => {
    return(
        <div className="loaderContainer">
            <div className="loader"></div>
        </div>) 
        
};