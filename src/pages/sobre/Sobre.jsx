import React, { useEffect } from "react" 
import "../sobre/Sobre"
import "../sobre/Sobre.css"

function Sobre() {
    useEffect(() => {
    // Animação para a imagem
    const imagem = document.querySelector(".sobre-imagem img");
    if(imagem) {
        imagem.style.opacity = "0";
        imagem.style.transition = "opacity 1s ease";

        setTimeout(function() {
        imagem.style.opacity = "1";
        }, 500);
    }

    // Efeito hover nos itens de destaque
    const itensDestaque = document.querySelectorAll(".destaque-item");
        itensDestaque.forEach(function(item) {
            item.addEventListener("mouseover", function() {
                this.style.transform = "scale(1.05)";
                this.style.transition = "transform 0.3s";
        });
        item.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });

    // Botão para voltar ao topo 
    const btnTopo = document.createElement("button");
    btnTopo.style.textContent = "↑";
    btnTopo.style.position = "fixed";
    btnTopo.style.bottom = "20px";
    btnTopo.style.right = "20px";
    btnTopo.style.padding = "10px";

    btnTopo.style.borderRadius = "50%";
    btnTopo.style.backgroundColor = "#6d4c41";
    btnTopo.style.color = "white";
    btnTopo.style.border = "none";
    btnTopo.style.cursor = "pointer";
    btnTopo.style.display = "none";

    document.body.appendChild(btnTopo);

    // Mostrar/ocultar o botão quando rolar a página
    const handleScroll = function() {
        if(window.scrollY > 300) {
            btnTopo.style.display = "block";
        }else {
            btnTopo.style.display = "none";
        }
    };

    window.addEventListener("scroll", handleScroll);

    // Função para voltar ao topo 
    btnTopo.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Função para limpar 
    return() => {
        itensDestaque.forEach(item => {
            item.removeEventListener("mouseover");
            item.removeEventListener("mouseout");
        });
        window.removeEventListener("scroll", handleScroll);
        if(document.body.contains(btnTopo)) {
            document.body.removeChild(btnTopo);
        }
    };
}, []);

    return(
        <body>
    <section className="sobre">
        <div className="sobre-container">
            <div className="sobre-conteudo">
                <h2>Memórias que Aquecem o Coração: A História da Nossa Cafeteria</h2>
                <p>
                    Na Memórias de Vó, nossa missão é resgatar os momentos mais doces da vida, trazendo à tona as lembranças mais queridas por meio de sabores especiais.
                    Somos uma cafeteria dedicada à panificação e confeitaria, onde cada produto é feito com carinho, seguindo receitas tradicionais que aquecem o coração.
                </p>
                <p>
                    Inspirados nas memórias afetivas de avós e familiares, oferecemos uma experiência única, repleta de aromas e sabores que revivem momentos inesquecíveis. 
                    Desde o pão fresquinho do café da manhã até o bolo caseiro que acompanha as boas conversas, nosso objetivo é que nossos produtos toquem cada um de nossos clientes, fazendo com que se sintam em casa.
                </p>
                <p>
                    Nosso compromisso é atrair um público de todas as idades, de todas as faixas etárias, proporcionando um ambiente acolhedor e familiar.
                    A Memórias de Vó é o lugar onde o passado se encontra com o presente, e onde cada pedaço de nossa confeitaria é uma viagem no tempo. 
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
                        <p>Materiais eco-friendly e reciclavél</p>
                    </div>
                </div>
            </div>
            <div className="sobre-imagem">
                <img src="./assets/img/imagem-para-pagina.jpg" alt="" className="imagem"/>
            </div>
        </div>
    </section>
    <script src="./assets/js/sobre.js"></script>
</body>
    )
}
export default Sobre;