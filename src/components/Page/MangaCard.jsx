// @flow

import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 250px;
  height: 420px;
  box-sizing: border-box;
  box-shadow: 1px 1px 10px #666;
  background: #fff;
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;
const Image = styled.img`
  object-fit: cover;
  width: 210px;
  height: 300px;
  float: left;
  border: 1px solid #666;
  box-shadow: 1px 1px 5px #666;
  align-self: center;
`;
const Title = styled.div`
  font-size: 1.5rem;
  text-align: center;
  /* flex-grow: 1; */
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Ranks = styled.div`
  div {
    justify-self: flex-start;
  }
  div:nth-child(2) {
    color: red;
  }
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;

type Props = {
  title: string,
  imageUrl: string,
  popularityRank: number,
  score: number,
};

const MangaCard = (props: Props) => (
  <Wrapper>
    <Image src={props.imageUrl} />
    <Title>{props.title}</Title>
    <Ranks>
      <div>#{props.popularityRank} Popularity</div>
      <div>Rating: {props.score}</div>
    </Ranks>
  </Wrapper>
);

export default MangaCard;
