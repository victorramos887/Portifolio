import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";

const Carreira = () => {
  return (
    <Container>
      <Row>
        <Col size={12}>
          <MDBContainer className="py-5" id="timeline">
            <h2 className="h2-inicio">Carreira</h2>
            <p className="p-inicio">
              Minha carreira é marcada por um compromisso constante com a
              excelência e o crescimento profissional. Ao longo dos anos,
              adquiri experiência significativa em saneamento e me destaquei em
              cadastros técnicos, desenvolvimento de soluções para redução de
              perda de água. Minha paixão pela aprendizagem contínua me motivou
              a abraçar desafios e a buscar oportunidades de desenvolvimento.
              Estou comprometido em contribuir com soluções inovadoras e agregar
              valor a equipes e projetos, enquanto continuo a expandir meu
              conjunto de habilidades e conhecimentos.
            </p>
            <ul className="timeline">
              <li className="timeline-item mb-5">
                <h5 className="fw-bold">
                  Gerente de deselvolvimento - Monitora Tecnologia e Informação
                </h5>
                <p className="text-muted mb-2 fw-bold">Atual</p>
                <p className="text-muted">
                  Desenvolvimento de banco de dados para DataLogger, criação de
                  backend para recebimento de dados de pressão e vazão para
                  controle de sistema de distribuição de água. Organização de
                  equipe de desenvolvivmento frontend e backend. Pesquisa de
                  experiencia de usuários para software de controle de perda de
                  água e controle de consumo em escolas. Desenovlivmento de
                  automatização de deploy em AWS com Terraform.
                </p>
              </li>
              <li className="timeline-item mb-5">
                <h5 className="fw-bold">
                  Supervisor de Técnico - Monitora Tecnologia e Informação
                </h5>
                <p className="text-muted mb-2 fw-bold">
                  Agosto 2020 - Outubro 2022
                </p>
                <p className="text-muted">
                  Desenvolvimento de soluções para organização de relatórios
                  diários de manutenção de equipamentos hidráulicos de
                  distribuição de água. Organização de equipe de campo de
                  manutenção de equipamentos de controle de distribuição de
                  água. Auxilio na elaboração de estudos para controle de
                  pressão em sistema de distribuição de água.
                </p>
              </li>
              <li className="timeline-item mb-5">
                <h5 className="fw-bold">
                  Assistente técnico - Monitora Tecnologia e Informação
                </h5>
                <p className="text-muted mb-2 fw-bold">
                  Outubro 2019 - Agosto 2020
                </p>
                <p className="text-muted">
                  Desenvolvimento de projeto em QGIS para cadastro técnico de
                  rede de água, esgoto e drenagem para grandes consecionária de
                  água, manutenção de banco de dados geográficos. Auxilio de
                  treinamento de equipes de cadastrista. Organização de equipe
                  de campo de manutenção de equipamentos de controle de
                  distribuição de água.
                </p>
              </li>
              <li className="timeline-item mb-5">
                <h5 className="fw-bold">
                  Estagiário - Monitora Tecnologia e Informação
                </h5>
                <p className="text-muted mb-2 fw-bold">
                  setembro 2018 - Outubro 2019
                </p>
                <p className="text-muted">
                  Análise de sistemas de informação geográfica (SIG), construção
                  de desenhos técnicos, mapas e a pesquisa em cadastros para
                  auxiliar no desenvolvimento de projetos de saneamento visando
                  o controle de perda de água, o cadastro técnico, a medição de
                  vazão de esgoto e a medição de vazão de água.
                </p>
              </li>
            </ul>
          </MDBContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Carreira;
