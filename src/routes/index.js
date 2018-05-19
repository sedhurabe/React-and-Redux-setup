import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../Components/Login';
import SignUp from '../Components/SignUp';

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/registration" component={SignUp} />
          <Redirect exact from="/" to="/" />
        </Switch>
      </main>
    );
  }
}
export default App;