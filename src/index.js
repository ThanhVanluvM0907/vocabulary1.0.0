import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import reportWebVitals from './reportWebVitals';
import Card from './Card';
import Prounciation from './Prounciation';
import Header from './Header';
import Rubric from './Rubric';
import Finish from './Finish';
import Author from './Author';
import Kocard from './Kocard';

ReactDOM.render(
  <React.StrictMode>
    <Header name="TỪ VỰNG CHỦ ĐIỂM 1" context="Buổi 1: Luxury" />
    <Prounciation />
    <Rubric content="​A. E001" />
    <Card />
    <Rubric content="​B. K002" />
    <Kocard />
    <Finish prev="Home" next="Buổi 2" />
    <Author/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
