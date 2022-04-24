import React, {useState} from 'react';
import Webtoon from './Webtoon/Webtoon';
import SearchBar from './SearchBar';
import HomeLogo from './HomeLogo';



function Page3(){

    let [웹툰하나,웹툰하나변경] = useState('');
    let [작품소개,작품소개변경] = useState('');

    return(

        <div>
        
            <SearchBar/>

            <HomeLogo/>

            <Webtoon/> 

            <Introduction/>

            <Goplatform/>
    
        </div>
        
    
    )

}


function Introduction(){

    return(
        <div>
            DB에서 작품소개 끌어오기.
        </div>
    )
    
}

function Goplatform(){
    return(
        <div className='goplatform'>
           <button onClick={      ()=>{}     }> 
           작품보러가기
           </button>
        </div>
    )
}




export default Page3