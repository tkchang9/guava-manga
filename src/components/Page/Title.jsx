import React from 'react';
import styled from 'styled-components';

import colours from '../../common/colours';

const Wrapper = styled.div`
  font-family: IBM Plex Sans;
  font-size: 3rem;
  color: ${colours.blue};
  text-align: center;
  padding: 30px 20px 40px 20px;
  margin-left: 5%;
  display: inline-block
  position: relative;
  line-height: 60%;
`;

const Title = props => {
  return <Wrapper>{props.title}</Wrapper>;
};

export default Title;
