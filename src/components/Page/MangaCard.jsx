import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;
const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;
class MangaCard extends Component {
  render() {
    return (
      <Wrapper>
        <Image src={this.props.imageUrl} />
        <div>
          <h1>{this.props.title}</h1>
          <div>
            <div>{this.props.status}</div>
            <div>{this.props.chapterCount}</div>
            <div>{this.props.volumeCount}</div>
          </div>
          <h4>{this.props.synopsis}</h4>
        </div>
      </Wrapper>
    );
  }
}

export default MangaCard;
