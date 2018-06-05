// @flow

import * as React from "react";
import styled from "styled-components";

import Header from "../Header/Header";
import Spinner from "./Spinner";
import APIError from "./APIError";

import colours from "../../common/colours";

const Container = styled.div`
  margin-left: 35px;
  margin-right: 35px;
  display: grid;
  grid-auto-flow: column;
`;
const Cover = styled.img`
  /* max-height: 420px; */
  width: 250px;
  /* float: left; */
  margin: 10px;
  border: 1px solid #999999;
  box-shadow: 1px 1px 5px #666;
`;
const Title = styled.div`
  font-size: 4rem;
`;
const Author = styled.div`
  font-size: 0.9rem;
  color: #333;
`;
const Feature = styled.div``;
const Heart = styled.svg`
  width: 12px;
  height: 12px;
  position: relative;
  fill: #ff7575;
  margin-right: 3px;
`;
const Star = styled.svg`
  width: 12px;
  height: 12px;
  position relative;
  fill: #f39c12;
  margin-right: 3px;
`;
const Bars = styled.svg`
  width: 12px;
  height: 12px;
  postion: relative;
  fill: ${colours.blue};
  margin-right: 3px;
`;
const GenreButton = styled.div`
  border-radius: 3px;
  background-color: ${colours.greenA};
  color: black;
  font-size: 0.8rem;
  padding: 3px 5px 3px 5px;
  margin: 3px;
  display: inline-block;
`;
const ReadingList = styled.div`
  div {
    :nth-child(1) {
      background: ${colours.buttons.blue};
    }
    :nth-child(2) {
      background: ${colours.buttons.green};
    }
    :nth-child(3) {
      background: ${colours.buttons.purple};
    }
    color: white;
    border-radius: 5px;
    margin: 3px;
    text-align: center;
    font-size: 0.9rem;
    padding: 0.5rem;
    width: 120px;
  }
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
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
    genre: [{ url: string, name: string }],
    author: [{ url: string, name: string }],
  },
  loaded: boolean,
  error: boolean,
};
class Details extends React.Component<Props, State> {
  state = {
    data: {
      image_url: "",
      title: "",
      synopsis: "",
      score: 0,
      popularity: 0,
      rank: 0,
      genre: [{ url: "", name: "" }],
      author: [{ url: "", name: "" }],
    },
    loaded: false,
    error: false,
  };

  componentDidMount() {
    fetch(API + this.props.id)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => this.setState({ data, loaded: true }))
      .catch((error) => {
        console.log(`The error is: ${error}`);
        this.setState({ error: true });
      });
  }

  render() {
    const { data } = this.state;
    if (this.state.loaded) {
      return (
        <React.Fragment>
          <Header />
          <Container>
            <div>
              <Cover src={data.image_url} alt={`Cover for ${data.title}`} />
              <ReadingList>
                <div>Plan to Read</div>
                <div>Currently Reading</div>
                <div>Completed</div>
              </ReadingList>
            </div>
            <div>
              <Title>{data.title}</Title>
              {data.author.map(author => <Author key={Math.random()}>{author.name}</Author>)}
              <br />
              <div>
                <Feature>
                  <Star xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                    <path d="M25.326 10.137a1.001 1.001 0 0 0-.807-.68l-7.34-1.066-3.283-6.651c-.337-.683-1.456-.683-1.793 0L8.82 8.391 1.48 9.457a1 1 0 0 0-.554 1.705l5.312 5.178-1.254 7.31a1.001 1.001 0 0 0 1.451 1.054L13 21.252l6.564 3.451a1 1 0 0 0 1.451-1.054l-1.254-7.31 5.312-5.178a.998.998 0 0 0 .253-1.024z" />
                  </Star>
                  Rating: {data.score}
                </Feature>
                <Feature>
                  <Bars xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280.027 280.027">
                    <g>
                      <path d="M17.502,105.009h35.003c9.661,0,17.502,7.832,17.502,17.502v113.761c0,9.67-7.841,17.502-17.502,17.502H17.502C7.841,253.774,0,245.942,0,236.272V122.511C0,112.841,7.841,105.009,17.502,105.009z" />
                      <path d="M122.512,26.252h35.003c9.661,0,17.502,7.841,17.502,17.502v192.519c0,9.67-7.841,17.502-17.502,17.502h-35.003c-9.661,0-17.502-7.832-17.502-17.502V43.753C105.01,34.092,112.851,26.252,122.512,26.252z" />
                      <path d="M227.522,70.006h35.003c9.661,0,17.502,7.841,17.502,17.502v148.765c0,9.67-7.841,17.502-17.502,17.502h-35.003c-9.661,0-17.502-7.832-17.502-17.502V87.508C210.021,77.847,217.861,70.006,227.522,70.006z" />
                    </g>
                  </Bars>
                  Ranked #{data.rank}
                </Feature>
                <Feature>
                  <Heart viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z" />
                  </Heart>
                  Popularity Rank: {data.popularity}
                </Feature>
                <div>
                  {data.genre.map(genre => (
                    <GenreButton key={Math.random()}>{genre.name}</GenreButton>
                  ))}
                </div>
                <br />
              </div>
              <Item>{renderHTML(data.synopsis)}</Item>
            </div>
          </Container>
          <div>
            <div>Manga information here.</div>
            <div>
              <h1>Alternative Names</h1>
              <div>{data.title_english}</div>
              <div>{data.title_synonyms}</div>
              <div>{data.title_japanese}</div>
            </div>
            <div>
              <h1>Publishing Status</h1>
              <div>{data.status}</div>
            </div>
            <div>
              <h1>Publishing Dates</h1>
              <div>{data.published_string}</div>
            </div>
            <div>
              <h1>Latest Release</h1>
              <div>Info not in API</div>
            </div>
          </div>
        </React.Fragment>
      );
    } else if (this.state.error) {
      return (
        <React.Fragment>
          <Header />
          <APIError />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Header />
        <Spinner />
      </React.Fragment>
    );
  }
}

export default Details;
