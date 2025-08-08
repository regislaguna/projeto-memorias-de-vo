// Arquivo: Delivery.js

import React from 'react';
import './Delivery.css'; // Apenas o import do CSS é necessário aqui

// --- Dados do Menu ---
// Manter os dados aqui por enquanto está ótimo.
const menu = [
  {
    id: 1,
    nome: "Hambúrguer Clássico",
    descricao: "Pão, carne, queijo, alface, tomate e molho especial.",
    preco: "R$ 25,00",
  },
  {
    id: 2,
    nome: "Hambúrguer Duplo",
    descricao: "Pão, duas carnes, queijo, alface, tomate e molho especial.",
    preco: "R$ 35,00",
  },
  {
    id: 3,
    nome: "Batata Frita",
    descricao: "Porção de batata frita crocante.",
    preco: "R$ 15,00",
  },
  {
    id: 4,
    nome: "Refrigerante",
    descricao: "Lata 350ml.",
    preco: "R$ 5,00",
  },
];

// --- Componente para um único Produto ---
// É uma boa prática definir componentes auxiliares fora do componente principal.
const Produto = ({ produto }) => {
  return (
    <div className="produto">
      <h2>{produto.nome}</h2>
      <p>{produto.descricao}</p>
      <p className="preco">{produto.preco}</p>
    </div>
  );
};

// --- Componente Principal da Página de Delivery ---
function Delivery() {
  // A função agora retorna diretamente o JSX que queremos mostrar.
  return (
    <div className="menu">
      <h1>Nosso Menu</h1>
      <div className="produtos">
        {/* Usamos o .map() diretamente aqui dentro para gerar a lista de produtos */}
        {menu.map((item) => (
          <Produto key={item.id} produto={item} />
        ))}
      </div>
    </div>
  );
}

export default Delivery;