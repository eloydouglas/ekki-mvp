import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Activity from './components/Activity';
import Contacts from './components/Contacts';
import Transfer from './components/Transfer';
import Unknown from './components/Unknown';


const Router = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/activity" exact component={Activity} />
    <Route path="/contacts" exact component={Contacts} />
    <Route path="/send" exact component={Transfer} />
    <Route path="/*" component={Unknown} />
  </Switch>
);

export default Router;