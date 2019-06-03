import { connect } from 'react-redux'
import ContactForm from '../components/ContactForm';

import { createContact } from '../redux/actions/contacts';

const mapDispatchToProps = dispatch => {
    return {
        addContact: () => {
            dispatch(createContact());
        }
    }
}

export default connect(mapDispatchToProps)(ContactForm);