import React from 'react';
import styled from 'styled-components';
import './Loader.css';

export const Title = styled.h2``;

export const Container = styled.div`
    text-align: center;
    font-size: 4vh;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    max-height: 700px;
    margin: auto;
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
    min-width: 15vh;
    min-height: 7vh;
    font-size: 2.5vh;
    border-radius: 30px;
`;

export const InputButton = styled.input`
    margin: 2em;
    min-width: 15vh;
    min-height: 7vh;
    font-size: 2.5vh;
    border-radius: 30px;
`;

export const ListButton = styled.button`
    min-width: 5vw;
    min-height: 2vh;
`;

export const List = styled.div`
    max-height: 60vh;
    overflow-y: scroll;
`
export const FormContainer = styled.div`
    height: 45vh;
    padding-top: 5vh;
    margin: 0% 5% 0% 5%;
    border: 0.5px solid gray;
    border-radius: 10px;
    box-shadow: 2px 2px 5px 1px #888888;
    background-color: aliceblue;
`

export const Loader = () => {
    return(
        <div className="loaderContainer">
            <div className="loader"></div>
        </div>) 
        
};

export const SubmitButton = ({text}) => {
    return(
        <InputButton type="submit" value={text}/>)
        
};