import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth';
import Dashboard from './Components/Dashboard';

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/dashboard' component={Dashboard}/>
    </Switch>
)