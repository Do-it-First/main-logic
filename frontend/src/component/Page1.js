import React,{useEffect, useState} from 'react';
import './Component.css';
import HomeLogo from './HomeLogo';
import SearchBar from './SearchBar';



function Page1(){

    //string은 map을 사용할 수 없기 때문에 object 형태로 변환 시키기 위해 parsing을 해줘야함.
    const [keywords, setKeywords] = useState(
        JSON.parse(localStorage.getItem("keywords" || "[]")
    ));



    //keyword에 변화가 일어날 떄만 랜더링
    useEffect(()=>{
        localStorage.setItem("keywords",JSON.stringify(keywords));
    },[keywords]);    


    //검색어 추가
    const handleAddKeyword = (text) => {
        console.log("text",text);
        const newKeyword={
            id: DataTransfer.now(),
            text: text,
        };
        setKeywords([newKeyword,...keywords]);
    }; 




    return(
        <div>
            <HomeLogo/>
            
            <SearchBar onAddKeyword = {handleAddKeyword}/>

        </div>
 
    )
}




export default Page1;