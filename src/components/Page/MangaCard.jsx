import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 48%;
  min-width: 500px;
  max-width: 700px;
  box-sizing: border-box;
  box-shadow: 1px 1px 10px #666;
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;
const Image = styled.img`
  width: 35%;
  float: left;
  margin: 5px;
  margin-right: 10px;
  // border: 1px solid #666;
  box-shadow: 1px 1px 5px #666;
`;
class MangaCard extends Component {
  render() {
    return (
      <Wrapper>
        <Image src={this.props.imageUrl} />
        <div>
          <h1>{this.props.title}</h1>
          <div>
            {/* <div>{this.props.status}</div>
            <div>{this.props.chapterCount}</div>
            <div>{this.props.volumeCount}</div> */}
            <p>{this.props.synopsis}</p>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default MangaCard;
