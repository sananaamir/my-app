import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ContactMe extends Component {
    render() {
        return (
            <div>
                <Container className='shadow p-3 mb-5 bg-white rounded centered-heading'>
                    <Row>
                        <Col><h2>Contact Me</h2></Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col><a target="_blank" href="https://www.linkedin.com/in/sananaamir" rel="noopener noreferrer">Linkedin</a></Col>
                        <Col><a target="_blank" href="https://github.com/sananaamir" rel="noopener noreferrer">Github</a></Col>
                    </Row>
                    <Row>
                        <Col><a target="_blank" href="https://twitter.com/sananaamir" rel="noopener noreferrer">Twitter</a></Col>
                        <Col><a target="_blank" href="https://www.facebook.com/sanan.aamir" rel="noopener noreferrer">Facebook</a></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ContactMe;