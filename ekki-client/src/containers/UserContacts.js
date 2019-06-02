import { connect } from 'react-redux';
import ContactsList from '../components/Contacts/ContactsList';

const mapStateToProps = (state) => ({
    contacts: state.contacts.data
});

export default connect(mapStateToProps)(ContactsList);