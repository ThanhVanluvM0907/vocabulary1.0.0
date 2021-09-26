import React from 'react';
import App from './App';
import './Kocard.css';

function Kcard(props){
    return (
        <div className="kcard">
            <img src={props.kImg} className="k-img" alt="korean" />
            <div className="k-word">
                {props.kWord}
                <button className="Kproun" onClick={()=>{
                    var k= props.idK;
                    document.getElementById(k).play();
                }}>
                    <i className="fas fa-volume-up"></i>
                </button>
            </div>
            <App idRec={props.idK + 'record'} idStop={props.idK +'stop'} idAudio={props.idK + 'audio'}/>
            <p className="k-meaning">{props.kMeaning}</p>
        </div>
    );
}

export default function Kocard(){
    const kcard1 = {
        kImg: "https://static.wixstatic.com/media/nsplsh_7145316a78595869774f41~mv2.jpg/v1/crop/x_1277,y_0,w_2914,h_3648/fill/w_311,h_389,al_c,q_80,usm_0.66_1.00_0.01/Image%20by%20Petr%20Sevcovic.webp",
        kWord: "커피숍 1", idK: '0k', kMeaning: "Coffee shop"
    }
    const kcard2 = {
        kImg: "https://static.wixstatic.com/media/nsplsh_7145316a78595869774f41~mv2.jpg/v1/crop/x_1277,y_0,w_2914,h_3648/fill/w_311,h_389,al_c,q_80,usm_0.66_1.00_0.01/Image%20by%20Petr%20Sevcovic.webp",
        kWord: "커피숍 2", idK: '1k', kMeaning: "Coffee shop"
    }
    const kcard3 = {
        kImg: "https://static.wixstatic.com/media/nsplsh_7145316a78595869774f41~mv2.jpg/v1/crop/x_1277,y_0,w_2914,h_3648/fill/w_311,h_389,al_c,q_80,usm_0.66_1.00_0.01/Image%20by%20Petr%20Sevcovic.webp",
        kWord: "커피숍 3", idK: '2k', kMeaning: "Coffee shop"
    }
    const kcard4 = {
        kImg: "https://static.wixstatic.com/media/nsplsh_7145316a78595869774f41~mv2.jpg/v1/crop/x_1277,y_0,w_2914,h_3648/fill/w_311,h_389,al_c,q_80,usm_0.66_1.00_0.01/Image%20by%20Petr%20Sevcovic.webp",
        kWord: "커피숍 4", idK: '2k', kMeaning: "Coffee shop"
    }
    const kcard5 = {
        kImg: "https://static.wixstatic.com/media/nsplsh_7145316a78595869774f41~mv2.jpg/v1/crop/x_1277,y_0,w_2914,h_3648/fill/w_311,h_389,al_c,q_80,usm_0.66_1.00_0.01/Image%20by%20Petr%20Sevcovic.webp",
        kWord: "커피숍 5", idK: '2k', kMeaning: "Coffee shop"
    }
    const kcard6 = {
        kImg: "https://static.wixstatic.com/media/nsplsh_7145316a78595869774f41~mv2.jpg/v1/crop/x_1277,y_0,w_2914,h_3648/fill/w_311,h_389,al_c,q_80,usm_0.66_1.00_0.01/Image%20by%20Petr%20Sevcovic.webp",
        kWord: "커피숍 6", idK: '2k', kMeaning: "Coffee shop"
    }
    return (
        <div className="KoreanCard">
            <Kcard {...kcard1} />
            <Kcard {...kcard2} />
            <Kcard {...kcard3} />
            <Kcard {...kcard4} />
            <Kcard {...kcard5} />
            <Kcard {...kcard6} />
        </div>
    );
}










