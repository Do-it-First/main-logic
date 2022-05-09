
import React,{useState} from 'react';
import './App.css';
import Page1 from './component/Page1';
import Page2 from './component/Page2';
import SearchPage from './component/SearchPage';

import Page3 from './component/Page3';
import {
  BrowserRouter, Switch, Route,
} from "react-router-dom";
import axios from 'axios';





function App() {
  


  return (
    <div>

     <BrowserRouter>
      <Switch>

        <Route path="/" exact={true} component={Page1}>
        </Route>

        <Route path="/searchpage" component={SearchPage}>
          <SearchPage/>
        </Route>    


        <Route path="/result/:searchId" component={Page2}> 
          <Page2/>
          2번째 페이지 입니다
        </Route>  

   

        <Route path="/detail/:searchId" component={Page3} > 
          <Page3/>3번째 페이지입니다.
        </Route>   


        <Route path="*" > 
          <div> 없는 페이지입니다.</div>
          

        </Route> 
      </Switch>
    </BrowserRouter> 


  </div>    
  )
}





export default App;
