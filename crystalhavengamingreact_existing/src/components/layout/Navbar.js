import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const Navbar = () => {


    return (
        <Navigation bg="dark" variant="dark">
            <Container>
                <Navigation.Brand href="#home">
                    <img
                        alt=""
                        src="/assets/chg.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}

                </Navigation.Brand>
            </Container>
        </Navigation>
    )
}

export default Navbar
