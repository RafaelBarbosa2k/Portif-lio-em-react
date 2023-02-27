import React from "react";
import './App.css';
//import Header from "./components/header";

function App() {
  return (
    <div className="back">
      <header>
        <h1>RAFAEL DE MOURA BARBOSA</h1>
      </header>
      <main className="main_box">
        <img
          className="foto"
          src="https://uploaddeimagens.com.br/images/004/333/504/full/foto.png?1675797417"
          alt="Desenho que eu acho que sou eu kkk"
          width="50%"
          height="100%"
          />
        <div className="caixa with_me">
          <h2 className="titulos">SOBRE MIM</h2>
          <p>Tenho 22 anos, sou brasileiro, atualmente morando em <a href="https://pt.wikipedia.org/wiki/Cuiab%C3%A1" target="_blank" rel="noreferrer">Cuiabá-MT</a>, <strong>sou Desenvolvedor WEB Front End</strong>. Gosto de tecnologia, estou sempre buscando me aprimorar na área. Sou dedicado, tenho facilidade para trabalhar em grupo e aprendo rápido. Gosto como hobbies, atividades físicas, esportes, esportes eletrônicos.</p>
        </div>
      </main>
      <div className="caixa competencias">
          <h2 className="titulos">COMPETÊNCIAS</h2>
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
      <div className="carrossel">
        <h2 className="nome">PROJETOS</h2>
          <div className="container">
            <div class="gallery-wrapper">
              <div class="gallery">
              <img
              className="item"
              src="https://cdn-icons-png.flaticon.com/512/71/71768.png"
              alt="projeto slq"
              width="150"
              height="150"
              />
              <img
              className="item"
              src="https://cdn-icons-png.flaticon.com/512/71/71768.png"
              alt="projeto slq"
              width="150"
              height="150"
              />
              <img
              className="item"
              src="https://cdn-icons-png.flaticon.com/512/71/71768.png"
              alt="projeto slq"
              width="150"
              height="150"
              />
              </div>
            </div>
          </div>
      </div>
      <div className="caixa ctts">
        <h2 className="titulos tit_ctt">CONTATOS</h2>
        <a
          className="ctt-image zap"
          href="https://wa.me/5566999526889"
          target="_blank" rel="noreferrer"  
        >
          <img
            src="https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2018/11/whatsapp-logo-icone-fundo-transparente.png?resize=696%2C712&ssl=1"
            width="70"
            height="70"
            alt="WhatsApp"
            />
        </a>
        <a
          className="ctt-image git"
          href="https://github.com/RafaelBarbosa2k"
          target="_blank" rel="noreferrer"
          >
          <img 
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            width="70"
            height="70"
            alt="GitHub"
            />
        </a>
        <a
          className="ctt-image link"
          href="https://www.linkedin.com/in/rafaeldemourabarbosa/"
          target="_blank" rel="noreferrer"
          >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png"
            width="70"
            height="70"
            alt="LinkedIn"
            />
        </a>
        <a
          className="ctt-image mail"
          href="mailto:rafaelbarbosa2k19@hotmail.com"
          target="_blank" rel="noreferrer"
          >
          <img 
            src="https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png"
            width="70"
            height="70"
            alt="Email"
            />
        </a>
      </div>
    </div>

  );
}

export default App;
