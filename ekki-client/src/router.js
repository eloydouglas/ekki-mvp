import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';

import Home from './components/Home';
import ContactFormContainer from './containers/ContactFormContainer';
import Contacts from './components/Contacts';
import Activity from './components/Activity';
import Transfer from './components/Transfer';

import {fetchUser} from './redux/actions/user';
import { fetchAccount } from './redux/actions/account';



const Router = ({user, getSampleUser}) => {
  
  useEffect(()=>{
    if(!user){
      getSampleUser("5cf305aecd10d512aa936d56");
    }
  });
  
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contacts" exact component={Contacts} />
      <Route path="/activity" exact component={Activity} />
      <Route path="/transfer" exact component={Transfer} />
      <Route path="/contacts/new" exact component={ContactFormContainer} />
    </Switch>)
};

const mapDispatchToProps = dispatch => {
  return {
    getSampleUser: (userId) => {
      dispatch(fetchUser(userId));
      dispatch(fetchAccount(userId))
    }
  };
};

const mapStateToProps = state => {
  return {
    user: state.user.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);