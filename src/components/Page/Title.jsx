import React from 'react';
import styled from 'styled-components';

import colours from '../../common/colours';

const Wrapper = styled.div`
  font-family: IBM Plex Sans;
  font-size: 3rem;
  text-align: center;
  padding: 50px 20px 20px 20px;
  margin-left: 5%;
  display: inline-block
  position: relative;
  border-bottom: 4px solid ${colours.green};
  line-height: 60%;
`;

const Title = props => {
  return <Wrapper>{props.title}</Wrapper>;
};

export default Title;
