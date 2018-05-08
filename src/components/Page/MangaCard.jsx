// @flow

import * as React from "react";
import styled from "styled-components";

import colours from "../../common/colours";

const Wrapper = styled.div`
  :hover {
    transition: 0.3s;
    box-shadow: 1px 1px 100px ${colours.dark};
    z-index: 99;
  }
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 250px;
  /* height: 420px; */
  box-sizing: border-box;
  box-shadow: 1px 1px 10px #999999;
  background: #fff;
  /* margin: 10px; */
  margin-bottom: 10px;
  padding: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
  font-family: Ubuntu;
`;
const Image = styled.img`
  object-fit: cover;
  width: 210px;
  height: 300px;
  float: left;
  border: 1px solid #999999;
  box-shadow: 1px 1px 5px #666;
  align-self: center;
`;
const Title = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  text-align: center;
  /* flex-grow: 1; */
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Ranks = styled.div`
  div {
    svg {
      width: 12px;
      height: 12px;
      position: relative;
      fill: #ff7575;
      margin-right: 3px;
    }
    color: #d44b4b;
  }
  div:nth-child(2) {
    svg {
      fill: #f39c12;
    }
    color: #d68b12;
  }
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
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
      <div>
        <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
          <path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z" />
        </svg>#{props.popularityRank} POPULARITY
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
          <path d="M25.326 10.137a1.001 1.001 0 0 0-.807-.68l-7.34-1.066-3.283-6.651c-.337-.683-1.456-.683-1.793 0L8.82 8.391 1.48 9.457a1 1 0 0 0-.554 1.705l5.312 5.178-1.254 7.31a1.001 1.001 0 0 0 1.451 1.054L13 21.252l6.564 3.451a1 1 0 0 0 1.451-1.054l-1.254-7.31 5.312-5.178a.998.998 0 0 0 .253-1.024z" />
        </svg>RATING {props.score}
      </div>
    </Ranks>
  </Wrapper>
);

export default MangaCard;
