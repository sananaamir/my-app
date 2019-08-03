import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ContactMe extends Component {
    render() {
        return(
            <div>
                <Container className='shadow p-3 mb-5 bg-white rounded'>
                    <Row>
                        <Col className='homepage-paragraph'>Linkedin</Col>
                        <Col className='homepage-paragraph'>Github</Col>
                    </Row>
                    <Row>
                        <Col className='homepage-paragraph'>Twitter</Col>
                        <Col className='homepage-paragraph'>Github</Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col className='homepage-paragraph'><h1>Form Goes Here</h1></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ContactMe;