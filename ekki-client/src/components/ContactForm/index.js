import React from 'react';
import { Container } from '../shared';
import { useInput } from '../../helpers/customHooks';


const ContactForm = ({user, onAddContact}) => {

    const { value:name, bind:bindName, reset:resetName } = useInput('');
    const { value:phone, bind:bindPhone, reset:resetPhone} = useInput('');
    const { value:cpf, bind:bindCpf, reset:resetCpf} = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({name,phone,cpf})

        //onAddContact();
        resetPhone();
        resetName();
        resetCpf()
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <label>
                    Contact Name:
                    <input 
                        type="text"
                        {...bindName}
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="text"
                        {...bindPhone}
                    />
                </label>
                <label>
                    CPF:
                    <input
                        type="text"
                        {...bindCpf}
                    />
                </label>
                <input type="submit" value="Add Contact"></input>
            </form>
        </Container>
    )
}

export default ContactForm;