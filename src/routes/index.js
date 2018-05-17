import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../Components/Login';

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Login} />
          <Redirect exact from="/" to="/" />
        </Switch>
      </main>
    );
  }
}
export default App;