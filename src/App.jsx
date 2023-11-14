import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes, Route as RouteDOM } from "react-router-dom";
import Conheca from "./paginas/Conheca";
import Contato from "./paginas/Contato";
import Habilidades from "./paginas/Habilidades";
import Projetos from "./paginas/Projetos";
import "./App.css";

function App() {
  return (
    <Router>
      <img
        src="https://png.pngtree.com/template/20190313/ourlarge/pngtree-architect-design-logo-template-image_67702.jpg"
        alt=""
      />

      <h1>Olá, aqui é a Brand Company</h1>
      <h2>Criando Experiências, Construindo Legados</h2>
      <h4>
        Seja para a construção de um lar acolhedor, um espaço de trabalho
        inspirador<br></br> ou um ambiente comercial vibrante, nossa empresa de
        arquitetura está comprometida<br></br> em transformar suas visões em
        realidade.
      </h4>
      <div>
        <Link to="/">Home</Link>

        <Link to="/Conheca">Conheça</Link>

        <Link to="/Habilidades">Habilidades</Link>

        <Link to="Projetos">Projetos</Link>

        <Link to="/Contato">Contato</Link>

        <Routes>
          <RouteDOM path="/" />
          <RouteDOM path="/contato" element={<Contato />} />
          <RouteDOM path="/conheca" element={<Conheca />} />
          <RouteDOM path="/habilidades" element={<Habilidades />} />
          <RouteDOM path="/projetos" element={<Projetos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
