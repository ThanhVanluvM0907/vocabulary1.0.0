import React from 'react';
import App from './App';
import './Card.css';

function Ecard(props) {
    // console.log(props.idUK + 'record')
    return (
        <div className="eCard">
            <img src={props.vImg} className="V-img" alt="vocabulary" />
            <div className="V-word">{props.vWord}</div>
            <div className="Phonetic">
                <div className="vPhonetic">
                    {props.vPhonetic}
                </div>
                <App idRec={props.idUS + 'record'} idStop={props.idUS + 'stop'} idAudio={props.idUS + 'audio'} />
            </div>
            <div className="V-proun">
                <audio src={props.urluk} style={{ display: "block" }} id="audio"></audio>
                <button className="Proun" onClick={() => {
                    var i = props.idUK;
                    document.getElementById(i).play();
                }}>UK <i className="fas fa-volume-up"></i>
                </button>
                &emsp;
                <button className="Proun" onClick={() => {
                    var j = props.idUS;
                    document.getElementById(j).play();
                }}>US <i className="fas fa-volume-up"></i></button>
            </div>
            <p className="V-meaning">{props.vMeaning}</p>
        </div>
    );
}

function Card() {
    const ecard1 = {
        vImg: "https://43factory.coffee/wp-content/uploads/2020/05/202005040705-cappuccino.png",
        vWord: "Cappuccino 1", idUK: "0", idUS: "1", vPhonetic: "/ˌkæpəˈtʃiːnəʊ/", vMeaning: "Thức uống có nguồn gốc từ Ý gồm cà phê và sữa khuấy bông "
    }
    const ecard2 = {
        vImg: "https://43factory.coffee/wp-content/uploads/2020/05/202005040705-cappuccino.png",
        vWord: "Cappuccino 2", idUK: "2", idUS: "3", vPhonetic: "/ˌkæpəˈtʃiːnəʊ/", vMeaning: "Thức uống có nguồn gốc từ Ý gồm cà phê và sữa khuấy bông "
    }
    const ecard3 = {
        vImg: "https://43factory.coffee/wp-content/uploads/2020/05/202005040705-cappuccino.png",
        vWord: "Cappuccino 3", idUK: "4", idUS: "5", vPhonetic: "/ˌkæpəˈtʃiːnəʊ/", vMeaning: "Thức uống có nguồn gốc từ Ý gồm cà phê và sữa khuấy bông "
    }
    const ecard4 = {
        vImg: "https://43factory.coffee/wp-content/uploads/2020/05/202005040705-cappuccino.png",
        vWord: "Cappuccino 4", idUK: "4", idUS: "5", vPhonetic: "/ˌkæpəˈtʃiːnəʊ/", vMeaning: "Thức uống có nguồn gốc từ Ý gồm cà phê và sữa khuấy bông "
    }
    const ecard5 = {
        vImg: "https://43factory.coffee/wp-content/uploads/2020/05/202005040705-cappuccino.png",
        vWord: "Cappuccino 5", idUK: "4", idUS: "5", vPhonetic: "/ˌkæpəˈtʃiːnəʊ/", vMeaning: "Thức uống có nguồn gốc từ Ý gồm cà phê và sữa khuấy bông "
    }
    const ecard6 = {
        vImg: "https://43factory.coffee/wp-content/uploads/2020/05/202005040705-cappuccino.png",
        vWord: "Cappuccino 6", idUK: "4", idUS: "5", vPhonetic: "/ˌkæpəˈtʃiːnəʊ/", vMeaning: "Thức uống có nguồn gốc từ Ý gồm cà phê và sữa khuấy bông "
    }
    return (
        <div className="Card">
            <Ecard {...ecard1} />
            <Ecard {...ecard2} />
            <Ecard {...ecard3} />
            <Ecard {...ecard4} />
            <Ecard {...ecard5} />
            <Ecard {...ecard6} />
        </div>);
}



export default Card;