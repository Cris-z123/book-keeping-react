import React from 'react';
import styled from 'styled-components';


import {
  HashRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;
const Nav = styled.nav`
  border: 1px solid blue;
  > ul{
    display: flex;
    > li {
      width: 33.333333%;
      text-align: center;
    }
  }
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Nav>
          <ul>
            <li>
              <Link to="/">Money</Link>
            </li>
            <li>
              <Link to="/tags">Tags</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
          </ul>
        </Nav>

        <Main>
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
        </Main>
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
      </Wrapper>
    </Router>
  );
}

function Money() {
  return <h2>Money</h2>;
}

function Tags() {
  return <h2>Tags</h2>;
}

function Statistics() {
  return <h2>Statistics</h2>;
}

function NoMatch() {
  return <p>当前页面不存在，请检查网址是否正确</p>;
}

export default App;
