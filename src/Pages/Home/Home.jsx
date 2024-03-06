import React, { useEffect } from "react";
import about_image from "../../assets/about.png";
import VideoBackground from "../../assets/homepage_video.mp4";
import { NavLink } from "react-router-dom";
import "./Home.css";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header Color="white" Home={true} />

      <div className="background-video-container">
        <video autoPlay muted playsInline loop className="background-video">
          <source src={VideoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content-overlay">
          <p className="heading">
            KMVPL <br />
            RAIPUR VISAKHAPATNAM <br /> HIGHWAY PRIVATE LIMITED
          </p>

          <NavLink
            to="/Gallery"
            activeClassName="active"
            style={{ textDecoration: "none" }}
          >
            <button className="gallery_btn">View Gallery</button>
          </NavLink>
        </div>
      </div>

      <Container>
        <Row>
          <Col md={5}>
            <p className="about">About Us</p>
            <p className="projectName">
              KMVPL Raipur Visakhapatnam Highway Private Limited
            </p>
            <p className="para">
              Development of Six Lane Basanwahi – Marangpuri Section of
              NH-130-CD Road from Km 99+500 to Km 124+661 under Raipur –
              Visakhapatnam Economic Corridor in the state of Chhattisgarh on
              Hybrid Annuity Mode- Package-CG-03
            </p>
            <p className="projectName" style={{ marginTop: 15 }}>
              Scope of Work
            </p>
            <p className="para">
              Construction of 6 lane Access controlled Green Filed highway
              having 2.79 Km’s of Twin Tube Tunnel, which includes Culverts,
              Bridges,Viaducts, Underpasses, Drains & Other Misc. Works.
            </p>
          </Col>
          <Col md={1}></Col>
          <Col md={6}>
            <img
              src={about_image}
              width="700px"
              height="520px"
              alt="Project"
              style={{ marginTop: "12vh" }}
              className="about_image"
            />
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "-15vh" }} className="grid_container">
        <Row className="grid">
          <Row>
            <Col md={5}>
              <p className="projectName">Client</p>
              <p className="sub_text">National Highways Authority of India</p>
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
              <p className="projectName">Construction Period </p>
              <p className="sub_text">730 Days / 2 Years</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={5}>
              <p className="projectName">Length in KM</p>
              <p className="sub_text">25.161 Km’s</p>
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
              <p className="projectName">O&M Period</p>
              <p className="sub_text">15 years</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={5}>
              <p className="projectName">Concession Agreement Date</p>
              <p className="sub_text">20-July-2022</p>
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
              <p className="projectName">Appointed Date</p>
              <p className="sub_text">16-Oct-2023</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={5}>
              <p className="projectName">Pavement Classification</p>
              <p className="sub_text">
                Main Carriage way is Flexible , Tunnel & Toll Plaza is with
                Rigid Pavement
              </p>
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
              <NavLink
                to="/Gallery"
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                <button className="gallery_btn">View Gallery</button>
              </NavLink>
            </Col>
          </Row>
        </Row>
      </Container>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
