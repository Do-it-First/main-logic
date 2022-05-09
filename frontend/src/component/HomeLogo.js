
import React, {useState} from "react";
import {Link,useHistory} from 'react-router-dom';


function HomeLogo(){

    let history = useHistory(); 
    
    return(
        <div className="Home">

            <div className="gohome" onClick={()=>{history.push('/')}}> 

                <h1>웹툰통합검색 <p> 플랫폼</p></h1>
                
            </div>    


        </div>

       
    )
    
    
}


export default HomeLogo;

