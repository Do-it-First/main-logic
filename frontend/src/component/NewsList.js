import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../../node_modules/axios/index";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {
//   title: '제목',
//   description: '내용',
//   url: 'https://google.com',
//   urlToImage: 'https://via.placeholder.com/160',
// };

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoding(true);
      try {
        const response = await axios.get("/api/v1/crawling/webtoons/");
        setArticles(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoding(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => ( 
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
