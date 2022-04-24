
import React,{useState} from 'react';
import './App.css';
import HomeLogo from './component/HomeLogo';
import SearchBar from './component/SearchBar';


function App() {
  
  const [키워드,키워드변경] = useState();

  return (
    <div>
    
      <HomeLogo/>
      <SearchBar/>

      

    </div>
  )
}



export default App;