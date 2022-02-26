/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';

function App() {

  let posts = 'test contents';
  let styles = {color: 'gold', fontSize: '30px'}

  
  let [글제목,글제목변경] = useState(['남자 코트 추천','우동 맛집 추천', '일단 추천 한다']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  
  function gg(){
    var array = [];
    for(var i = 0; i < 3; i++){
      array.push(<div>반복문</div>);
    }
    return array;
  }

  var 어레이 =[2,3,4]; 
  var 뉴어레이 = 어레이.map(function(a){
    return a * 2
  })


  function 제목변경(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    newArray[1] = '남자 코트 추천';
    newArray[2] = '애기 코트 추천';

    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div style={styles }>Blog Title </div>
      </div>

    {gg()}
 
      {
        글제목.map(function(a){
          return   (
            <div className='list'>
            <h3>{a} <span onClick={ () => {따봉변경(따봉+1)}}>👍</span>{따봉}</h3>
            <p>2월 17일 발행</p>
            <hr/>
          </div>

          
          )
        })
      }

      <button onClick={()=>{modal변경(!modal)}}>버튼</button>
      {
        modal === true 
        ? <Modal 글제목={글제목}></Modal>
        : null
      }

    </div>

);

 
}

function Modal(props){
  return(
    <div className='modal'>
      <h3>제목 : {props.글제목[1]}</h3>
      <p>날짜</p>
      <p>상세내용 </p>
    </div>
  )
}


export default App;