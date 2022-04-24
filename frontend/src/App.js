
import React,{useState} from 'react';
import './App.css';
import HomeLogo from './component/HomeLogo';


function App() {
  
  const [키워드,키워드변경] = useState();

  return (
    <div>
    
      <HomeLogo/>
      <SearchBar/>

      

    </div>
  )
}

function SearchBar(props){
  
  return(

    <div className='searchKeyword'>
      <input onChange = {(e)=>{props.키워드변경(e.target.value)}}/>

    </div>
  )
}

export default App;