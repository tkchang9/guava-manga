// @flow

import * as React from "react";
import styled from "styled-components";

import Header from "../Header/Header";

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
`;
const Cover = styled.img`
  height: 500px;
`;
const Title = styled.div`
  font-size: 4rem;
`;
const Feature = styled.div``;
const Item = styled.div``;

type Props = {
  manga: {
    attributes: {
      synopsis: string,
      canonicalTitle: string,
      averageRating: string,
      ratingRank: number,
      popularityRank: number,
      posterImage: {
        tiny: string,
        small: string,
        medium: string,
        large: string,
        original: string
      }
    }
  }
};

const Details = (props: Props) => {
  const mAttr = props.manga.attributes;
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Cover
          src={mAttr.posterImage.original}
          alt={`Cover for ${mAttr.canonicalTitle}`}
        />
        <div>
          <Title>{mAttr.canonicalTitle}</Title>
          <div>
            <Feature>Rating: {mAttr.averageRating}%</Feature>
            <Feature>Ranked #{mAttr.ratingRank}</Feature>
            <Feature>Popularity Rank: {mAttr.popularityRank}</Feature>
          </div>
          <Item>{mAttr.synopsis}</Item>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Details;
