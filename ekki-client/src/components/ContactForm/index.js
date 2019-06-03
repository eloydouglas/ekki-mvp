import React from 'react';
import { Container, Title } from '../shared';
import { Field, reduxForm, Form } from 'redux-form'



const ContactForm = ({addContact ,handleSubmit}) => {
    return (
        <Container>
            <Title>Add Contact</Title>
            <Form onSubmit={handleSubmit()}>
                <label>Name: </label>
                <Field 
                    required
                    type="text"
                    component="input"
                    placeholder="e.g.: Albert Einstein"
                    name="name"
                >
                </Field><br/>
                <label>Phone: </label>
                <Field
                    required
                    type="number"
                    component="input"
                    placeholder="e.g.: 55519937XXXX"
                    name="phone"
                >
                </Field><br/>
                <label>CPF: </label>
                <Field
                    required
                    type="text"
                    component="input"
                    placeholder="e.g.: 11156854XX"
                    name="cpf"
                >
                </Field><br/>
                <button type="submit">Add</button>
            </Form>
        </Container>
    )
}

export default reduxForm({
    form: 'contact'
})(ContactForm);