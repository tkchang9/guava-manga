// @flow

import * as React from "react";
import styled from "styled-components";

import colours from "../../common/colours";

import guava from "../../common/img/guava/guava.svg";

// import HUserAuth from './HUserAuth';

const Container = styled.div`
  position: relative;
  z-index: 99;
  display: flex;
  padding: 0.5rem;
  font-family: Ubuntu;
  font-size: 16px;
  color: #666666;
  border-bottom: 6px solid ${colours.guava};
  align-items: center;
`;
const Item = styled.div`
  margin-right: 20px;
`;
const Image = styled.embed`
  height: 25px;
  margin-right: 5px;
`;

const HUserAuth = (props: { signedIn: boolean, userName: string }) => {
  let checkSignIn;
  if (props.signedIn) {
    checkSignIn = (
      <React.Fragment>
        <Item>My List</Item>
        <Item id="hAuth">{props.userName}</Item>
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

// TODO:
// type Props = {
//
// };

class Header extends React.Component<{}> {
  render() {
    return (
      <Container id="hContainer">
        <Image src="/img/guava.svg" id="hIcon" />
        <Item id="hTitle">Guava</Item>
        <Item id="hBrowse">Browse</Item>
        <Item id="hSearch">
          <input placeholder="Search" />
        </Item>
        <HUserAuth signedIn={false} userName="UserName" />
      </Container>
    );
  }
}

export default Header;
