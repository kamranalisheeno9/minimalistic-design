import React from 'react';
import { Row,Col,Card, Container, Button,Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/header'
import './join.css'
const Join=(props)=> {
    const Data=[
        {
            title:"Tournament 1 (Creators)",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            fee:"$ 222",
            date:"01/01/2021",
            mode:"Hokey",
        },
        {
            title:"Tournament 1 (Creators)",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            fee:"$ 322",
            date:"08/07/2021",
            mode:"Football",
        },
        {
            title:"Tournament 1 (Creators)",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            fee:"$ 422",
            date:"09/11/2021",
            mode:"Hokey",
        },
        {
            title:"Tournament 1 (Creators)",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            fee:"$ 212",
            date:"11/11/2021",
            mode:"Hokey",
        },
        {
            title:"Tournament 1 (Creators)",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            fee:"$ 225",
            date:"10/12/2021",
            mode:"Hokey",
        },
        {
            title:"Tournament 1 (Creators)",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            fee:"$ 424",
            date:"11/12/2021",
            mode:"Cricket",
        },

    ]
   
    return (
        <>
    <Header />
    <Container fluid>
    <h2 className='join-text'>Join a Tournament</h2>
        <Dropdown className='sort-by'>
  <Dropdown.Toggle variant="" id="dropdown-basic">
    Sort By
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-2">Tournament</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Date</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

    <Row className='justify-content-center'>
        {Data.map((tournaments,index)=>{
            return(
                <Col key={index} className='card-container' lg={4} md={6}>
                <Card  style={{ width: '100%',textAlign:"center" }}>
                <Card.Body>
                <Card.Title>{tournaments.title}</Card.Title>
                <Card.Text >
                    <div className='mt-3'>
            
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                    </div>
                    <div className='mt-3'>
                <Link to="/create">
                    
                  <Button style={{width:"100%",textTransform:"uppercase",letterSpacing:"2px"}} onClick={()=>props.setCurrent(tournaments)} variant="dark" >Join</Button>
                </Link>
                    </div>
                </Card.Text>
                </Card.Body>
                </Card>
                </Col>
            
            )
        })}
   
     </Row>   
         </Container>
        </>
    );
}

export default Join;