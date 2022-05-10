import React from "react";
import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 140px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
    p {
      margin: 0;
      line-height: 1;
      margin-top: 0.1rem;
      white-space: normal;
    }
    p {
      margin: 0;
      line-height: 1;
      margin-top: 0.5rem;
      white-space: normal;
    }
    p {
      margin: 0;
      line-height: 1;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const {
    title,
    introduction,
    detail_link,
    platform,
    writer,
    genre,
    thumbnail,
  } = article;
  return (
    <NewsItemBlock>
      {thumbnail && (
        <div className="thumbnail">
          <a href={detail_link} target="_blank" rel="noopener noreferrer">
            <img src={thumbnail} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={detail_link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>작가: {writer}</p>
        <p>연재처: {platform}</p>
        <p>장르: {genre}</p>
        <p>{introduction}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
