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

const API = "https://api.jikan.moe/manga/";
const renderHTML = (rawHTML: string) =>
  React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

type Props = {
  id: number,
};
type State = {
  data: {
    image_url: string,
    title: string,
    synopsis: string,
    score: number,
    popularity: number,
    rank: number,
  },
};
class Details extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    fetch(API + this.props.id)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Cover src={data.image_url} alt={`Cover for ${data.title}`} />
          <div>
            <Title>{data.title}</Title>
            <div>
              <Feature>Rating: {data.score}</Feature>
              <Feature>Ranked #{data.rank}</Feature>
              <Feature>Popularity Rank: {data.popularity}</Feature>
              <br />
            </div>
            <Item>{renderHTML(data.synopsis)}</Item>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Details;
