/* eslint-disable*/
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';


let 박스 = styled.div`
  padding : 20px;
`;

let 제목 = styled.h4`
  font-size : 25px;
  color : ${props => props.색상}
  `;
  /* '글자${변수명}글자'  */
   
function Detail(props){

  //let { id, id2, id3 } = useParams();
  let { id } = useParams();
  let 현재상품 = props.shoes.find(function(상품){
    return 상품.id == id;
  });

  let history = useHistory();
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
        
        
        <div className='my-alert2'>
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>

            <div className="row">
              <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes"+(props.shoes[id].id+1)+".jpg"} width="100%" />
              </div>
              <div className="col-md-6 mt-4">
                <h4 className="pt-5">{현재상품.title}</h4>
                <p>{현재상품.content}</p>
                <p>{현재상품.price}원</p>
                <button className="btn btn-danger">주문하기</button>
                <button className="btn btn-danger" onClick={ ()=>{
                    //history.goBack();
                    history.push('/');
                }}>뒤로가기</button> 
              </div>
            </div> 
      </div> 
  )
}

export default Detail;