import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="footer">
        <img
          src="https://img.freepik.com/fotos-premium/sentido-um-personagem-de-desenho-animado-da-pixar-e-o-bebe-do-filme_900958-37512.jpg"
          alt=""
        />
        <h1>Olá, aqui é a Vitória.</h1>
        <h2>Desenvolvedora Front End</h2>
        <p>
          Desenvolvedora de software, apaixonada por desenvolver soluções para
          pessoas.<br></br> Conectada com as tecnologias mais usadas do mercado.
        </p>

        <div>
          <a href="#" class="botao">
            Conheça-me
          </a>
          <a href="#" class="botao">
            Projetos
          </a>
          <a href="#" class="botao">
            Habilidades
          </a>
          <a href="#" class="botao">
            Contato
          </a>
        </div>
      </div>
    </>
  );
}

export default App;

//Essa página aqui aplica as funcionalidades
