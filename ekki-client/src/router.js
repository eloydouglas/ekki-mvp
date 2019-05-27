import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import Activity from './routes/Activity';
import Contacts from './routes/Contacts';
import Send from './routes/Send';
import Unknown from './routes/Unknown';


const Router = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/activity" exact component={Activity} />
    <Route path="/contacts" exact component={Contacts} />
    <Route path="/send" exact component={Send} />
    <Route path="/*" component={Unknown} />
  </Switch>
);

export default Router;