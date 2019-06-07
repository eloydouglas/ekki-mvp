import Home from '../components/Home';
import { connect } from 'react-redux';

import { fetchUser } from '../redux/actions/user';
import { fetchAccount } from '../redux/actions/account';
import { fetchContacts } from '../redux/actions/contacts';

const mapStateToProps = state => {
    return {
        user: state.user.data,
        account: state.account.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPageLoad: user_id => {
            dispatch(fetchUser(user_id));
            dispatch(fetchAccount(user_id));
        },
        handleContacts: contacts => {
            dispatch(fetchContacts(contacts));       
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);