//

import React, {useState} from "react";
import {Link,useHistory} from 'react-router-dom';


function HomeLogo(){

    let history = useHistory(); 
    
    return(
        <div className="Home">

            {/* <div className="gohome" on click={()=>{history.push('/')}}>  */}
                <h1> < Link to="/">웹툰asdf통합플랫폼 </Link> </h1>

      

        </div>

       
    )
    
    
}



export default HomeLogo;


// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


// 우리 홈페이지 로고 겸 + 누르면 홈으로 이동하는 컴포넌트 만들기


// function HomeLogo(){

//     const HomeLogo = (props) =>{
//         const goHome= props.
//     }    

//     return (
//         <BrowserRouter>
//           <div className="Homelogo">
//             <Header />
//             <Switch>
//               <Route exact path="/">
//                 <DayList />
//               </Route>
//               <Route path="/day">
//                 <Day />
//               </Route>
//             </Switch>
//           </div>
//         </BrowserRouter>
//       );
//     }
     
//     export default HomeLogo;
    
    
