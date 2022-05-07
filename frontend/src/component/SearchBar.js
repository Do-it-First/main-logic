
import React, {useState} from "react";
import './Component.css';
import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// 검색창만들기



function SearchBar(props){
  
    const [키워드검색,키워드검색변경] = useState([props.키워드,props.키워드변경]);


    return(
     
      <div>

          <div>
          <input className= "searchBar"
          placeholder="키워드 및 장르를 입력해주세요."
          onChange = {(e)=>{키워드검색변경(e.target.value)}}/>
          {/* onChange = {(e)=>{props.키워드변경(e.target.value)}}/> */}

          </div>

      </div>  

  



     
    )
  }



  
export default SearchBar;


