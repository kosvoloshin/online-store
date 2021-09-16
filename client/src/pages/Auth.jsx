import React from 'react';
import { Container, Form, Card, Button, Row, Col } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils';

const Auth = () => {
    const { pathname } = useLocation();
    const isLogin = pathname === LOGIN_ROUTE;
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Login' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3" placeholder="Enter email" />
                    <Form.Control className="mt-3" placeholder="Enter password" />
                    <Row className="mt-3">
                        <Col>
                            {isLogin && <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>}
                            {!isLogin && <NavLink to={LOGIN_ROUTE}>Sign In</NavLink>}
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <Button variant="outline-success">{isLogin ? 'Login' : 'Registration'}</Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
