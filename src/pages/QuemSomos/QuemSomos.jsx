import React from 'react';
import './QuemSomos.css'; // Para estilos, crie este arquivo

function QuemSomos() {
  return (
    <section className="quem-somos-container">
      <h1>Quem Somos</h1>

      <div className="historia">
        <h2>Nossa História</h2>
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
        <h2>Nossa Missão e Valores</h2>
            <p>
                Nossa **missão** é proporcionar uma experiência única e acolhedora, onde cada cliente se sinta em casa, desfrutando de produtos de alta qualidade e um ambiente que evoca as melhores lembranças afetivas.
            </p>
            <p>
                Nossos **valores** são a base de tudo o que fazemos:
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
        <h2>Nossa Equipe</h2>
            <p>
                A equipe da "Memórias de Vó" é composta por apaixonados por café e por boas histórias. Somos [Número] pessoas dedicadas a fazer com que sua visita seja inesquecível. Cada barista, atendente e chef de cozinha compartilha da nossa visão de transformar o simples ato de tomar um café em uma verdadeira celebração das memórias.
            </p>
      </div>
    </section>
  );
};

export default QuemSomos;