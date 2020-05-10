/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { Container, Row, Col, Image } from "react-bootstrap"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./Header"
// import "./layout.css"
import "../css/custom.css"
import facebookimage from "../images/gallery2.png"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        <Container>
          <Row>
            <Col lg={4}>
              <h2>Our Vision</h2>
              <p>
                Providing education, support and prevention programs for
                children and their families to promote health, security and
                self-sufficiency.
              </p>
            </Col>
            <Col lg={4}>
              <h2>We are located at:</h2>
              <p>
                1612 Newcastle Street
                <br />
                Brunswick, GA 31520-6781
              </p>
              <p>912-388-0376</p>
              <p>Grandparent Connection: 912-289-7428</p>
            </Col>
            <Col lg={4}>
              <h2>Find us on Facebook</h2>
              <p>
                <a href="https://www.facebook.com/cc4children/">
                  <Image src={facebookimage} alt="Facebook" fluid />
                </a>
              </p>
            </Col>
          </Row>
          <p className="text-center mt-4">
            © {new Date().getFullYear()} Coastal Coalition for Children | Site
            Designed by{" "}
            <a href="https://www.nautilusdesigns.com">Nautilus Designs</a>
          </p>
        </Container>
      </footer>
    </>
  )
}

export default Layout
