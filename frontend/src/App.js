
import React,{useState} from 'react';
import './App.css';
import Page1 from './component/Page1';
import Page2 from './component/Page2';
import Page3 from './component/Page3';
import {
  BrowserRouter, Switch, Route,
} from "react-router-dom";
import axios from 'axios';




function App() {
  
  const [키워드,키워드변경] = useState("");

  return (
    <div>

     <BrowserRouter>
      <Switch>

        <Route path="/" exact={true} component={Page1}>
          {/* <Page1 키워드={키워드}/> */}

        </Route>

        <Route path="/detail/1" component={Page2}> 
          <Page2 키워드={키워드}/>
          2번째 페이지 입니다

        </Route>     

        <Route path="/detail/2" component={Page3} > 
          <Page3/> 3번째 페이지입니다.
        </Route>   


        <Route path="/:id"> 
          <div> 다시 검색해주세요.</div>
          

        </Route> 
      </Switch>
    </BrowserRouter> 


  </div>    
  )
}





export default App;
