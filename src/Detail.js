/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';


let 박스 = styled.div`
  padding : 20px;
`;

let 제목 = styled.h4`
  font-size : 25px;
  color : ${props => props.색상}
  `;  /* '글자${변수명}글자'  */
  
  
  function Detail(props){
    let { id } = useParams();
    //let { id, id2, id3 } = useParams();
    let 현재상품 = props.shoes.find( x=> x.id == id);
    /*let 현재상품 = props.shoes.find(function(상품){
      return 상품.id == id;
    });*/  
    let history = useHistory();

    let [init, init변경] = useState(true);
    let [inputValue, inputValue변경] = useState('');

    // 컴포넌트가 mount되었을 때, 컴포넌트가 update 될 때, 특정 코드를 실행
    useEffect(()=>{
      // 2초 후에 alert창 안보이게 
      let timer = setTimeout(() => { init변경(false);  }, 2000);
      return ()=>{ clearTimeout(timer) } // 디테일 페이지가 사라질 때 타이머를 제거하도록
    },[init]);// 대괄호에 실행될 조건을 넣을 수 잇음 : 특정 state가 변경될때 실행해주세요~
    // 대괄호 내에 빈 칸이면, 최초 로드시만 실행됨
    // 대괄호 내에는 여러개의 state를 넣을 수 있음
    // useEffect함수는 여러개가 있을 시 순서대로 실행 됨
    // return을 사용하면 해당 컴포넌트가 사라질 때 실행됨
    
    /*
    return (
        <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src={"https://codingapple1.github.io/shop/shoes"+(props.shoes[id].id+1)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                  <h4 className="pt-5">{props.shoes[id].title}</h4>
                  <p>{props.shoes[id].content}</p>
                  <p>{props.shoes[id].price}원</p>
                  <button className="btn btn-danger">주문하기</button>
                  <button className="btn btn-danger" onClick={ ()=>{
                      //history.goBack();
                      history.push('/');
                  }}>뒤로가기</button> 
                </div>
              </div> 
        </div> 
    )*/
    return (
      <div className="container">
        <박스>
          <제목 색상="blue">Detail</제목>
          <제목 색상={'red'}>Detail</제목>
          <제목 className='red'>Detail</제목> 
        </박스>
        {inputValue}
        <input onChange={(e)=>{inputValue변경(e.target.value)}}/>

        {
          init === true
          ?
          <div className='my-alert2'>
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>
          : null
        }

            <div className="row">
              <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes"+(props.shoes[id].id+1)+".jpg"} width="100%" />
              </div>
              <div className="col-md-6 mt-4">
                <h4 className="pt-5">{현재상품.title}</h4>
                <p>{현재상품.content}</p>
                <p>{현재상품.price}원</p>
                <Quantity Quantity={props.Quantity} id={id}/>
                <button className="btn btn-danger" onClick={ ()=>{ props.재고변경([9,11,12])}}>주문하기</button>
                &nbsp;
                <button className="btn btn-danger" onClick={ ()=>{
                    //history.goBack();
                    history.push('/');
                }}>뒤로가기</button> 
              </div>
            </div> 
      </div> 
  )
}

function Quantity(props){
  return (
    <p>재고 : {props.Quantity[props.id]}개</p>
  )
}


export default Detail;

//hook
class Detail2 extends React.Component{
  componentDidMount(){

  }

  componentWillUnmount(){

  }
}