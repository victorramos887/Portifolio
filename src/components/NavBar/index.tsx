import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import linkedin from '../../assets/img/icons8-linkedin.svg'
import github from '../../assets/img/icons8-github.svg'
import whatsapp from "../../assets/img/icons8-whatsapp.svg";
import logo from '../../assets/img/logos.png'

import React from "react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" style={{"width":"8vh"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projeto
            </Nav.Link>
            <Nav.Link
              href="#timeline"
              className={
                activeLink === "timeline" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("timeline")
                console.log(activeLink)
              }}
              
            >
              Carreira
            </Nav.Link>
            <Nav.Link
              href="#formacao"
              className={
                activeLink === "formacao" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("formacao")
                console.log(activeLink)
              }}
              
            >
              Formação
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/victor-ramos-pereira-mendes-soares-6b3a005b/" target="_blank">
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a href="https://github.com/victorramos887" target="_blank">
                <img src={github} alt=""></img>
              </a>
              <a
                href="whatsapp://send?phone=+55 11 98759-9004"
                target="_blank"
              >
                <img src={whatsapp} alt="Linkedin"  />
              </a>
            </div>

            <button
              className="vvd"
              onClick={() => {
                console.log("connect");
              }}
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
