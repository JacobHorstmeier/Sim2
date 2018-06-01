import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';


export default (
    <Switch>
        <Route path='/' component={ Dashboard } exact />
        <Route path='/wizard' component={ Wizard } />
    </Switch>
)