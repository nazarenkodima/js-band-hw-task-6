import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { hot } from 'react-hot-loader';

import Scheduler from "../../components/Scheduler";

@hot(module)
export default class App extends Component {

    render () {
        return (
            <Switch>
                <Redirect exact from='/' to='/todos'/>
                <Route component = { Scheduler } path = '/todos' />
                <Route path="*">Oops..not found</Route>
            </Switch>
        );
    }
}
