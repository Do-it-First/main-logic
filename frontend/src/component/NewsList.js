import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../../node_modules/axios/index";
import NewsItem from "./NewsItem";
import SearchBar from "./SearchBar";
import HomeLogo from "./HomeLogo";
import { useParams } from "react-router-dom";


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


const NewsList = () => {

  const { searchId } = useParams();
  const [hits, setArticles] = useState(null);
  const [loading, setLoding] = useState(false);
  

 

  useEffect(() => {
    searchId && fetchData(searchId);
  }, [] );



  const fetchData = async (text) => {

    setLoding(true);
    try {

      console.log(text);
      const response = await axios.get(`/api/v1/search/?search=${text}`
);
      setArticles(response.data.hits.map((one) => one._source));
  
    } catch (e) {
      console.log(e);
    }
    setLoding(false);
  };

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  if (!hits) {
    return null;
  }



  
  return (
    <div>

      <NewsListBlock>
        {hits.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
      </NewsListBlock>
    </div>
  );
};

export default NewsList;




