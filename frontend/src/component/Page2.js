import React, {useState,useEffect} from 'react';
import Webtoon from './Webtoon/Webtoon';
import SearchBar from './SearchBar';
import HomeLogo from './HomeLogo';
import './Component.css';
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom';
import History from './history';


//page2 = SearchResult

function Page2(){

    const history= useHistory();
    const [id, setId] = useState("판타지");
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
  
    const onSubmit = async(text) => {
      await axios
        // .get(`http://localhost:8000/api/v1/webtoon?value=RJATORDJ=${text}`)
        // .get(`http://localhost:8000/api/v1/webtoon?text=${text}`)
        .get(`http://localhost:8000/api/v1/search/?search=${text}`)

        // .get(`http://localhost:8000/api/v1/webtoon.json`,{
        //   params: {
        //     genre:{text}
        //   },

        // })

        .then((response) => {
          console.log(response.data);
          //여기 예제에서 변경해봄. 이게 맞나 잘 모르겟다
          setSearchInfo(response.data);
          // setSearchInfo([...searchInfo,...response.data]);
          
          setSearched(true);
        })
        .catch((error) => {
          console.log(error);
        });
    };


    

    return(

        <div>
            <HomeLogo/>
            <SearchBar calssName="searchBar" onAddKeyword={handleAddKeyword}></SearchBar>
            {/* <History
              keywords={keywords}
              onClearKeywords={handleClearKeywords}
              onRemoveKeyword={handleRemoveKeyword}
              /> */}

            {/* <div className="flex flex-wrap justify-center"> */}
            
            <div>  
              {searched &&
                searchInfo?.idList?.map((props, index) => (
                  <div key={index}>
                    <Webtoon
                      thumbnail={props.thumbnail}
                      title={props.title}
                      writer={props.writer}
                      platform={props.platform}
                      genre={props.genre}
                      inproduction={props.introduction}
                      // onClick={() => history.push(`/detail/${props.id}`)}

                    />

                    


                  </div>
                ))}
              
              <Webtoon/> 시험용 

               

            </div>

 
         </div>
        
    )



}



export default Page2;