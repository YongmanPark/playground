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
  let [누른제목, 누른제목변경] = useState(0);  

  let [입력값, 입력값변경] = useState('');

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

 
      {
        글제목.map(function(a, i){
          return   (
            <div className='list'>
            <h3 onClick={()=>{ 누른제목변경(i) }}>{a} <span onClick={ () => {따봉변경(따봉+1)}}>👍</span>{따봉}</h3>
            <p>2월 17일 발행</p>
            <hr/>
          </div>

          
          )
        })
      }
      
      {/*
      <button onClick={()=>{ 누른제목변경(0)}}>버튼1</button>
      <button onClick={()=>{ 누른제목변경(1)}}>버튼2</button>
      <button onClick={()=>{ 누른제목변경(2)}}>버튼3</button>
      */}

      
      <input onChange={(e) => { 입력값변경(e.target.value)} } />

      <button onClick={()=>{modal변경(!modal)}}>열고닫기</button>
      {
        modal === true 
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      }

    </div>

);

 
}  

function Modal(props){
  return(
    <div className='modal'>
      <h3>제목 : {props.글제목[props.누른제목]}</h3>
      <p>날짜</p>
      <p>상세내용 </p>
    </div>
  )
}


export default App;