import styled from 'styled-components'
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icons'

const NavWrapper = styled.nav`
line-height: 24px;
box-shadow: 0 0 3px rgba(0, 0, 0, .25);
> ul{
  display: flex;
  > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33.333333%;
    text-align: center;
    padding: 4px 0;
    .icon {
      width: 24px;
      height: 24px;
    }
  }
}
`;

const Nav = () => {
    return (
      <NavWrapper>
        <ul>
          <li>
            <Icon name="tag" />
            <Link to="/tags">标签</Link>
          </li>
          <li>
            <Icon name="money" />
            <Link to="/money">记账</Link>
          </li>
          <li>
            <Icon name="statistics" />
            <Link to="/statistics">统计</Link>
          </li>
        </ul>
      </NavWrapper>
    ); 
};

export default Nav;