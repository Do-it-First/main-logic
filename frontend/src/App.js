//메인창
import React from 'react';
import './App.css';
import MySearchBar from './component/MySearchBar';
import HomeLogo from './component/HomeLogo';

function App() {
  
  const searchItems = ["판타지", "로맨스", "무협"]

  return (
    <div>
    
      <HomeLogo/>

      <MySearchBar searchItems={searchItems}/> 

      

    </div>
  )
}

export default App;