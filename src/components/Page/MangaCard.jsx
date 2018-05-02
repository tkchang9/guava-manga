// @flow

import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 250px;
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
`;
const Title = styled.div`
  font-size: 2rem;
  text-align: center;
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
    <div>
      <Title>{props.title}</Title>
      <div>
        <div>#{props.popularityRank} Popularity Rank</div>
        <div>Rating: {props.score}</div>
      </div>
    </div>
  </Wrapper>
);

export default MangaCard;
