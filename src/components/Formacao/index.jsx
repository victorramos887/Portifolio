import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

import mbausp from "../../assets/img/MBAUPS.jpeg";
import fatec from "../../assets/img/fatec.jpeg";
import etec from "../../assets/img/etec.png";

import "animate.css";
import TrackVisibility from "react-on-screen";
import { Container, Row, Col } from "react-bootstrap";

const Formacao = () => {
  return (
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) => (
              <MDBContainer
                fluid
                className="py-5"
                style={{ backgroundColor: "#406292" }}
                id="formacao"
              >
                <h2 className="h2-inicio">Formação</h2>
                <p className="p-inicio">
                  Minha formação acadêmica me proporcionou um sólido alicerce de
                  conhecimento e habilidades essenciais. Ao longo desse período,
                  explorei disciplinas diversas de ciências naturais. Minha
                  jornada acadêmica moldou minha visão de mundo e fortaleceu
                  minha capacidade de análise, resolução de problemas e
                  comunicação, preparando-me para enfrentar os desafios
                  profissionais com confiança.
                </p>
                <div className="main-timeline-2">
                  <div className="timeline-2 left-2">
                    <MDBCard
                      className={
                        isVisible ? "animate__animated animate__fadeIn" : ""
                      }
                    >
                      <div className="formcao-imgx">
                        <MDBCardImage
                          src={mbausp}
                          alt="Responsive image"
                          position="top"
                        />
                        <div className="formacao-txtx">
                          <h4>PÓS-GRADUAÇÃO LATO SENSU</h4>
                          <span>
                            Desenvolvimento de ferramentas estatisticas e
                            Machine Learning
                          </span>
                        </div>
                      </div>

                      <MDBCardBody className="p-4">
                        <h4 className="fw-bold mb-4">
                          MBA Data Science And Analytics
                        </h4>
                        <p className="text-muted mb-4">
                          <MDBIcon far icon="clock" /> 2023
                        </p>
                        <p className="mb-0">
                          Ampliação de conhecimentos em análises de dados.
                        </p>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                  <div className="timeline-2 right-2">
                    <MDBCard>
                      <div className="formcao-imgx">
                        <MDBCardImage
                          src={fatec}
                          alt="Responsive image"
                          position="top"
                        />
                        <div className="formacao-txtx">
                          <h4>GRADUÇÃO - FATEC SÃO PAULO</h4>
                          <span>
                            Hidrologia, Projetos hidráulicos, desenho técnico.
                          </span>
                        </div>
                      </div>

                      <MDBCardBody className="p-4">
                        <h4 className="fw-bold mb-4">
                          Tecnologo em Hidráulca e Saneamento Ambiental
                        </h4>
                        <p className="text-muted mb-4">
                          <MDBIcon far icon="clock" /> 2020
                        </p>
                        <p className="mb-0">
                          Desenvolvimento de projetos hidráulicos, hidrológicos e de licenciamento ambiental. Pesquisas realcionadas a perdas, consumos e tratamentos de água foi foco nesta graduação.
                        </p>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                  <div className="timeline-2 left-2">
                    <MDBCard>
                      <div className="formcao-imgx">
                        <MDBCardImage
                          src={etec}
                          alt="Responsive image"
                          position="top"
                        />
                        <div className="formacao-txtx">
                          <h4>TÉCNICO - ETEC OSASCO II</h4>
                          <span>
                            Análises químicas, processo industriais, pesquisa e
                            desevolvimento de métodos análisticos.
                          </span>
                        </div>
                      </div>

                      <MDBCardBody className="p-4">
                        <h4 className="fw-bold mb-4">Técnico em Química</h4>
                        <p className="text-muted mb-4">
                          <MDBIcon far icon="clock" /> 2014
                        </p>
                        <p className="mb-0">
                          Conhecimento de análises laboratóriais químicas, auxilio em pesquisas e desevolvimento de novos produtos na industria de cosméticos, alimentos e polímeros.
                        </p>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                </div>
              </MDBContainer>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  );
};

export default Formacao;
