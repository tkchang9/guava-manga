// @flow

import * as React from "react";

import styled from "styled-components";

import colours from "../../common/colours";

import Title from "./Title";
import MangaCard from "./MangaCard";
import preload from "../../../kitsu_trending.json";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Wrapper = styled.div`
  margin: auto;
  position: relative;
  max-width: 1600px;
  background: ${colours.pyellow};
`;

// array prototype functions
// let resultD = preload.data.filter(manga => manga.attributes.averageRating > 80);
const resultD = preload.data;

const Browse = () => (
  <React.Fragment>
    <Header />
    <Wrapper>
      <Title title="Browse: Top trending" />
      <Container>
        {/* <img src={image} alt={`Manga cover of ${canonicalTitle}`} />
        <h1>{canonicalTitle}</h1>
        <h2>{synopsis}</h2> */}
        {resultD.map(manga => (
          <MangaCard
            key={manga.id}
            imageUrl={manga.attributes.posterImage.large}
            title={manga.attributes.canonicalTitle}
            ageRatingGuide={manga.attributes.ageRatingGuide}
            subtype={manga.attributes.subtype}
            popularityRank={manga.attributes.popularityRank}
          />
        ))}
        {/* <pre>
          <code>{JSON.stringify(resultD, null, 4)}</code>
        </pre> */}
      </Container>
    </Wrapper>
    <Footer />
  </React.Fragment>
);

export default Browse;
