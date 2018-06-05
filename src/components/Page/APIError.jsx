// @flow
import React from "react";
import styled from "styled-components";

import guava from "../../common/img/guava/guava.svg"; // eslint-disable-line

import colours from "../../common/colours";

const Body = styled.div`
  h1 {
    color: ${colours.guava};
  }
  font-family: Ubuntu;
  text-align: center;
  color: black;
`;
const Image = styled.img`
  height: 200px;
`;

const APIError = () => (
  <Body>
    <Image src="/img/guava.svg" />
    <h1>Oops</h1>
    An error retrieving the data has occurred.<br />
    Please try again later.
  </Body>
);

export default APIError;
