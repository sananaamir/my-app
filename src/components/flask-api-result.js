import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class FlaskApiResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'This is the Initial Message!'
        }
    }

    componentDidMount() {
        fetch('https://sa-flask-basic-app.herokuapp.com/api/hello-world')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    message: data.message
                })
            });
    }

    render() {
        return (
            <div>
                <Container className='shadow p-3 mb-5 bg-white rounded'>
                    <Row>
                        <Col>
                            <h1>{this.state.message}</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default FlaskApiResult;