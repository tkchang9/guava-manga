// @flow
import React from "react";
import styled, { keyframes } from "styled-components";

import colours from "../../common/colours";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  animation: ${spin} 2s infinite linear;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid ${colours.guava};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: auto;
  margin-top: 50px;
`;

const Spinner = () => <Loader />;

export default Spinner;
