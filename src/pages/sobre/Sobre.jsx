
//IMPOTAÇÔES
import React, { useEffect } from "react"

//IMPORTAÇÂO DE ICONES
import { FaBullseye } from "react-icons/fa"
import { FaBook } from "react-icons/fa"
import { FaUsers } from "react-icons/fa";

// IMPORTANDO PAGINA
import "./Sobre"
import "./Sobre.css"

function Sobre() {
    return (
        <div>
            <section className="sobre">
                <div className="sobre-container">
                    <div className="title-principal">
                        <h1 className="title-principal-h1"><strong>Um pouco Sobre Nós</strong></h1>
                    </div>
                    {/* BLOCO - NOSSA HISTÓRIA */}
                    <div className="bloco-sobre normal">
                        <div className="bloco-texto">
                            <h2 className="sub-titles"><FaBook />Nossa História</h2>
                            <p>
                                A "Memórias de Vó" nasceu de um desejo profundo de resgatar e compartilhar o calor e a aconchego das casas de nossas avós.
                                Em um mundo cada vez mais agitado, queríamos criar um refúgio onde o tempo parece desacelerar, e cada xícara de café vem acompanhada de uma dose de nostalgia e carinho.
                            </p>
                            <p>
                                A cafeteria é uma homenagem às receitas secretas, aos aromas que enchiam a cozinha e, acima de tudo, aos momentos inesquecíveis passados ao lado de quem tanto amamos.
                                Cada detalhe, desde a decoração vintage até o sabor dos nossos doces, é pensado para trazer à tona as mais doces "memórias de vó".
                            </p>
                        </div>
                        <div className="bloco-imagem">
                            <img src={`${process.env.PUBLIC_URL}/img/CoffeEntrada.png`} alt="Imagem da Entrada da Cafeteria" className="images" />
                        </div>
                    </div>

                    {/* BLOCO - MISSÃO E VALORES */}
                    <div className="bloco-sobre invertido">
                        <div className="bloco-imagem">
                            <img src={`${process.env.PUBLIC_URL}/img/MissaoValores.png`} alt="Nossa Missão e Valores" className="Images" />
                        </div>
                        <div className="bloco-texto">
                            <h2 className="sub-titles"><FaBullseye /> Nossa Missão e Valores</h2>
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
                    </div>

                    {/* BLOCO - EQUIPE */}
                    <div className="bloco-sobre normal">
                        <div className="bloco-texto">
                            <h2 className="sub-titles"><FaUsers />Nossa Equipe</h2>
                            <p>
                                A equipe da "Memórias de Vó" é composta por apaixonados por café e por boas histórias.
                                Somos [Número] pessoas dedicadas a fazer com que sua visita seja inesquecível.
                                Cada barista, atendente e chef de cozinha compartilha da nossa visão de transformar o simples ato de tomar um café em uma verdadeira celebração das memórias.
                            </p>
                        </div>
                        <div className="bloco-imagem">
                            <img src={`${process.env.PUBLIC_URL}/img/equip.jpg`} alt="Nossa Equipe" className="images" />
                        </div>
                    </div>

                    {/* BLOCO FINAL */}
                    <div className="sobre-conteudo">
                        <h2>Memórias que Aquecem o Coração: A História da Nossa Cafeteria</h2>
                        <p>
                            Na Memórias de Vó, nossa missão é resgatar os momentos mais doces da vida, trazendo à tona as lembranças mais queridas por meio de sabores especiais.
                        </p>
                        <p>
                            Inspirados nas memórias afetivas de avós e familiares, oferecemos uma experiência única, repleta de aromas e sabores que revivem momentos inesquecíveis.
                        </p>
                        <p>
                            Nosso compromisso é atrair um público de todas as idades, proporcionando um ambiente acolhedor e familiar.
                        </p>
                        <p>
                            Venha reviver suas melhores memórias com a gente!
                        </p>

                        <div className="destaque">
                            <div className="destaque-item">
                                <div className="destaque-icone">☕</div>
                                <h3>Tecnologia Avançada</h3>
                                <p>Precisão digital no controle de temperatura</p>
                                <div className="destaque-icone">⏱️</div>
                                <h3>Rápido Preparo</h3>
                                <p>Seu café em apenas 1 minuto</p>
                                <div className="destaque-icone">🌱</div>
                                <h3>Sustentável</h3>
                                <p>Materiais eco-friendly e recicláveis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <script src="./assets/js/sobre.js"></script>
        </div>
    )
}

export default Sobre;
