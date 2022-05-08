import React, {useState,useEffect} from 'react';
import Webtoon from './Webtoon/Webtoon';
import SearchBar from './SearchBar';
import HomeLogo from './HomeLogo';
import './Component.css';
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom';



function Page2(props){

    

    const history= useHistory();
 

    const [id, setId] = useState("키워드");
    const [keywords, setKeywords] = useState(
      JSON.parse(localStorage.getItem("keywords") || "[]")
    );
    //검색어 추가
    const handleAddKeyword = (text) => {
      console.log("text", text);
      const newKeyword = {
        id: Date.now(),
        text: text,
      };
      setKeywords([newKeyword, ...keywords]);
    };
  
    //검색어 삭제
    const handleRemoveKeyword = (id) => {
      const nextKeyword = keywords.filter((thisKeyword) => {
        return thisKeyword.id !== id;
      });
      setKeywords(nextKeyword);
    };
  
    //검색어 전체 삭제
    const handleClearKeywords = () => {
      setKeywords([]);
    };
  
    const { searchId } = useParams();
    const [searchInfo, setSearchInfo] = useState();
    const [searched, setSearched] = useState(false);
  
    useEffect(() => {
      searchId && onSubmit(searchId);
    }, []);
  
    const onSubmit = (text) => {
      axios
        .get(`http://localhost:5001/api/v1/search?text=${text}`)
        .then((response) => {
          console.log(response);
          setSearchInfo(response.data);
          setSearched(true);
        })
        .catch((error) => {
          console.log(error);
        });
    };


    return(


        <div>


            <HomeLogo/>
        
            <SearchBar/>

                <div class="row">
             
{/* 꽃 예제보고 따라치긴 했는데 어떻게 구현될지는 모름 */}


                     <Webtoon 
                     />
                     <Webtoon/>
                     <Webtoon/>
                     <Webtoon/>

                     {/* {
                         예시.map((a,i)=>{
                             return <Webtoon 예시={예시[i]} i={i} key={i} />
                         })

                     } */}
                    
                </div>    


         </div>
        
    )



}


// function ManyWebtoon(){

//     검색된웹툰.map((a,i)=>{
//         return <Webtoon 검색된웹툰 ={검색된웹툰[i]}/>
//     })





// }

export default Page2;