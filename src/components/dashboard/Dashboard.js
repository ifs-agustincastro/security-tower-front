import React from 'react';
import '../../styles/Dashboard.css';
import { Jumbotron, Badge, Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import awsLogo from "../../images/aws-logo.png";
import DashboardComponentCard from './DashboardComponentCard';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import ec2Logo from "../../images/ec2-logo.png";
import lambdaLogo from "../../images/lambda-logo.png";
import dynamoLogo from "../../images/dynamo-logo.png";
import rdsLogo from "../../images/rds-logo.png";
import elasticsearchLogo from "../../images/elasticsearch-logo.png";

function Dashboard() {

    const dbcomponents = [
        {
            name: "Dynamo",
            image: dynamoLogo
        },
        {
            name: "RDS",
            image: rdsLogo
        },
        {
            name: "Elasticsearch",
            image: elasticsearchLogo
        }
    ]

    const components = [
        {
            name: "EC2",
            image: ec2Logo
        },
        {
            name: "Lambda",
            image: lambdaLogo
        },
    ];



    return (

        <div >
            <Container>
                <Row>
                    <Col>
                        <p className="text-summary">Hello Agustin, Your summary for project <span className="summary-proj-name">Data Platform</span>:</p>
                    </Col>
                </Row>
            </Container>
            <Jumbotron className="jumbotron-summary float-md-center">
                <div>
                    <Container id="dashboard-summary">
                        <Row>
                            <Col id="summary-left-half" sm="6">
                                <p className="summary-subtitle">Vulnerabilities</p>
                                <ul id="summary-incident-list">
                                    <li>Critical <Badge variant="danger">2</Badge></li>
                                    <li>High priority <Badge variant="warning">12</Badge></li>
                                    <li>Medium priority <Badge variant="info">4</Badge></li>
                                </ul>
                            </Col>
                            <Col sm="6">
                                <p className="summary-subtitle">New Issues</p>
                                <ul id="summary-incident-list">
                                    <li>One day <Badge variant="secondary">1</Badge></li>
                                    <li>Last week <Badge variant="secondary">3</Badge></li>
                                    <li>Last month <Badge variant="secondary">12</Badge></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Jumbotron>

            <Container>
                <Row>
                    <Col><hr className="dashboard-section-separator" /></Col>
                </Row>
                <Row>
                    <Col>
                        <img className="dashboard-cloud-logo" alt="aws logo" src={awsLogo} />
                    </Col>
                </Row>
            </Container>

            <Container id="component-card-container">
                <Row>

                    <Col>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header className="accordeon-card-header">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Database
                                    </Accordion.Toggle>
                                    <span className="accordeon-header-right">
                                        <span className="accordeon-header-component-count">
                                            3/3
                                            </span>
                                        <Link to="/incidents">
                                            <FontAwesomeIcon icon={faEye} size="lg" />
                                        </Link>
                                    </span>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                {dbcomponents.map(component => {
                                                    return (
                                                        <Col><DashboardComponentCard component={component} /></Col>
                                                    )
                                                })}
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header className="accordeon-card-header">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Compute
                                </Accordion.Toggle>
                                    <span className="accordeon-header-right">
                                        <span className="accordeon-header-component-count">
                                            2/2
                                            </span>
                                        <FontAwesomeIcon icon={faEye} size="lg" />
                                    </span>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                {components.map(component => {
                                                    return (
                                                        <Col><DashboardComponentCard component={component} /></Col>
                                                    )
                                                })}
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header className="accordeon-card-header">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                        Logging
                                </Accordion.Toggle>
                                    <span className="accordeon-header-right">
                                        <span className="accordeon-header-component-count">
                                            1/4
                                            </span>
                                        <FontAwesomeIcon icon={faEye} size="lg" />
                                    </span>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header className="accordeon-card-header">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                        Network
                                </Accordion.Toggle>
                                    <span className="accordeon-header-right">
                                        <span className="accordeon-header-component-count">
                                            3/3
                                            </span>
                                        <FontAwesomeIcon icon={faEye} size="lg" />
                                    </span>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header className="accordeon-card-header">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                        Storage
                                </Accordion.Toggle>
                                    <span className="accordeon-header-right">
                                        <span className="accordeon-header-component-count">
                                            1/2
                                            </span>
                                        <FontAwesomeIcon icon={faEye} size="lg" />
                                    </span>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>
                                        asdasdaasd
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header className="accordeon-card-header">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                        IAM
                                </Accordion.Toggle>
                                    <span className="accordeon-header-right">
                                        <span className="accordeon-header-component-count">
                                            3/4
                                            </span>
                                        <FontAwesomeIcon icon={faEye} size="lg" />
                                    </span>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                {components.map(component => {
                                                    return (
                                                        <Col><DashboardComponentCard component={component} /></Col>
                                                    )
                                                })}
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>


                    </Col>

                </Row>
            </Container>

        </div>

    );
}

export default Dashboard;
