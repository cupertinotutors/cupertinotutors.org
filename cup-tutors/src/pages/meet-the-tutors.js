import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Image } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Collapse } from "react-bootstrap";
import { Row, Col, Button, Card, CardColumns, CardDeck, CardGroup } from "react-bootstrap";

export default function Home() {
    function sendmail() {
        var input = document.getElementById('formSubject');
        var inputsubject = input.value;
        var input2 = document.getElementById('formMessage');
        var inputmessage = input2.value;

        window.location.href = "mailto:jjasonsshan@gmail.com" + "?subject=" + inputsubject + "&body=" + inputmessage;
    }

    return (
        <Container fluid id="meet-tutors-page">
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale = 1, shrink-to-fit=no, user-scalable=no" />
                <body className="this-body" />
            </Helmet>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="/">Cupertino Tutors</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#tohere">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Row>
                <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} xl={{ span: 8, offset: 2 }}>
                    <div className="overlay">
                        <p id="p1">Cupertino Tutors</p>
                        <p id="p2">Our Tutors</p>
                        <p style={{ lineHeight: 1.7 }}>Many high school students are involved with Cupertino Tutors, and are dedicated to helping younger
                            students.</p>
                    </div>
                </Col>
            </Row>
            <div style={{ marginTop: `30vh` }}></div>

            <Row className="backgroundG">
                <Col xs={12} sm={12} md={12} lg={6} xl={6} style={{ padding: 0 }}>
                    <div className="imgdiv">
                        <Image src="https://images.unsplash.com/photo-1585432959315-d9342fd58eb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" style={{ padding: `3vw` }} roundedCircle fluid />
                    </div>
                </Col>
                <Col className="d-flex align-items-center justify-content-center" xs={12} sm={12} md={12} lg={6} xl={6} style={{ padding: 0 }}>
                    <div className="nexttoright">
                        <h3 style={{ textAlign: `center`, fontWeight: `bold` }}>Our Services</h3>
                        <p style={{ textAlign: `left` }}>Cupertino Tutors offers Title 1 students tutoring free of charge.
                        For other students, pricing is dependent on the tutors and the subjects they teach. To request a tutor,
                        please fill out the form <a href="https://forms.gle/qsomHgEG2Tocvcth8">here</a>.</p>
                    </div>
                </Col>
            </Row>


            <CardColumns className="backgroundL3 cardGroup">
                <Card>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png" />
                    <Card.Body>
                        <Card.Title>First and Last Name</Card.Title>
                        <Card.Text>
                            Small blurb or description of self/autobiography (e.g. age, hobbies, etc.)
                            <br /> <br />
                            $15/hr
                        </Card.Text>
                    </Card.Body>
                    <blockquote className="blockquote mb-0 card-body">
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Subjects: Science and Math
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png" />
                    <Card.Body>
                        <Card.Title>First and Last Name</Card.Title>
                        <Card.Text>
                            Small blurb or description of self/autobiography (e.g. age, hobbies, etc.)
                            <br /> <br />
                            $15/hr
                        </Card.Text>
                    </Card.Body>
                    <blockquote className="blockquote mb-0 card-body">
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Subjects: Science and Math
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png" />
                    <Card.Body>
                        <Card.Title>First and Last Name</Card.Title>
                        <Card.Text>
                            Small blurb or description of self/autobiography (e.g. age, hobbies, etc.)
                            <br /> <br />
                            $15/hr
                        </Card.Text>
                    </Card.Body>
                    <blockquote className="blockquote mb-0 card-body">
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Subjects: Science and Math
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png" />
                    <Card.Body>
                        <Card.Title>First and Last Name</Card.Title>
                        <Card.Text>
                            Small blurb or description of self/autobiography (e.g. age, hobbies, etc.)
                            <br /> <br />
                            $15/hr
                        </Card.Text>
                    </Card.Body>
                    <blockquote className="blockquote mb-0 card-body">
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Subjects: Science and Math
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png" />
                    <Card.Body>
                        <Card.Title>First and Last Name</Card.Title>
                        <Card.Text>
                            Small blurb or description of self/autobiography (e.g. age, hobbies, etc.)
                            <br /> <br />
                            $15/hr
                        </Card.Text>
                    </Card.Body>
                    <blockquote className="blockquote mb-0 card-body">
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Subjects: Science and Math
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png" />
                    <Card.Body>
                        <Card.Title>First and Last Name</Card.Title>
                        <Card.Text>
                            Small blurb or description of self/autobiography (e.g. age, hobbies, etc.)
                            <br /> <br />
                            $15/hr
                        </Card.Text>
                    </Card.Body>
                    <blockquote className="blockquote mb-0 card-body">
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Subjects: Science and Math
                            </small>
                        </footer>
                    </blockquote>
                </Card>
            </CardColumns>






            <form className="bottom" id="tohere" autoComplete="off">
                <div style={{ paddingTop: `1em`, paddingBottom: `1em` }}>
                    <div className="wrapper">
                        <div className="title">
                            <h1>Contact Us</h1>
                        </div>
                        <div className="contact-form">
                            <div className="input-fields">
                                <input type="text" className="input" placeholder="Name" />
                                <input type="text" className="input" placeholder="Email Address" />
                                <input type="text" id="formSubject" className="input" placeholder="Subject" />
                            </div>
                            <div className="msg">
                                <textarea id="formMessage" placeholder="Message"></textarea>
                                <div onClick={sendmail} className="btn">send</div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Container>
    )
}