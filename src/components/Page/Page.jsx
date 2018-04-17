import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MangaCard from './MangaCard';

import preload from '../../../kitsu_trending.json';

// array prototype functions
let resultD = preload.data.filter(manga => manga.attributes.averageRating > 80);

class Page extends Component {
  render() {
    // const id = resultD;
    // const link = resultD.links.self;
    // const {
    //   canonicalTitle,
    //   synopsis,
    //   ageRatingGuide,
    //   averageRating,
    //   status,
    //   userCount
    // } = resultD.attributes;
    // const image = resultD.attributes.posterImage.large;
    return (
      <div>
        {/* <img src={image} alt={`Manga cover of ${canonicalTitle}`} />
        <h1>{canonicalTitle}</h1>
        <h2>{synopsis}</h2> */}
        {resultD.map(manga => (
          <MangaCard
            key={manga.id}
            imageUrl={manga.attributes.posterImage.large}
            title={manga.attributes.canonicalTitle}
            status={manga.attributes.status}
            chapterCount={manga.attributes.chapterCount}
            volumeCount={manga.attributes.volumeCount}
            synopsis={manga.attributes.synopsis}
          />
        ))}
        <pre>
          <code>{JSON.stringify(resultD, null, 4)}</code>
        </pre>
      </div>
    );
  }
}

export default Page;
