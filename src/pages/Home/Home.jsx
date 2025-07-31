import React from 'react';
import {Link} from 'react-router-dom';

// Dados dos produtos para renderização dinâmica
const productsData = [
  {
    id: 1,
    image: '/img/cafescard.jpg',
    alt: 'Cafés Especiais',
    title: 'Cafés Especiais',
    description: 'Desfrute de uma seleção premium de cafés, preparados com grãos 100% arábica e técnicas artesanais. Cada xícara é uma experiência única.',
  },
  {
    id: 2,
    image: '/img/boloscard.jpg',
    alt: 'Bolos Caseiros',
    title: 'Bolos Caseiros',
    description: 'Delicie-se com nossos bolos feitos diariamente, usando ingredientes frescos e receitas tradicionais com massas fofinhas e recheios cremosos.',
  },
  {
    id: 3,
    image: '/img/browniescard.jpg',
    alt: 'Brownies Premium',
    title: 'Brownies Premium',
    description: 'Pedaços de puro prazer em chocolate! Nossos brownies são densos, úmidos e cheios de sabor, com opções que incluem nozes e doce de leite.',
  },
  {
    id: 4,
    image: '/img/salgadoscard.jpg',
    alt: 'Salgados Artesanais',
    title: 'Salgados Artesanais',
    description: 'Lanches saborosos e crocantes, feitos com massa folhada ou caseira e recheios generosos. Ideais para um café da manhã ou um lanche rápido.',
  },
];

// Componente para um único Cartão de Produto
const ProductCard = ({ product }) => (
  // cria uma rota e ao clicar vai para página de produtos
  <Link to="/produtos" className="relative w-[280px] h-[380px] cursor-pointer group shadow-lg rounded-2xl overflow-hidden">
    <img
      src={process.env.PUBLIC_URL + product.image}
      alt={product.alt}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black/60 text-white text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
      <h5 className="text-lg font-bold uppercase tracking-wider">{product.title}</h5>
      <p className="mt-2 text-sm text-justify">{product.description}</p>
    </div>
  </Link>
);

function Home () {
   
    return(
      <>
      <div className="flex flex-col min-h-screen text-wrap"> 
      <section className="h-[428px] flex justify-start items-center bg-cover bg-center">
        <div className="w-1/4 p-6 flex flex-col gap-3 text-black ml-[200px] mt-[50px]">
          <p className="font-semibold text-lg text-gray-800 font-fontsemibold line-clamp-1">Sabor inesquecível</p>
          <h1 className="text-[60px] leading-tight mt-[2px] mb-1.5 uppercase text-[#634234] font-fontbold line-clamp-2">Memórias de Vó</h1>
          <p className="font-lato text-justify text-base text-gray-700 font-fontregular line-clamp-6">
            Um lugar perfeito para a família e amantes de café. <a className="underline decoration-pink-500 decoration-5"> Nossa cafeteria</a> tem um espaço confortável para você e sua família recordar as receitas mais deliciosas da infância.
          </p>
        </div>
      </section>

      <section className="flex-grow">
        {/* Seção de Produtos (agrupada) */}
        <section className="w-screen flex flex-col items-center mt-12 py-10">
          
          {/* Texto de chamada */}
          <div className="text-center mt-10 z-10">
            <h3 className="text-4xl font-bold mb-4 uppercase text-gray-800 justify-center ">Cafés e Delícias</h3>
            <p className="text-xl max-w-2xl mx-auto text-gray-600 z-10">
              Conheça nossos cafés e bolos exclusivos pensados e preparados por nossa vórista renomada!
            </p>
          </div> 

           {/* Galeria de Produtos Renderizada Dinamicamente */}
           <div className="w-full mt-10 mb-10 flex items-center justify-center flex-wrap gap-5 px-4">
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </section>
      </div>
  </>
)
}

export default Home;