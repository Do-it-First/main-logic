import React,{useState} from 'react';
import './Component.css';
import HomeLogo from './HomeLogo';
import SearchBar from './SearchBar';
import {useParams} from 'react-router-dom';
import axios from 'axios';


function Page1(props){

    // let 찾은웹툰 = props.키워드.find(function(웹툰){
    //     return 웹툰.키워드 == 키워드
    // });

    let [랜덤웹툰,랜덤웹툰변경] = useState('');

    

    return(
        <div>
            

            <HomeLogo/>
            <SearchBar 키워드={props.키워드}/>


{/* axios 연습용으로 서버에 요청해본 코드  */}
            <button className='btn more' onClick={()=>{
            // 예제코드
            // axios.post('서버url',{id:'coodingapple',pw:1234} );

            axios.get('http://loclhost:8000/api/v1/webtoon')
            .then((result)=>{
                console.log(result.data);
                랜덤웹툰변경([...랜덤웹툰,...result.data]);

            })
            .catch(()=>{
                console.log('실패했어요')
            })

            }}> 랜덤 웹툰 추천받기 </button>



            

        </div>
 
    )
}

export default Page1;