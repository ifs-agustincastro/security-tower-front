import React from 'react';
import '../../styles/Dashboard.css';
import { Jumbotron, Badge, Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import awsLogo from "../../images/aws-logo.png";
import DashboardComponentCard from './DashboardComponentCard';

import ec2Logo from "../../images/ec2-logo.png";
import s3Logo from "../../images/s3-logo.png";
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
            <Jumbotron className="jumbotron-summary float-md-center">
                <div>
                    <div>
                        <p className="text-summary">Hello Agustin, Your summary for project <span className="summary-proj-name">Data Platform</span>:</p>
                        <ul id="summary-incident-list">
                            <li>Critical vulnerabilities <Badge variant="danger">2</Badge></li>
                            <li>High priority vulnerabilities <Badge variant="warning">12</Badge></li>
                            <li>Medium priority vulnerabilities <Badge variant="info">4</Badge></li>
                        </ul>
                    </div>
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
