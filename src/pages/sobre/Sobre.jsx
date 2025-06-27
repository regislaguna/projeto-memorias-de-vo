
// Ícones
import { FaBookOpen, FaHeart, FaUsers, FaCoffee, FaMugHot, FaClock, FaLeaf } from "react-icons/fa";

import React, { useEffect } from "react" 

import "../Sobre/Sobre.css"

function Sobre() {
  const btnTopoRef = useRef(null);
  const imagemRef = useRef(null);
  const destaquesRef = useRef([]);

  useEffect(() => {
    if (imagemRef.current) {
      imagemRef.current.style.opacity = "0";
      imagemRef.current.style.transition = "opacity 1s ease";
      setTimeout(() => {
        imagemRef.current.style.opacity = "1";
      }, 500);
    }
  }, []);

  useEffect(() => {
    const itens = destaquesRef.current;
    const handleMouseOver = (e) => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.transition = "transform 0.3s";
    };
    const handleMouseOut = (e) => {
      e.currentTarget.style.transform = "scale(1)";
    };

    itens.forEach((item) => {
      item.addEventListener("mouseover", handleMouseOver);
      item.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      itens.forEach((item) => {
        item.removeEventListener("mouseover", handleMouseOver);
        item.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (btnTopoRef.current) {
        btnTopoRef.current.style.display = window.scrollY > 300 ? "block" : "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="sobre">
      {/* Botão voltar ao topo */}
      <button
        ref={btnTopoRef}
        onClick={voltarAoTopo}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px",
          borderRadius: "50%",
          backgroundColor: "#6d4c41",
          color: "white",
          border: "none",
          cursor: "pointer",
          display: "none",
        }}
      >
        ↑
      </button>

      {/* Seção Quem Somos */}
      <section className="quem-somos-container">
        <h1>Quem Somos</h1>

        <div className="historia">
          <h2><FaBookOpen className="icone-titulo" /> Nossa História</h2>
          <p>
            A "Memórias de Vó" nasceu de um desejo profundo de resgatar e compartilhar o calor e a aconchego das casas de nossas avós.
            Em um mundo cada vez mais agitado, queríamos criar um refúgio onde o tempo parece desacelerar, e cada xícara de café vem acompanhada de uma dose de nostalgia e carinho.
          </p>
          <p>
            A cafeteria é uma homenagem às receitas secretas, aos aromas que enchiam a cozinha e, acima de tudo, aos momentos inesquecíveis passados ao lado de quem tanto amamos.
            Cada detalhe, desde a decoração vintage até o sabor dos nossos doces, é pensado para trazer à tona as mais doces "memórias de vó".
          </p>
        </div>

        <div className="missao-valores">
          <h2><FaHeart className="icone-titulo" /> Nossa Missão e Valores</h2>
          <p>
            Nossa <strong>missão</strong> é proporcionar uma experiência única e acolhedora, onde cada cliente se sinta em casa, desfrutando de produtos de alta qualidade e um ambiente que evoca as melhores lembranças afetivas.
          </p>
          <p>
            Nossos <strong>valores</strong> são a base de tudo o que fazemos:
          </p>
          <ul>
            <li>Aconchego: Criar um ambiente que transmita calor humano e bem-estar.</li>
            <li>Qualidade: Oferecer produtos frescos, saborosos e feitos com ingredientes selecionados.</li>
            <li>Tradição: Manter viva a essência das receitas caseiras e o carinho do preparo artesanal.</li>
            <li>Comunidade: Ser um ponto de encontro e conexão, fortalecendo laços e criando novas memórias.</li>
            <li>Nostalgia: Despertar sentimentos de carinho e boas lembranças através de cada detalhe.</li>
          </ul>
        </div>

        <div className="equipe">
          <h2><FaUsers className="icone-titulo" /> Nossa Equipe</h2>
          <p>
            A equipe da "Memórias de Vó" é composta por apaixonados por café e por boas histórias. Somos [Número] pessoas dedicadas a fazer com que sua visita seja inesquecível. Cada barista, atendente e chef de cozinha compartilha da nossa visão de transformar o simples ato de tomar um café em uma verdadeira celebração das memórias.
          </p>
        </div>
      </section>

      {/* Seção Sobre com Destaques */}
      <div className="sobre-container">
        <div className="sobre-conteudo historia">
          <h2><FaCoffee className="icone-titulo" /> Memórias que Aquecem o Coração: A História da Nossa Cafeteria</h2>
          <p>
            Na Memórias de Vó, nossa missão é resgatar os momentos mais doces da vida, trazendo à tona as lembranças mais queridas por meio de sabores especiais.
          </p>
          <p>
            Inspirados nas memórias afetivas de avós e familiares, oferecemos uma experiência única, repleta de aromas e sabores que revivem momentos inesquecíveis.
          </p>
          <p>
            Nosso compromisso é atrair um público de todas as idades, de todas as faixas etárias, proporcionando um ambiente acolhedor e familiar.
          </p>
          <p>Venha reviver suas melhores memórias com a gente!</p>

          <div className="destaque">
            <div
              className="destaque-item"
              ref={(el) => {
                if (el && !destaquesRef.current.includes(el)) destaquesRef.current.push(el);
              }}
            >
              <div className="destaque-icone"><FaMugHot /></div>
              <h3>Tecnologia Avançada</h3>
              <p>Precisão digital no controle de temperatura</p>
              <div className="destaque-icone"><FaClock /></div>
              <h3>Rápido Preparo</h3>
              <p>Seu café em apenas 1 minuto</p>
              <div className="destaque-icone"><FaLeaf /></div>
              <h3>Sustentável</h3>
              <p>Materiais eco-friendly e recicláveis</p>
            </div>
          </div>
        </div>

        <div className="sobre-imagem historia">
          <img
            ref={imagemRef}
            src="./assets/img/imagem-para-pagina.jpg"
            alt="Imagem da cafeteria"
            className="imagem loaded"
          />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
