import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Container, Button} from '../shared';


const ContactForm = ({addContact}) => {
    
    const [ name, setName ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ cpf, setCpf ] = useState("");

    function onSubmit(event){
        event.preventDefault();
        addContact({name, phone, cpf});
    };
    
    return(
        <Container>
            <form onSubmit={event => onSubmit(event)}>
                <label>Name: </label>
                <input
                    type='text'
                    value={name}
                    onChange={(event)=>setName(event.target.value)}
                />
                <br/>

                <label>Phone: </label>
                <input 
                    type='number'
                    value={phone}
                    onChange={(event)=>setPhone(event.target.value)}
                />
                <br/>

                <label>CPF: </label>
                <input
                    type='number'
                    value={cpf}
                    onChange={(event)=>setCpf(event.target.value)}
                />
                <br/>

                <input type='submit' value='Submit'/><br/>
            </form>
            <Link to="/contacts"><Button>Back</Button></Link>
        </Container>
    );
};

export default ContactForm;