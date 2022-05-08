import React, {useState} from 'react';
import './Webtoon.css'; //나중에 여기 주소 잘 맞나 실행해보고 확인하기.
import {Link,useParams} from 'react-router-dom';
import PropTypes from "prop-types";


function Webtoon({id,thumbnail,title,writer,genre,platform}){    
    
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
    return (
        <div className='one-webtoon' >
            <Link 
                to={{
                    pathname: `/webtoon/${id}`,
                    state:{
                        thumbnail,
                        title,
                        writer,
                        platform,
                        genre
                    }
                }}
            >    


                    <div className='w-image'>
                        <img src={webtoonInfo.thumbnail} alt={title} title={title}/> 
                    </div>

                    <div className='webtoon_data'>
                        <h3 className='w-title'> 제목:{webtoonInfo.title}</h3>
                        <h3 className='w-writer'> 작가:{webtoonInfo.writer}</h3>
                        <h3 className='w-platform'> 연재처:{webtoonInfo.platform}</h3>
                        <h3 className='w-keyword'> 키워드:{webtoonInfo.genre}</h3>
                    </div>      
                


            
            
                {/* </div> */}

            </Link>
            
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


  };





export default Webtoon;