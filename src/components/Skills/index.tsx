import qgis from "../../assets/img/icons8-qgis.svg";
import qgis2 from "../../assets/img/qgis-png1.png";
import react from "../../assets/img/react-svgrepo-com.svg";
import react2 from "../../assets/img/react2.png";
import flask from "../../assets/img/flask-svgrepo-com.svg";
import flask2 from "../../assets/img/flask2.png";
import postgresql from "../../assets/img/postgresql_icon.svg";
import postgresql2 from "../../assets/img/postgresql2.svg";
import agile from "../../assets/img/agile-svgrepo-com.svg";
import agile2 from "../../assets/img/agil2.png";
import terraform from "../../assets/img/terraform.svg";
import terraform2 from "../../assets/img/terraform2.png";
import django from "../../assets/img/django.svg";
import django2 from "../../assets/img/django.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import CardSkills from "../../componentes2/CardSkills";
import React from "react";

import { Button, Modal } from "antd";

const Skills = () => {
  const [paragrafoModal, setParagrafoModal] = React.useState("");
  const [titleModal, setTitleModal] = React.useState("");
  const [imagemx, setImagex] = React.useState(null);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skillsitem = [
    {
      id: 7,
      title: "Django",
      porcentagem: "61",
      imagem: django,
      imagem2: django2,
      paragrafo: `O Django é um framework web Python de alto nível que incentiva o desenvolvimento rápido e um design limpo e pragmático. Desenvolvido por programadores experientes, ele cuida de grande parte das dificuldades do desenvolvimento web, permitindo que você se concentre em escrever sua aplicação sem precisar reinventar a roda. É gratuito e de código aberto.`,
    },
    {
      id: 1,
      title: "Qgis",
      porcentagem: "55",
      imagem: qgis,
      imagem2: qgis2,
      paragrafo: `QGIS é um aplicativo profissional GIS Livre e e de Código Aberto, com
    muito orgulho, que é construído a partir de Software Livre e de Código
    Aberto, Free and Open Source Software (FOSS).`,
    },
    {
      id: 2,
      title: "React",
      porcentagem: "35",
      imagem: react,
      imagem2: react2,
      paragrafo: `React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.`,
    },
    {
      id: 3,
      title: "Flask",
      porcentagem: "65",
      imagem: flask,
      imagem2: flask2,
      paragrafo: `Flask é um micro framework para desenvolvimento web. Você está vendo a documentação da versão em desenvolvimento.`,
    },
    {
      id: 4,
      title: "Postgresql",
      porcentagem: "47",
      imagem: postgresql,
      imagem2: postgresql2,
      paragrafo: `PostgreSQL é um poderoso sistema de banco de dados relacional de objeto de código aberto com mais de 35 anos de desenvolvimento ativo que lhe rendeu uma forte reputação de confiabilidade, robustez de recursos e desempenho.`,
    },
    {
      id: 5,
      title: "Agil",
      porcentagem: "27",
      imagem: agile,
      imagem2: agile2,
      paragrafo: `O método ágil é uma abordagem flexível para o desenvolvimento de projetos que se concentra na colaboração, adaptação e entrega contínua. Em vez de seguir um plano rígido do início ao fim, as equipes ágeis trabalham em iterações curtas, frequentemente ajustando suas prioridades com base no feedback constante. Isso permite que as equipes sejam mais ágeis e respondam às mudanças do projeto de forma eficaz, entregando valor aos clientes de maneira mais rápida. O método ágil é amplamente adotado em desenvolvimento de software e é conhecido por promover a comunicação eficaz, a transparência e a melhoria contínua.`,
    },
    {
      id: 6,
      title: "Terraform",
      porcentagem: "22",
      imagem: terraform,
      imagem2: terraform2,
      paragrafo: `Terraform é uma ferramenta de infraestrutura como código que permite construir, alterar e versionar infraestrutura com segurança e eficiência. Isso inclui componentes de baixo nível, como instâncias de computação, armazenamento e rede; e componentes de alto nível, como entradas DNS e recursos SaaS.`,
    },
  ];

  const [openModal, setOpenModal] = React.useState(false);

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Ao longo da minha trajetória profissional, adquiri diversas
                ferramentas e habilidades que me tornaram um profissional mais
                completo e qualificado. Essas ferramentas e habilidades me
                permitem realizar meu trabalho de forma mais eficiente e eficaz,
                e me ajudam a enfrentar os desafios do mercado de trabalho.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skillsitem.map((item) => (
                  <div
                    className="item"
                    onClick={() => {
                      setTimeout(() => {
                        setParagrafoModal(item.paragrafo);
                        setTitleModal(item.title);
                        setImagex(item.imagem2);
                      }, 0);
                      setOpenModal(true);
                    }}
                  >
                    <CardSkills
                      imagem={item.imagem}
                      title={item.title}
                      porcentagem={item.porcentagem}
                    />
                    {/* Use o nome correto do objeto item */}
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={openModal}
        onCancel={() => {
          setOpenModal(false);
        }}
        footer={[
          <Button key="back" onClick={() => setOpenModal(false)}>
            Voltar
          </Button>,
        ]}
      >
        <Row>
          <Col span={1}>
            <h1>{titleModal} <img src={imagemx} alt="" style={{ width: "32px" }} /></h1>
          </Col>

        </Row>
        <Row>
          <Col>
            <p>{paragrafoModal}</p>
          </Col>
        </Row>
      </Modal>
    </section>
  );
};

export default Skills;
