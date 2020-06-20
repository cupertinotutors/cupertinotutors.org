import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Image } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Collapse } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";

export default function Home() {
    function sendmail() {
        var input = document.getElementById('formSubject');
        var inputsubject = input.value;
        var input2 = document.getElementById('formMessage');
        var inputmessage = input2.value;

        window.location.href = "mailto:jjasonsshan@gmail.com" + "?subject=" + inputsubject + "&body=" + inputmessage;
    }

    return (
        <Container fluid id="home-page">
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale = 1, shrink-to-fit=no, user-scalable=no" />
                <body className="this-body" />
            </Helmet>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="/">Cupertino Tutors</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/tutoring-services">Tutoring Services</Nav.Link>
                        <Nav.Link href="/meet-the-tutors">Meet the Tutors</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#tohere">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="main"></div>
            <Row>
                <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} xl={{ span: 8, offset: 2}}>
                    <div className="overlay">
                        <p id="p1">Cupertino Tutors</p>
                        <p id="p2">Local Tutors</p>
                        <p style={{ lineHeight: 1.7 }}>Cupertino Tutors is a recently established program to help younger students who have struggled with online learning. Our aim 
                            is to provide quality service, and help create a strong foundation for students in their academics.</p>
                    </div>
                </Col>
            </Row>
            <div style={{ marginTop: `20vh` }}></div>

            <Row className="backgroundG">
                <Col xs={12} sm={12} md={12} lg={6} xl={6} style={{ padding: 0 }}>
                    <div className="imgdiv">
                        <Image src="https://www.ceefcares.org/wp-content/uploads/2019/03/group-of-kids.jpg" style={{ padding: `3vw` }} roundedCircle fluid />
                    </div>
                </Col>
                <Col className="d-flex align-items-center justify-content-center" xs={12} sm={12} md={12} lg={6} xl={6}style={{ padding: 0 }}>
                    <div className="nexttoright">
                        <h3 style={{ textAlign: `center`, fontWeight: `bold` }}>About Us</h3>
                        <p style={{ textAlign: `center` }}>Cupertino Tutors is comprised of a group of Bay Area high 
                            school students who are eager to help mentor younger students. 
                            Each student has their own specialties of subjects to teach. 
                            Students are also part of the Cupertino Educational Endowment 
                            Foundation, helping to raise money for the Cupertino Union School 
                            District. Our goal is to help students to flourish in their 
                            academic subjects, in a one-on-one learning style.</p>
                    </div>
                </Col>
            </Row>

            <Row className="backgroundL">
                <Col className="d-flex align-items-center justify-content-center" xs={{ span: 12, order: `last` }} sm={{ span: 12, order: `last` }} md={{ span: 12, order: `last` }} lg={{ span: 6, order: `first` }} xl={{ span: 6, order: `first` }} style={{ padding: 0 }}>
                    <div className="nexttoright">
                        <h3 style={{ textAlign: `center`, fontWeight: `bold` }}>Our Services</h3>
                        <p style={{ textAlign: `center` }}>Cupertino Tutors offers a variety of subjects to tutor,
                            each student specializing in their own strong suits. We also offer
                            Title 1 students tutoring at no cost. You can view our full range
                            of tutoring services, as well as all our tutors below.</p>
                    <Button className="btn" href="/tutoring-services" variant="dark" style={{ color: `white` }}>Tutoring Services</Button>{' '}
                    <Button className="btn" href="/meet-the-tutors" variant="dark" style={{ color: `white` }}>Meet the Tutors</Button>{' '}
                    </div>
                </Col>
                <Col xs={{ span: 12, order: `first` }} sm={{ span: 12, order: `first` }} md={12} lg={6} xl={6} style={{ padding: 0 }}>
                    <Image src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" style={{ padding: `3vw` }} alt="" fluid rounded />
                </Col>
            </Row>

            <div className="backgroundL2" style={{ height: `1em` }}></div>
            <form className="bottom" id="tohere" autocomplete="off">
                <div style={{ paddingTop: `1em`, paddingBottom: `1em` }}>
                    <div className="wrapper">
                        <div className="title">
                            <h1>Contact Us</h1>
                        </div>
                        <div className="contact-form">
                            <div className="input-fields">
                                <input type="text" class="input" placeholder="Name" />
                                    <input type="text" class="input" placeholder="Email Address" />
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
