import React from "react";
import './App.css';
//import Header from "./components/header";

function App() {
  return (
    <body className="fundo">
      <header>
        <h1 className="nome">Rafael de Moura Barbosa</h1>
      </header>
      <main>
        <div>
          <img
            className="foto"
            src="https://uploaddeimagens.com.br/images/004/333/504/full/foto.png?1675797417"
            alt="Desenho que eu acho que sou eu kkk"
            width="370"
            height="370"
            />
          <div className="caixa">
            <h2 className="titulos">Sobre Mim</h2>
            <p>Aqui vai um texto</p>
          </div>
        </div>
        <div className="caixa">
          <h2 className="titulos">Competências</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.Js</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Comunicativo</li>
            <li>Trabalho em equipe</li>
            <li>Liderança</li>
            <li>Tomada de dicisão</li>
            <li>Resolução de problemas</li>
            <li>Inglês básico</li>
          </ul>
        </div>
        <div className="carrosel">
          <h2 className="nome">Projetos</h2>
          <img
            className="foto"
            src="https://cdn-icons-png.flaticon.com/512/71/71768.png"
            alt="projeto slq"
            width="150"
            height="150"
          />
          <img
            className="foto"
            src="https://cdn-icons-png.flaticon.com/512/71/71768.png"
            alt="projeto slq"
            width="150"
            height="150"
          />
          <img
            className="foto"
            src="https://cdn-icons-png.flaticon.com/512/71/71768.png"
            alt="projeto slq"
            width="150"
            height="150"
          />
        </div>
        <div className="caixa">
          <h2 className="titulos">Contatos</h2>
          <p>whatsapp: (66) 9 9952-6889</p>
          <p>instagram: link.ig.com</p>
          <p>github: link.github.com</p>
          <p>linkedin: link.linkedin.com</p>
          <p>email: rafaelbarbosa2k19@hotmail.com</p>
        </div>
      </main>
    </body>

  );
}

export default App;
