import React, {useState}from 'react';
import './Webtoon.css'; //나중에 여기 주소 잘 맞나 실행해보고 확인하기.


function Webtoon(){

    let [데이터,데이터변경] = useState('');
    return(
        <div>
            <WebtoonImg 데이터 = {데이터}/>

            <WebtoonTitle 데이터 = {데이터}/>

            <WebtoonWriter 데이터 = {데이터}/>

            <Platform 데이터 = {데이터}/>

            <WebtoonKeyword 데이터 = {데이터}/>


        </div>



    )

} 


function Webtoon(){

    let [데이터,데이터변경] = useState('Data');
    // 나중에 데이터=> 다른 뱐수명으로 바꾸기

    return(
        <div className='Webtoon'>




        </div>

    )
}

function WebtoonImg(props){
    <div className = "webimg">
    

    </div>

}


function WebtoonTitle(props){
    <div className='webtitle'> 
    
    </div>

}


function WebtoonWriter(props){
    <div className='webwriter'> 
    
    </div>
}


function WebtoonPlatform(props){
    <div className='webplatform'> 
    
    </div>
}


function WebtoonKeyword(props){
    <div className='webkeyword'> 
    
    </div>
}



export default Webtoon;