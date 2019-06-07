import { connect } from 'react-redux'
import ContactForm from '../components/ContactForm';
import { createContact } from '../redux/actions/contacts';


const mapDispatchToProps = dispatch => {
    return {
        addContact: (contact) => dispatch(createContact(contact))
    }
}

export default connect(null, mapDispatchToProps)(ContactForm);