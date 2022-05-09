
import React, {useState} from "react";
import './Component.css';
import { Link, useHistory } from "react-router-dom";
import {Button} from 'react-bootstrap';
import styled, { css } from "styled-components";
// import { useNavigate } from "react-router-dom";

// 검색창만들기

const horizontalCenter = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  border: 2px solid #0000ff;
  background-color: #ffffff;
  padding: 15px 50px;
  box-sizing: border-box;
  margin-top: 0px;
`;

//Link태그의 스타일을 입히는거임(페이지이동하는 버튼)
//horizontalCenter 스타일 컴포넌트를 믹스인하여 속성값 전달
//홈으로 가기 위한 뒤로가기 버튼입니다
const ArrowIcon = styled(Link)`
  ${horizontalCenter}
  left: 18px;
  display: block;
  width: 21px;
  height: 18px;
  background-position: -164px -343px;
  vertical-align: top;
  background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
  background-size: 467px 442px;
  background-repeat: no-repeat;
`;

const SearchIcon = styled.span`
  ${horizontalCenter}
  right: 18px;
  width: 24px;
  height: 24px;
  background-position: -356px -260px;
  display: inline-block;
  overflow: hidden;
  color: transparent;
  vertical-align: middle;
  background-image: url(https://i.ibb.co/j6vk8Pd/sp-search-623c21.png);
  background-size: 467px 442px;
  background-repeat: no-repeat;
`;

//글자를 입력하면 RemoveIcon이 나오게 되고 누르면 input의 value값이 사라집니다
const RemoveIcon = styled.span`
  ${horizontalCenter}
  right: 0px;
  width: 20px;
  height: 20px;
  background-position: -389px -29px;
  display: inline-block;
  overflow: hidden;
  color: transparent;
  vertical-align: top;
  background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
  background-size: 467px 442px;
  background-repeat: no-repeat;
  top: 8px;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  background-color: #fff;
  font-weight: 700;
  font-size: 16px;
  box-sizing: border-box;
  position: relative;
  top: -4px;

  ${({ active }) =>
    active &&
    `
    padding-right: 25px; 
  `};
`;





function SearchBar(onAddKeyword){
  
    // const [키워드검색,키워드검색변경] = useState([props.키워드,props.키워드변경]);


  const [text,setText] = useState("");
  const history= useHistory();


  const handleKeyword = (e)=>{
      setText(e.target.value);
    };  


  const handleEnter = (e) => {
    if (text && e.keyCode === 13) {

      //엔터일때 부모의 addkeyword에 전달
      onAddKeyword(text);
      setText("");
      history.push(`/searchresult/${text}`);
    
    }
  };

  const handleClearKeyword = () => {
    setText("");
  };

  const hasKeyword = !!text;


    return(
     

    <div className="w-50 mx-auto mt-8">
      <Container className="rounded-full h-12">
        <ArrowIcon to="/" />
        <InputContainer>
          <Input
            placeholder="'키워드'및'장르'를 입력해주세요."
            active={hasKeyword}
            value={text}
            onChange={handleKeyword}
            onKeyDown={handleEnter}
          />

          {text && <RemoveIcon onClick={handleClearKeyword} />}
        </InputContainer>
        <SearchIcon onClick={() => history.push(`/searchresult/${text}`)} />
      </Container>
    </div>





      // <div>

      //     <div>
      //       <input className= "searchBar"
      //       placeholder="키워드 및 장르를 입력해주세요."
      //       active={handleClearKeyword}
      //       value={text}
      //       onChange = {handleKeyword}
      //       onkeyDown={handleEnter}
      //       />
            
      //       {text && <RemoveIcon onClick={handleClearKeyword} />}
      

      //       <Button variant="primary"
      //       onClick={()=>{history.push(`/searchresult/${text}`)}}> 검색 </Button>
            
      //     </div>

      // </div>  




    )
  }

export default SearchBar;
