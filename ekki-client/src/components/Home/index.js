import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Body,Button,Container, Loader} from '../shared';
import './Home.css';
import { fetchUser } from '../../redux/actions/user';
import { fetchAccount } from '../../redux/actions/account';

import UserData from '../UserData';

const Home = ({user, account, onPageLoad}) => {

    useEffect(()=>{
        if(user){
            onPageLoad(user._id);
        };
    }, []);

    return(
        <Container>
            <h1>Ekki</h1>
            <Body>
                {user && account ? <UserData user={user} account={account}/> :  <Loader/>}
                <Link to="/activity">
                    <Button>Activity</Button>
                </Link>
                <Link to="/contacts">
                    <Button>Contacts</Button>
                </Link>
                <Link to="/transfer">
                    <Button>Transfer</Button>
                </Link>
            </Body>
        </Container>
    )
};

const mapStateToProps = state => {
    return {
        user: state.user.data,
        account: state.account.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPageLoad: userId => {
            dispatch(fetchUser(userId));
            dispatch(fetchAccount(userId));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);