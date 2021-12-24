import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css'
const Home =(props)=> {
    return (
        <>
         <Row className='justify-content-between header-container '>
        <Col xs={4}>
            <Link to="/">
            <img width="80px" src='https://www.pngall.com/wp-content/uploads/2016/06/Nike-Logo-Free-Download-PNG.png' alt='logo' />
            </Link>
            </Col>     
        <Col xs={8}>
            <button type="button" className='wallet-btn'>Connect Wallet</button>    
        </Col>     
        </Row>   
        </>
    );
}

export default Home;