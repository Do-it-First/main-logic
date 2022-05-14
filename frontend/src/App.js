import React from 'react';
import './App.css';
import Page1 from './component/Page1';
import Page2 from './component/Page2';
import HomeLogo from './component/HomeLogo';

import {
  BrowserRouter, Switch, Route,
} from "react-router-dom";


function App() {
  return (
    <div>

     <BrowserRouter>
      <Switch>

        <Route path="/" exact={true} component={Page1}>
        <Page1/> 
        </Route>


        <Route path="/result/:searchId" exact={true} component={Page2}>
          <Page2/>
          검색 결과페이지 입니다.
        </Route>  

   


        <Route path="*" > 
          <div>
            <HomeLogo/>
            <div> 없는 페이지입니다. <p>로고를 클릭하여 홈화면으로 돌아가세요.</p></div>

          </div>
          
          
          

        </Route> 
      </Switch>
    </BrowserRouter> 


  </div>    
  )
}





export default App;
