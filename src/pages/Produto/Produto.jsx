import React, { useState } from 'react';
import './Produto.css';

const pratos = [
  {
    id: 1, nome: "Bolo de Cenoura", descricao: "Bolo de cenoura com cobertura de chocolate ao leite.", preco: 10.5, categoria: "Bolos", imagem: "https://receitadaboa.com.br/wp-content/uploads/2024/12/iStock-1312530797.jpg"
  },

  {
    id: 2, nome: "Bolo de Banana", descricao: "Bolo de banana com canela e cobertura de caramelo.", preco: 10, categoria: "Bolos", imagem: "https://receitatodahora.com.br/wp-content/uploads/2023/08/bolo-de-banana-caramelada-24-0811-1024x683.jpg.webp"
  },

  {
    id: 3, nome: "Bolo de Churros", descricao: "Bolo de churros com uma massa macia e molhadinha com aquele bom doce de leite mineiro.", preco: 8.50, categoria: "Bolos", imagem: "https://conteudo.imguol.com.br/2014/10/06/bolo-de-churros-1412620670853_615x300.jpg.webp"
  },
  {
    id: 4, nome: "Pão de Torresmo", descricao: "Pão caseiro com pedaços de torresmo.", preco: 7, categoria: "Pães", imagem: "https://receitinhasdadani.com.br/wp-content/uploads/2025/04/Pao-de-torresmo-da-roca.jpeg"
  },
  {
    id: 5, nome: "Pão de Batata", descricao: "Pão caseirinho de batata doce.", preco: 2.50, categoria: "Pães", imagem: "https://amopaocaseiro.com.br/wp-content/uploads/2020/04/pao-de-batata_IMG_4534-840x560.jpg"
  },
  {
    id: 6, nome: "Pão Frances", descricao: "Pão frances, o queridinho qeu não pode faltar na mesa do brasileiro.", preco: 13, categoria: "Pães", imagem: "https://s2-receitas.glbimg.com/-V4nFrbjz9JMuWJnvQxl2NEplg8=/0x0:1280x922/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/U/q/B5doHYQcKDxm0YsOynPA/pao-frances.jpeg"
  },
  {
    id: 7, nome: "Mocaccino", descricao: "Mocaccino de receita caseira.", preco: 9.50, categoria: "Bebidas", imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/e7292aea607c4ae69d06920ac8bb404a_XL.jpg"
  },
  {
    id: 8, nome: "Chá de Anis estrelado", descricao: "Um chá leve e cheio de beneficios para sua saúde e bem estar.", preco: 8, categoria: "Bebidas", imagem: "https://uploads.metroimg.com/wp-content/uploads/2025/03/31165820/cha-com-canela.jpg"
  },
  {
    id: 9, nome: "Suco de abacaxi com maracujá", descricao: "Um suco natural com frutas frescas e selecionadas.", preco: 12, categoria: "Bebidas", imagem: "https://www.oitedi.com.br/_next/image?url=https%3A%2F%2Ftedi-production.s3.amazonaws.com%2Fcooking_recipes%2Ffood_description%2F988f5d8f1e9b2140de67fad1fe831825796f4cb1.png&w=640&q=70"
  },

];  

function CardapioItem({ prato }) {
  return (
    <div className="card">
      <img src={prato.imagem} alt={prato.nome} />
      <h2>{prato.nome}</h2>
      <p>{prato.descricao}</p>
      <span>R$ {prato.preco.toFixed(2)}</span>
    </div>
  );
}

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  // Filtra os pratos de acordo com a categoria selecionada
  const pratosFiltrados =
    categoriaSelecionada === "Todos"
      ? pratos
      : pratos.filter(prato => prato.categoria === categoriaSelecionada);

  // Pega as categorias únicas
  const categorias = ["Todos", ...new Set(pratos.map(prato => prato.categoria))];

  return (
    <div>
      <h1>Cardápio da Confeitaria</h1>

      {/* Botões de filtro */}
      <div className="filtros">
        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoriaSelecionada(cat)}
            className={categoriaSelecionada === cat ? "ativo" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lista de pratos filtrados */}
      <div className="container">
        {pratosFiltrados.map(prato => (
          <CardapioItem key={prato.id} prato={prato} />
        ))}
      </div>
    </div>
  );
}

export default App;
