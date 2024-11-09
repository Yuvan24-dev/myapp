import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';
import team1 from './images/team-1.jpg';  
import team2 from './images/team-2.jpg';  
import team3 from './images/team-3.jpg';  
import team4 from './images/team-4.jpg'; 
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
const teamMembers = [
    { 
        name: "Joseph Brown", 
        role: "Marketing Head", 
        image: team1, 
        social: [
            <TiSocialFacebook />,
            <FaTwitter />,
            <FaLinkedinIn />,
            <FaInstagram />,
            <FaYoutube />
        ] 
    },
    { 
        name: "Nancy White", 
        role: "Marketing Head", 
        image: team2, 
        social: [
            <TiSocialFacebook />,
            <FaTwitter />,
            <FaLinkedinIn />,
            <FaInstagram />,
            <FaYoutube />
        ]
    },
    { 
        name: "John Doe", 
        role: "Sales Manager", 
        image: team3, 
        social: [
            <TiSocialFacebook />,
            <FaTwitter />,
            <FaLinkedinIn />,
            <FaInstagram />,
            <FaYoutube />
        ] 
    },
    { 
        name: "Emily Smith", 
        role: "CEO", 
        image: team4, 
        social: [
            <TiSocialFacebook />,
            <FaTwitter />,
            <FaLinkedinIn />,
            <FaInstagram />,
            <FaYoutube />
        ] 
    },
];

const Team = () => (
    <div className="team_section pt-1 pb-2">
    <Container className="py-5">
        <h2 className="text-center py-3 text-white">Our <span style={{color: '#00bbf0'}}>Team</span></h2>
        <Row>
            {teamMembers.map((member, index) => (
               
               <Col className='px-2' lg={3} sm={6} key={index}>
                    <Card className="border-0 text-center text-white  py-5 card_d">
                        <Card.Img className='teamround ' variant="top" src={member.image} alt={member.name} />
                        <Card.Body>
                            <Card.Title>{member.name}</Card.Title>
                            <Card.Text>{member.role}</Card.Text>
                        </Card.Body>
                        <div className="d-flex justify-content-center">
                            {member.social.map((icon, iconIndex) => (
                                <div key={iconIndex} className="social-icon px-3 ">
                                    {icon}
                                </div>
                            ))}
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
    </div>
);

export default Team;
