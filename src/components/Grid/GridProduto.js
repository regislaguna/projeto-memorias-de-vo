import React from 'react';
import CardProduto from '../Card/CardProduto';

// Documentação:
// O componente GridDeProdutos é responsável por renderizar a lista de produtos.
// Props:
// - produtos: um array de objetos de produtos que devem ser exibidos.
// - onAdicionarAoCarrinho: a função a ser passada para cada CardProduto.

const GridDeProdutos = ({ produtos, onAdicionarAoCarrinho }) => {
  return (
    // Grid responsivo com Tailwind CSS
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {produtos.map((produto) => (
        <CardProduto 
          key={produto.id} 
          produto={produto} 
          onAdicionarAoCarrinho={onAdicionarAoCarrinho} 
        />
      ))}
    </div>
  );
};

export default GridDeProdutos;