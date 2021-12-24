import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import Header from '../components/header'
import './create.css'
const Create = (props) => {
    return (
        <div>
            <Header />
            <h2 className='create-text'>Create Your Tournament </h2>
            <div className='create-cotainer'>

                <Row>
                    <Col md={6}>
                        <Form.Group className=" input-class" controlId="formBasictext">
                            <Form.Control type="text" value={props.current.title} placeholder="Tournament Name" />

                        </Form.Group>


                    </Col>
                    <Col md={6}>
                        <Form.Group className=" input-class" controlId="formBasictext">
                            <Form.Control type="text" value={props.current.fee} placeholder="Entry Fee" />

                        </Form.Group>

                    </Col>
                    <Col md={6}>
                        <Form.Group className=" mb-3 input-class" controlId="formBasictext">
                            <Form.Control type="text" value={props.current.date} placeholder="Date & Time" />

                        </Form.Group>
                        <Form.Group className="  input-class" controlId="formBasictext">
                            <Form.Control type="text" value={props.current.mode} placeholder="Game Mode" />

                        </Form.Group>

                    </Col>
                    <Col md={6}>
                        <Form.Group className="input-class" controlId="formBasictext">
                            <Form.Control
                                as="textarea"
                                value={props.current.description}
                                placeholder="Description"
                                style={{ height: '135px' }}
                            />
                        </Form.Group>

                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Create;