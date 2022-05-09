import React, {useState} from 'react';
import './Webtoon.css'; //나중에 여기 주소 잘 맞나 실행해보고 확인하기.
import {Link,useParams,useHistory} from 'react-router-dom';
import PropTypes from "prop-types";
// import {useParams} from 'react-router-dom';


function Webtoon({id,thumbnail,title,writer,genre,platform,introduction,detail_link}){    
    
//     const {searchId} = useParams();
//     const [searchInfo,setSearchInfo] = useState({
//     id: "",
//     platform:"",
//     title:"",
//     writer:"",
//     thumbnail:"",
//     genre:"",
//     introduction:""

// });

    let history = useHistory();  

    return (
        <div className='one-webtoon'>



            <div className='webtoon_data' >
                <div classaName="" onClick={()=>{history.push({detail_link})}}> 

                    <div className='w-image'>
                    <img src={thumbnail} alt={title} title={title}/> 
                    </div>


                    <h3 className='w-title'> 제목:{title}</h3>
                    <h3 className='w-writer'> 작가:{writer}</h3>
                    <h3 className='w-platform'> 연재처:{platform}</h3>
                    <h3 className='w-keyword'> 키워드:{genre}</h3>
                    <h3 className='w-introduction'> 작품소개:{introduction}</h3>
                </div>


            </div>
        </div>    


        
            
            
        

            
        
    )    

    
}




Webtoon.propTypes = {
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    writer: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    introduction: PropTypes.string.isRequired,


  };





export default Webtoon;