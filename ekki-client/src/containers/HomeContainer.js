import Home from '../components/Home';
import { connect } from 'react-redux';

import { fetchUserIfNeeded } from '../redux/actions/user';
import { fetchAccountIfNeeded } from '../redux/actions/account';
import { fetchContacts } from '../redux/actions/contacts';

const mapStateToProps = state => {
    return {
        user: state.user.data,
        account: state.account.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPageLoad: userId => {
            dispatch(fetchUserIfNeeded(userId));
            dispatch(fetchAccountIfNeeded(userId));
        },
        handleContacts: contacts => {
            dispatch(fetchContacts(contacts));       
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);