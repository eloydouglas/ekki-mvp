import { connect } from 'react-redux'
import CreateContact from '../components/ContactForm';

import { createContact } from '../redux/actions/contacts';

const mapDispatchToProps = dispatch => {
    return{
        onAddContact: contact => {
            dispatch(createContact(contact));
        }
    }
};

export default connect(mapDispatchToProps)(CreateContact);