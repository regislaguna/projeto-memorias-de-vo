//import '../Home/Home.css'

function Home () {
   
    return(
      <>
      <section className="h-[428px] flex justify-start items-center bg-cover bg-center" >
        <div className="w-2/5 p-6 flex flex-col gap-3 text-black ml-[150px] mt-[50px]">
          <p className="font-semibold text-lg text-gray-800">Sabor inesquecível</p>
          <h1 className="text-[60px] leading-tight mt-[2px] mb-1.5 uppercase text-[#634234] font-serif">Memórias de Vó</h1>
          <p className="font-lato text-justify text-base text-gray-700">
            Um lugar perfeito para a família e amantes de café. Nossa cafeteria tem um espaço confortável para você e sua família recordar as receitas mais deliciosas da infância.
          </p>
        </div>
      </section>

      <section className="flex-grow flex-col">
        {/* Seção de Produtos (agrupada) */}
        <section className="w-screen flex flex-col items-center mt-12 py-10">
          
          {/* Texto de chamada */}
          <div className="text-center px-4">
            <h3 className="text-4xl font-bold mb-4 uppercase text-gray-800">Cafés e Delícias</h3>
            <p className="text-xl max-w-2xl mx-auto text-gray-600">
              Conheça nossos cafés e bolos exclusivos pensados e preparados por nossa vórista renomada!
            </p>
          </div> 

          {/* Galeria de Produtos */}
          <div className="w-full mt-10 mb-10 flex items-center justify-center flex-wrap gap-5 px-4">
            
            {/* Cartão de Produto 1: Cafés */}
            <div className="relative w-[280px] h-[380px] cursor-pointer group shadow-lg rounded-2xl overflow-hidden">
              <img src={process.env.PUBLIC_URL + '/img/cafescard.jpg'} alt="Cafés Especiais" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black/60 text-white text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h5 className="text-lg font-bold uppercase tracking-wider">Cafés Especiais</h5>
                <p className="mt-2 text-sm text-justify">Desfrute de uma seleção premium de cafés, preparados com grãos 100% arábica e técnicas artesanais. Cada xícara é uma experiência única.</p>
              </div>
            </div>

            {/* Cartão de Produto 2: Bolos */}
            <div className="relative w-[280px] h-[380px] cursor-pointer group shadow-lg rounded-2xl overflow-hidden">
              <img src={process.env.PUBLIC_URL + '/img/boloscard.jpg'} alt="Bolos Caseiros" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black/60 text-white text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h5 className="text-lg font-bold uppercase tracking-wider">Bolos Caseiros</h5>
                <p className="mt-2 text-sm text-justify">Delicie-se com nossos bolos feitos diariamente, usando ingredientes frescos e receitas tradicionais com massas fofinhas e recheios cremosos.</p>
              </div>
            </div>

            {/* Cartão de Produto 3: Brownies */}
            <div className="relative w-[280px] h-[380px] cursor-pointer group shadow-lg rounded-2xl overflow-hidden">
              <img src={process.env.PUBLIC_URL + '/img/browniescard.jpg'} alt="Brownies Premium" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black/60 text-white text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h5 className="text-lg font-bold uppercase tracking-wider">Brownies Premium</h5>
                <p className="mt-2 text-sm text-justify">Pedaços de puro prazer em chocolate! Nossos brownies são densos, úmidos e cheios de sabor, com opções que incluem nozes e doce de leite.</p>
              </div>
            </div>
            
            {/* Cartão de Produto 4: Salgados */}
            <div className="relative w-[280px] h-[380px] cursor-pointer group shadow-lg rounded-2xl overflow-hidden">
              <img src={process.env.PUBLIC_URL + '/img/salgadoscard.jpg'} alt="Salgados Artesanais" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black/60 text-white text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h5 className="text-lg font-bold uppercase tracking-wider">Salgados Artesanais</h5>
                <p className="mt-2 text-sm text-justify">Lanches saborosos e crocantes, feitos com massa folhada ou caseira e recheios generosos. Ideais para um café da manhã ou um lanche rápido.</p>
              </div>
            </div>

          </div>

          {/* Botão "Veja todos" */}
          <div className="mt-8">
            <a href="#mais-produtos" className="inline-block bg-[#634234] text-white py-3 px-10 rounded-full text-base font-semibold uppercase no-underline hover:bg-[#d78f8f] transition-colors duration-300 shadow-lg">
              Veja todos os produtos
            </a>
          </div>

        </section>
      </section>
  </>
)
}

export default Home;