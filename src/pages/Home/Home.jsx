import './Style.css'

function Home () {
   
    return(
      <>
      <section className="name-área">
      <div className="name-text-area">
        <p> Sabor inesquecível</p>
        <h1>Memórias de Vó</h1>
        <p>Um lugar perfeito para a família e amantes de café. 
          Nossa cafeteria tem uma espaço confortável para você e sua família recordar as receitas mais deliciosas da infância.</p>
      </div>
    </section>
    <section class="section-produtos">
      <div class="section-produtos-text">
        <h3>Cafés</h3>
      <p>Conheça nossos cafés e bolos exclusivos pensados e preparados por nossa vórista renomada!</p>
      </div> 
    <div class="button">
      <a href="#mais-produtos" class="ver-mais-btn">Veja todos</a>
    </div>
  </section>

      <section className="section-produtos">
      <div className="section-product-photos">
        <div className="section-product-photo">
          <div className="section-product-photoarea">
            <div className="section-product-photoinfo">
              <h5>Cafés Especiais</h5>
              <p>Desfrute de uma seleção premium de cafés, preparados com grãos 100% arábica e técnicas artesanais. Desde o clássico espresso até drinks cremosos e aromáticos, cada xícara é uma experiência única para os amantes de café.</p>
          </div>  
          <img src="./img/cafescard.jpg" alt="Produto 1" />
        </div>
      </div>
      <div className="section-product-photo">
        <div className="section-product-photoarea">
          <div className="section-product-photoinfo">
              <h5>Bolos Caseiros</h5>
              <p>Delicie-se com nossos bolos feitos diariamente, usando ingredientes frescos e receitas tradicionais. Massas fofinhas, recheios cremosos e coberturas irresistíveis – perfeitos para acompanhar um café ou celebrar momentos especiais.
  
              </p>
          </div>  
          <img src="./assets/img/boloscard.jpg" alt="Produto 2" />
        </div>
      </div>
      <div className="section-product-photo">
        <div className="section-product-photoarea">
          <div className="section-product-photoinfo">
            <h5>Brownies Premium</h5>
            <p>Pedaços de puro prazer em chocolate! Nossos brownies são densos, úmidos e cheios de sabor, com opções que incluem nozes, doce de leite e até um toque de sal marinho para contrastar a doçura.</p>
          </div>  
          <img src="./assets/img/browniescard.jpg" alt="Produto 3" />
        </div>
      </div>
      <div className="section-product-photo">
         <div className="section-product-photoarea">
            <div className="section-product-photoinfo">
              <h5>Salgados Artesanais</h5>
              <p>Lanches saborosos e crocantes, feitos com massa folhada ou caseira e recheios generosos. Opções quentinhas e irresistíveis, ideais para um café da manhã reforçado ou um lanche rápido no meio do dia.</p>
            </div>  
            <img src="./assets/img/salgadoscard.jpg" alt="section-product-photos 4" />
          </div>
        </div>
      </div>
  </section>

}

export default Home;