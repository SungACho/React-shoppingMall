/* eslint-disable*/
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown,Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
//import {name, name2} from './data.js';
import Data from './data.js';
import Detail from './Detail.js';

import { Link, Route, Switch } from 'react-router-dom';


function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <Switch>
      <Route exact path="/">
        <div className='Jumbotron'>
          <h1>20% Season Off</h1>
          <p>
            브ㄹ라블라
          </p>
          <p>
            <Button variant="primary">버튼</Button>
          </p>
        </div>

        <div className='container'>
          <div className='row'>
            {
              shoes.map(function(shoe,i){
                return(
                  <Card shoes={shoe} key={i}/>
                )
              })
            }   
          </div>
        </div>
      </Route>
      <Route path="/detail/:id"> 
        <Detail shoes={shoes}/>
      </Route>
      <Route path="/:id">
          <div>아무거나 적었을 때 보여주세요</div>
      </Route>

      </Switch>
      {/*  <Route path="/어쩌구" component={Card} ></Route>  */} 
      {/*  <Route path="/어쩌구"><Card/></Route>  */} 
    </div>
  );
}
function Card(props){
  let id = props.shoes.id;
  let url = "/detail/"+id;
  return (
    <Link to={url}>
      <div className='col-md-4'>
        <img src={"https://codingapple1.github.io/shop/shoes" + (props.shoes.id +1) +".jpg"} width="100%"/>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content} & {props.shoes.price}</p>
      </div>
    </Link>  
  )
}

export default App;
