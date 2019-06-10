import { connect } from 'react-redux'
import ContactForm from '../components/ContactForm';
import { createContact } from '../redux/actions/contacts';


const mapDispatchToProps = dispatch => {
    return {
        addContact: (contact) => dispatch(createContact(contact))
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.contacts.fetching
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);