// @flow

import * as React from "react";

import styled from "styled-components";

import colours from "../../common/colours";

import Title from "./Title";
import MangaCard from "./MangaCard";
// import preload from "../../../kitsu_trending.json";
import preload from "../../../jikan_top.json";

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
// const resultD = preload.data;
const resultD = preload.top;

const Browse = () => (
  <React.Fragment>
    <Header />
    <Wrapper>
      <Title title="Browse: Top trending" />
      <Container>
        {resultD.map(manga => (
          <MangaCard
            key={manga.mal_id}
            imageUrl={manga.image_url.replace("/r/100x140", "")}
            title={manga.title}
            popularityRank={manga.rank}
            score={manga.score}
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
