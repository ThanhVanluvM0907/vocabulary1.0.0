import React from 'react';
import './Header.css';

export default function Header(props){
    return (
        <div className="header">
            <h1 id="name"> {props.name} </h1>
            <p id="context"> {props.context} </p>
            <hr align="center" className="hr"/>
        </div>
    );
}