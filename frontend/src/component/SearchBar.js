import React, {useState} from "react";
import './Component.css';

// 검색창만들기



function SearchBar(props){
  
    return(
  
      <div className='searchKeyword'>
        <input onChange = {(e)=>{props.키워드변경(e.target.value)}}/>
  
      </div>
    )
  }

export default SearchBar;
