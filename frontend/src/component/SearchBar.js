
import React, {useState} from "react";
import './Component.css';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import {Button} from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";

// 검색창만들기



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

  // const hasKeyword = !!text;/


    return(
     
      <div>

          <div>
          <input className= "searchBar"
          placeholder="키워드 및 장르를 입력해주세요."
          active={handleClearKeyword}
          value={text}
          onChange = {handleKeyword}
          onkeyDown={handleEnter}
          />
          <Button variant="primary"
          onClick={()=>{history.push(`/searchresult/${text}`)}}> 검색 </Button>
          
          </div>

      </div>  
    )
  }

export default SearchBar;
