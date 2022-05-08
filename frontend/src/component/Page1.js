import React,{useEffect, useState} from 'react';
import './Component.css';
import HomeLogo from './HomeLogo';
import SearchBar from './SearchBar';
import {useParams} from 'react-router-dom';
import axios from 'axios';


function Page1(props){

    const [랜덤웹툰,랜덤웹툰변경]=useState("");
    //string은 map을 사용할 수 없기 때문에 object 형태로 변환 시키기 위해 parsing을 해줘야함.
    const [keywords, setKeywords] = useState(
        JSON.parse(localStorage.getItem("keywords" || "[]")
    ));
    //여기서부터 text 있어야 되는지는 잘 모르겟다..
    const [text,setText]=useState("");


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

    //검색어 삭제
    const handleRemoveKeuword = (id) => {
        const nextKeyword = keywords.filter((thisKeyword)=>{
            return thisKeyword.id !== id;
        });
        setKeywords(nextKeyword);
    };

    //검색어 전체 삭제
    const handleClearKeywords = () => {
        setKeywords([]);
    }

    const {imageId} = useParams();
    const [webtoonInfo,setWebtoonInfo] = useState({
        id: "",
        platform:"",
        title:"",
        writer:"",
        thumnail:"",
        genre:"",
        // introduction:""

    });

    const onSubmit = (text) => {
        axios
          .get(`http://localhost:8000/api/v1/webtoon?value=RJATORDJ=${text}`)
          .then((response) => {
            console.log(response);
            setWebtoonInfo(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      useEffect(() => {
        onSubmit(imageId);
      }, [imageId]);



    return(
        <div>
            <HomeLogo/>
            <SearchBar 
            onAddKeyword = {handleAddKeyword}
            keywords={keywords}
            onClearKeywords = {handleClearKeywords}
            onRemoveKeywords={handleRemoveKeuword}
            />




{/* axios 연습용으로 서버에 요청해본 코드  */}


            {/* <button className='btn more' onClick={()=>{
            // 예제코드
            // axios.post('서버url',{id:'coodingapple',pw:1234} );

            axios.get(`http://localhost:8000/api/v1/webtoon?value=RJATORDJ=${text}`)
            .then((result)=>{
                console.log(result.data
                    
                    );
                랜덤웹툰변경([...랜덤웹툰,...result.data]);

            })
            .catch(()=>{
                console.log('실패했어요')
            })

            }}> 랜덤 웹툰 추천받기 </button> */}



            

        </div>
 
    )
}

export default Page1;