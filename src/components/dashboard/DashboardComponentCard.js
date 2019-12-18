import React, { Component } from "react";
import { Card, Container, Row, Col, Badge } from "react-bootstrap";
import "../../styles/ComponentCard.css";

export default class DashboardComponentCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const component = this.props.component;
        return (

            <div>

                <Card className="component-card">
                    <Card.Body>
                        <Container>
                            <Row className="no-padding">
                                <Col>
                                    <Card.Title>{component.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Instances: 15</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Regions: 2</Card.Subtitle>
                                </Col>
                                <Col>
                                    <img src={component.image} alt="application logo" className="card-product-logo" />
                                </Col>
                            </Row>
                            <Row><Col><hr className="card-content-separator" /></Col></Row>
                        </Container>
                        <Card.Text>


                            <div className="checks-passed-container">

                                <p>Checks <br/><span>12/15</span></p>

                            </div>

                            <ul className="vulnerability-list">
                                <li>
                                    Critical: <Badge variant="secondary">5</Badge>
                                </li>
                                <li>
                                    High priority: <Badge variant="secondary">3</Badge>
                                </li>
                                <li>
                                    Medium: <Badge variant="secondary">4</Badge>
                                </li>
                            </ul>

                        </Card.Text>
                        {/* <span class="dot"></span> */}
                    </Card.Body>
                </Card>

            </div>
        );
    }


}