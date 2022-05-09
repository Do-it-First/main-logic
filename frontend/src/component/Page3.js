import React, {useState} from 'react';
import Webtoon from './Webtoon/Webtoon';
import SearchBar from './SearchBar';
import HomeLogo from './HomeLogo';
import './Component.css';
import {Button} from 'react-bootstrap';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import History from "./history.js";



import {useHistory} from 'react-router-dom';



//page3 = detail

function Page3({id,thumbnail,title,writer,genre,platform,introduction}){


    const [pick,setPick] = useState();

    return(

        <div>
        
            <HomeLogo/>

            <SearchBar/>



            <Webtoon /> 


            <Goplatform />


            <Introduction/>


    
        </div>
        
    
    )

}


function Introduction(){

    return(
        <div className='introduction'>
           <div> DB에서 작품소개 끌어오기. 
               {/* {deteai_link}  */}
            </div>
        </div>
    )
    
}

function Goplatform(){
    return(
        <div className='goplatform'>
            <Button variant="primary">작품 보러가기</Button>
            {/* <div className='btn-go'> 작품보러가기 </div>       */}

        </div>
    )
}


// function 작품보러가기(){
    
//     return
// }


export default Page3;