import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to="/">
                    Online Store
                </NavLink>
                {user.isAuth ? (
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={'outline-light'}>Admin Panel</Button>
                        <Button variant={'outline-light'} style={{ marginLeft: '15px' }}>
                            Logout
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>
                            Sign Up
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;
