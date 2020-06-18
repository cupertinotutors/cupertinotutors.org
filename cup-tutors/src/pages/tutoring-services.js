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

    function requestform () {
        var written = document.getElementById('yourname');
        var yourname = written.value;
        var written2 = document.getElementById('studentname');
        var studentname = written2.value;
        var written3 = document.getElementById('reqsubjects');
        var reqsubjects = written3.value;
        var title1 = document.getElementById('title1');
        var written4 = document.getElementById('notes');
        var notes = written4.value;

        if (title1.checked) {
            window.location.href = "mailto:jjasonsshan@gmail.com" + "?subject=Tutor Request" +
                "&body=Request for tutor from:" + '%0D%0A' + '%20' + '%20' + '%20' + '%20' + '%20' + "Parent--" + yourname + '%0D%0A' +
                '%20' + '%20' + '%20' + '%20' + '%20' + "Student (T1)--" + studentname + '%0D%0A' + '%0D%0A' +
                "Requested subjects:%20" + reqsubjects + '%0D%0A' + '%0D%0A' + "Additional Notes:%20" + notes + '%0D%0A' + "%20";
        }
        else {
            window.location.href = "mailto:jjasonsshan@gmail.com" + "?subject=Tutor Request" +
                "&body=Request for tutor from:" + '%0D%0A' + '%20' + '%20' + '%20' + '%20' + '%20' + "Parent--" + yourname + '%0D%0A' +
                '%20' + '%20' + '%20' + '%20' + '%20' + "Student (Not T1)--" + studentname + '%0D%0A' + '%0D%0A' +
                "Requested subjects:%20" + reqsubjects + '%0D%0A' + '%0D%0A' + "Additional Notes:%20" + notes + '%0D%0A' + "%20";
        }

    }

    return (
        <Container fluid id="services-page">
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
                        <Nav.Link href="/meet-the-tutors">Meet the Tutors</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#tohere">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="main"></div>
            <Row>
                <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} xl={{ span: 8, offset: 2 }}>
                    <div className="overlay">
                        <p id="p1">Cupertino Tutors</p>
                        <p id="p2">Our Services</p>
                        <p style={{ lineHeight: 1.7 }}>Get in contact with us today, and see how we can help your student improve.</p>
                    </div>
                </Col>
            </Row>
            <div style={{ marginTop: `20vh` }}></div>

            <Row className="backgroundG">
                <Col xs={12} sm={12} md={12} lg={6} xl={6} style={{ padding: 0 }}>
                    <div className="imgdiv">
                        <Image src="https://images.unsplash.com/photo-1585432959445-662c9bbcd91d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" style={{ padding: `3vw` }} roundedCircle fluid />
                    </div>
                </Col>
                <Col className="d-flex align-items-center justify-content-center" xs={12} sm={12} md={12} lg={6} xl={6} style={{ padding: 0 }}>
                    <div className="nexttoright">
                        <h3 style={{ textAlign: `center`, fontWeight: `bold` }}>Find a Tutor</h3>
                        <p style={{ textAlign: `center` }}>Fill out the form below to start finding a tutor suited for your student.</p>
                    </div>
                </Col>
            </Row>

            <div className="backgroundL3">
                <div className="container">
                    <div className="contact-box">
                        <div className="left"></div>
                        <div className="right">
                            <h2>Request Form</h2>
                            <input type="text" id="yourname" className="field" placeholder="Parent Name" />
                            <input type="text" id="studentname" className="field" placeholder="Student Name" />
                            <input type="text" className="field" placeholder="Your Email" />
                            <input type="text" id="reqsubjects" className="field" placeholder="Requested Subjects" />
                            <div id="thischeckbox">
                                <input type="checkbox" id="title1" name="checkfortitle" value="title1" />
                                <label for="title1" id="thislabel">Title 1 Student (free tutoring)</label><br />
                            </div>
                            <textarea id="notes" placeholder="Additional Notes" className="field"></textarea>
                            <button onClick={requestform} className="btn">Send</button>
			            </div>
		            </div>
                </div>
            </div>


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