import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Carreira from "./components/Carreira";
import Footer from "./components/Footer";
import Formacao from "./components/Formacao";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Carreira />
      <Row>
        <Col></Col>
        <Col size={12} sm={8}>
          <Formacao />
        </Col>
        <Col></Col>
      </Row>

      <Footer />
    </div>
  );
}

export default App;
