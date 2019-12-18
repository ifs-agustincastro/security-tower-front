import React from 'react';
import { Jumbotron, Badge, Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';


function DashboardComponentAccordeon() {

    return (

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={this.props.eventKey}>
                    {this.props.name}
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={this.props.eventKey}>
                <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
        </Card>


    );
}