import React from 'react';
import {Route, Switch} from 'react-router-dom';


import GreetingContainer from './greeting/greeting_container'
import SignUpFormContainer from './session_form/sign_up_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => (
    <div>
        <Switch>
            <Route path="/login" component={LogInFormContainer} />
            <Route path="/signup" component={SignUpFormContainer} />
            <Route path ="/" component={GreetingContainer} />
        </Switch>
    </div>
);

export default App;