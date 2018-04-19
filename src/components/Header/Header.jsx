import React, { Component } from 'react';
import styled from 'styled-components';

import colours from '../../common/colours';

// import HUserAuth from './HUserAuth';

const Container = styled.div`
  position: relative;
  z-index: 99;
  display: flex;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  box-shadow: 0px 4px 10px #6666;
  // margin-bottom: 10px;
  font-family: Ubuntu;
  font-size: 16px;
  color: #666666;
  border-bottom: 4px solid ${colours.guava};
`;
const Item = styled.div`
  margin-right: 20px;
`;

const HUserAuth = props => {
  let checkSignIn;
  if (props.signedIn) {
    checkSignIn = (
      <React.Fragment>
        <Item>My List</Item>
        <Item className={props.className} id="hAuth">
          {props.userName}
        </Item>
      </React.Fragment>
    );
  } else {
    checkSignIn = (
      <React.Fragment>
        <Item>Sign In</Item>
        <Item>Sign Up</Item>
      </React.Fragment>
    );
  }
  return checkSignIn;
};

class Header extends Component {
  render() {
    return (
      <Container id="hContainer">
        <div id="hIcon" />
        <Item id="hTitle">Guava</Item>
        <Item id="hBrowse">Browse</Item>
        <Item id="hSearch">
          <form>
            <input placeholder="Search" />
          </form>
        </Item>
        <HUserAuth signedIn={false} userName="UserName" />
      </Container>
    );
  }
}

export default Header;
