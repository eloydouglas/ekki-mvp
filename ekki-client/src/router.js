import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/HomeContainer';
import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';



const Router = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contacts" exact component={Contacts} />
    <Route path="/contacts/new" exact component={ContactForm} />
  </Switch>
);

export default Router;