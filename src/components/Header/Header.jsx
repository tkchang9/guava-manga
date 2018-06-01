// @flow

import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import colours from "../../common/colours";

import guava from "../../common/img/guava/guava.svg"; // eslint-disable-line

// import HUserAuth from './HUserAuth';

const Container = styled.div`
  position: relative;
  z-index: 99;
  display: flex;
  padding: 0.7rem;
  font-family: Ubuntu;
  font-size: 16px;
  color: #666666;
  /* border-bottom: 6px solid ${colours.guava}; */
  box-shadow: 0px 0px 5px black;
  align-items: center;
  margin-bottom: 30px;
  background-color: ${colours.blueA};
`;
const Item = styled(Link)`
  text-decoration: none;
  color: white;
  margin-right: 20px;
`;
const Image = styled.embed`
  height: 25px;
  margin-right: 5px;
  pointer-events: none; /*needed to enable links for embed*/
`;
const SearchBox = styled.form`
  margin-left: auto;
  margin-right: 20px;
`;
const Title = styled(Link)`
  text-decoration: none;
  color: white;
  margin-right: 40px;
  font-size: 1.5rem;
  text-shadow: -1px 0 brown, 0 1px brown, 1px 0 brown, 0 -1px brown;
`;

const HUserAuth = (props: { signedIn: boolean, userName: string }) => {
  let checkSignIn;
  if (props.signedIn) {
    checkSignIn = (
      <React.Fragment>
        <Item to="/browse/">My List</Item>
        <Item to="/browse/" id="hAuth">
          {props.userName}
        </Item>
      </React.Fragment>
    );
  } else {
    checkSignIn = (
      <React.Fragment>
        <Item to="/browse/">Sign In</Item>
        <Item to="/browse/">Sign Up</Item>
      </React.Fragment>
    );
  }
  return checkSignIn;
};

// TODO:
// type Props = {
//
// };

const Header = () => (
  <Container id="hContainer">
    <Link to="/browse/">
      <Image src="/img/guava.svg" id="hIcon" />
    </Link>
    <Title to="/browse/" id="hTitle">
      guava
    </Title>
    <Item to="/browse/" id="hBrowse">
      Browse
    </Item>
    <SearchBox id="hSearch">
      <input placeholder="Search" />
    </SearchBox>
    <HUserAuth signedIn={false} userName="UserName" />
  </Container>
);

export default Header;
