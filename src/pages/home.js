import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from '../components/header'
import Card from '../components/textCard'
import {Link} from 'react-router-dom'
import './home.css'
const Home =(props)=> {
    
    return (
        <>
         <Header />
         <Row>

             <Col lg={6}>
    <Link to="/joincreators">
         
         <Card url="https://cdn.wallpapersafari.com/98/18/tXamGk.jpg" name="Creaters"  />
         </Link>
             </Col>
             <Col lg={6}>
    <Link to="/joinplayers">
         <Card url="https://image.freepik.com/free-vector/player-text-comic-style-text-effect_333472-866.jpg" name="Players"  />
         </Link>
             </Col>
         </Row>
        </>
    );
}

export default Home;