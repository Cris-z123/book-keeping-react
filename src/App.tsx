import React from 'react';
import Money from './views/Money'
import Tags from './views/Tags'
import Statistics from './views/Statistics'
import NoMatch from './views/NoMatch'


import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Redirect exact from="/" to="/money" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
