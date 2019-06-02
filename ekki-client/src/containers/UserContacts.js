import { connect } from 'react-redux';
import {fetchUserContacts} from '../redux/actions/contacts';
import Home from '../components/Home';

const getContacts = (contacts_ids) => {
    const query = `contacts=${JSON.stringify(contacts_ids)}`;
    const response = await fetch(`https://localhost:4266/users?${query}`);
    const json = await response.json();
    return json;
};


const mapDipatchToProps = dispatch => {
    return {
        fetchUserContacts: contacts => dispatch(fetchUserContacts(contacts))
    };
};

export default connect(
    mapDipatchToProps
)(Home);