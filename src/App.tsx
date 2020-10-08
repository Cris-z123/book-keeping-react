import React from 'react';
import Money from './views/Money';
import Tags from './views/Tags';
import {Tag} from './views/Tag';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';
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
        <Route path="/tags" exact> {/* 取消模糊匹配 */}
          <Tags />
        </Route>
        <Route path="/tags/:id" exact>
          <Tag />
        </Route>
        <Route path="/statistics" exact>
          <Statistics />
        </Route>
        <Route path="/money" exact>
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
