import { Link } from "gatsby"
import React from "react"
import { Container, Nav, Navbar, Col, Row, Image } from "react-bootstrap"
import logo from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Row>
        <Col lg={12} className="text-center">
          <Link to="/">
            <Image src={logo} alt={siteTitle} className="maxLogoWidth" fluid />
          </Link>
        </Col>
        <Col lg={12}>
          <Nav className="justify-content-center" activeKey="/">
            <Navbar
              fluid
              className="navbar justify-content-center navbar-light"
              id="mainNav"
              expand="lg"
              collapseOnSelect={true}
            >
              <Navbar.Toggle aria-controls="navbarResponsive" />
              <Navbar.Collapse id="navbarResponsive">
                <Nav className="navbar-nav text-center ml-auto">
                  <ul className="navbar-nav justify-content-center text-center">
                    <li>
                      <Link
                        to="/about"
                        className="nav-link"
                        activeClassName="active"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/programs"
                        className="nav-link"
                        activeClassName="active"
                      >
                        Programs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/volunteer"
                        className="nav-link"
                        activeClassName="active"
                      >
                        Volunteer
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/donate"
                        className="nav-link"
                        activeClassName="active"
                      >
                        Donate
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/events"
                        className="nav-link"
                        activeClassName="active"
                      >
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="nav-link"
                        activeClassName="active"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Nav>
        </Col>
      </Row>
    </Container>
  </header>
)

export default Header
