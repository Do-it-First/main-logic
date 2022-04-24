import React, {useState} from 'react';
import Webtoon from './Webtoon/Webtoon';
import SearchBar from './SearchBar';
import HomeLogo from './HomeLogo';


function Page2(){

    let [검색된웹툰,검색된웹툰변경] = useState();  //  키워드로 걸러진 웹툰


    return(


        <div>

        
            <SearchBar/>

            <HomeLogo/>

            <Webtoon/>  


         </div>
        
    )



}


function ManyWebtoon(){

    검색된웹툰.map((a,i)=>{
        return <Webtoon 검색된웹툰 ={검색된웹툰[i]}/>
    })





}

export default Page2;