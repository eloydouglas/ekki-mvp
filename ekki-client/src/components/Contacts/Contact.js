import React from 'react';
import '../shared/shared.css';
import {ListButton} from '../shared'


const Contact = ({name, phone}) => {
    return (<li className="listItem">
                <div>
                    <p>{name}</p>
                    <p>Phone: {phone}</p>
                </div>
            </li>)
}

export default Contact;