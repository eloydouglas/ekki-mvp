import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Container, Button, Body, Title, FormContainer, Loader, SubmitButton} from '../shared';


const ContactForm = ({addContact, fetching, created}) => {
    
    const [ name, setName ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ cpf, setCpf ] = useState("");

    function onSubmit(event){
        event.preventDefault();
        addContact({name, phone, cpf});
    };
    
    if(fetching) return (<Container>
                            <Title>Add Contact</Title>
                            <Loader/>
                        </Container>);

    return(
        <Container>
            <Title>Add Contact</Title>
            <Body>
                <FormContainer>
                    <form onSubmit={event => onSubmit(event)}>
                        <label>Name</label><br/>
                        <input
                            type='text'
                            value={name}
                            onChange={(event)=>setName(event.target.value)}
                            required
                            className="contactInput"
                        />
                        <br/>

                        <label>Phone</label><br/>
                        <input 
                            type='number'
                            value={phone}
                            onChange={(event)=>setPhone(event.target.value)}
                            required
                            className="contactInput"
                        />
                        <br/>

                        <label>CPF</label><br/>
                        <input
                            type='number'
                            value={cpf}
                            onChange={(event)=>setCpf(event.target.value)}
                            required
                            className="contactInput"
                        />
                        <br/>

                        <SubmitButton text="Add Contact"/><br/>
                    </form>
                </FormContainer>
                <Link to="/contacts"><Button>Back</Button></Link>
            </Body>
        </Container>
    );
};

export default ContactForm;