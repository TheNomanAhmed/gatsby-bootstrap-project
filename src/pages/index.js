import React from "react"
// import { Link } from "gatsby"
import { Container, Carousel, Row, Col } from "react-bootstrap"
import Layout from "../components/Layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import slider01 from "../images/donate.png"
import slider02 from "../images/donate2.png"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="First Steps, Healthy Families, Grandparent Connection" /> */}
    <Container>
      <Carousel interval={10000}>
        <Carousel.Item>
          <img className="d-block w-100" src={slider01} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider02} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
    <Container>
      <h1 className="text-center m5">“Partnering for a promising future”</h1>
      <hr />
      <Row>
        <Col lg={4}>
          <h2>First Steps</h2>
          <p>
            For expectant parents and parents of newborns feeling particularly
            challenged. We offer emotional support, parenting education, and
            referrals to community services.
          </p>
        </Col>
        <Col lg={4}>
          <h2>Grandparent Connection</h2>
          <p>
            This program is for grandparents who are raising their
            grandchildren. We conduct support groups, training classes, in-home
            visitations and an extensive referral network in Glynn and McIntosh
            counties. Join us the 3rd Monday of the month for the Grandparent
            Connection.
          </p>
        </Col>
        <Col lg={4}>
          <h2>Healthy Families of Coastal Georgia</h2>
          <p>
            Healthy Families is part of a national program designed to help
            expectant and new parents get their children off to a healthy start.
            Families participate voluntarily in the program and receive home
            visiting and referrals from trained staff.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
