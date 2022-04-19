import React from react;
import './Webtoon.css'; //나중에 여기 주소 잘 맞나 실행해보고 확인하기.

// import WebtoonImg from './Webtoon/~~' 여기 채워야함
// import WebtoonTitle from './/Webtoon/~~' 여기 채워야함
// import WebtoonWriter from './Webtoon/~~' 여기 채워야함
// import WebtoonKeyword from './Webtoon/~~' 여기 채워야함
// import Platform from './Webtoon/~~' 여기 채워야함

function Webtoon(){

    return(
        <div>
            <WebtoonImg/>

            <WebtoonTitle/>

            <WebtoonWriter/>

            <WebtoonKeyword/>

            <Platform/>
        </div>



    )

} 

export default Webtoon;