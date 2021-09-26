import React from 'react';
import './Finish.css';

export default function Finish(props){
    return (
        <div className="finish">
            <button id="prev">
            <a href="https://nguyenvanthanhminn.wixsite.com/vocabulary1">
                {props.prev}
            </a>
            </button>
            <button id="this">
                <a href="https://nguyenvanthanhminn.github.io/kiemtratuvung/program2/topic1/1.html">Kiểm tra từ vựng</a>
            </button>
            <button id="next">
                <a href="https://nguyenvanthanhminn.wixsite.com/tuvung2-1-2">
                {props.next}
                </a>
            </button>
        </div>
    );
}