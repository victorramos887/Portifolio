import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../../assets/img/logos.png";
import linkedin from "../../assets/img/icons8-linkedin-100.png";
import whatsapp from "../../assets/img/icons8-whatsapp.svg";
import github from '../../assets/img/icons8-github.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* <MailchimpForm /> */}
          
          <Col>
            <img src={logo} alt="Logo" />
          </Col>
          <Col>
            <p style={{"text-align": "center"}}>Rua Geraldo Crespo, 20 Jardim D'Abril , São Paulo - SP</p>
            <p style={{"text-align": "center"}}><a href="mailto:v.ramos58@hotmail.com">v.ramos58@hotmail.com</a></p>
          </Col>
          <Col className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/victor-ramos-pereira-mendes-soares-6b3a005b/"
                target="_blank"
              >
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a
                href="whatsapp://send?phone=+55 11 98759-9004"
                target="_blank"
              >
                <img src={whatsapp} alt="Linkedin" />
              </a>
              <a href="https://github.com/victorramos887?subject=Assunto do email&body=Conteúdo do email que será preenchido automaticamente" target="_blank">
                <img src={github} alt=""></img>
              </a>
            </div>
            <p>&copy; Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
