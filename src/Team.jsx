import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';

const teamMembers = [
    { name: "Joseph Brown", role: "Marketing Head" },
    { name: "Nancy White", role: "Marketing Head" },
    // Additional members
];

const Team = () => (
    <Container className="team-section py-5">
        <h2 className="text-center">Our Team</h2>
        <Row>
            {teamMembers.map((member, index) => (
                <Col lg={3} sm={6} key={index}>
                    <Card className="border-0 text-center text-white bg-dark">
                        <Card.Img variant="top" src={`team-${index + 1}.jpg`} alt={member.name} />
                        <Card.Body>
                            <Card.Title>{member.name}</Card.Title>
                            <Card.Text>{member.role}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
);

export default Team;
