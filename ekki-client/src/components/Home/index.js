import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Container,Title,Body,Button,Loader} from '../shared';
import './Home.css';



// import { fetchUser } from '../../redux/actions/user';
import UserData from '../UserData';

const Home = ({user}) => {
    return(
        <Container>
            <Title>Ekki</Title>
            {user ? <UserData user={user}/> :  <Loader/>}
            <Body className="body-grid"> 
                <Button className="activity">Activity</Button>
                    <Link to="/contacts"><Button className="">Contacts</Button></Link>
                <Button className="send">Transfer</Button>
            </Body>
        </Container>
    )
};

const mapStateToProps = state => {
    return {
        user: state.user.data,
        // account: state.account.data
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onPageLoad: userId => {
//             dispatch(fetchUser(userId));
//             // dispatch(fetchAccountIfNeeded(userId));
//         },
//         // handleContacts: contacts => {
//         //     dispatch(fetchContacts(contacts));       
//         // },
//     }
// }

export default connect(mapStateToProps)(Home);