import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './../utils/route_util';



import GreetingContainer from './greeting/greeting_container'
import SignUpFormContainer from './session_form/sign_up_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <Route path ="/" component={GreetingContainer} />
        </Switch>
    </div>
);

export default App;