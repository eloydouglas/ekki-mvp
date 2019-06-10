import React, {useState} from 'react';
import {Container, Button, Body, Title, FormContainer, Loader, SubmitButton} from '../shared';
import {Link} from 'react-router-dom';


const ConfirmTransaction = ({user, account, contact, transfer}) => {

    const [ ammount, setAmmount ] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        
        transfer({ sender_id: user._id, receiver_id: contact._id, ammount});
    };

    return (
            <FormContainer>
                <form onSubmit={event => handleSubmit(event)}>
                    <label>Transfer to {contact.name} </label><br/>
                    <label>Ammount</label><br/>
                    <br/>
                    <input
                        type='number'
                        value={ammount}
                        onChange={(event)=>setAmmount(event.target.value)}
                        required
                        className="contactInput"
                    />
                    <br/>
                    <SubmitButton text="Confirm Transaction"/><br/>
                </form>
            </FormContainer>)
}

export default ConfirmTransaction;