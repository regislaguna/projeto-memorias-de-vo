import React from 'react';

// Documentação:
// O componente CardProduto exibe as informações de um único produto.
// Props:
// - produto: um objeto contendo os detalhes do produto (nome, preco, imagemUrl, etc.).
// - onAdicionarAoCarrinho: uma função que será chamada quando o botão "Adicionar ao Carrinho" for clicado.

const CardProduto = ({ produto, onAdicionarAoCarrinho }) => {
  return (
    // Container do card com estilização do Tailwind
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <img className="w-full h-48 object-cover" src={produto.imagemUrl} alt={produto.nome} />
      <div className="p-4">
        <h3 className="text-xl font-serif font-semibold text-gray-800">{produto.nome}</h3>
        <p className="text-sm text-gray-500 mt-1">
          {`Por ${produto.cozinheiro.nome} (Receita da Vó)`}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-black">{`R$ ${produto.preco.toFixed(2)}`}</span>
          <div className="flex items-center">
            <span className="text-black">⭐</span>
            <span className="ml-1 text-gray-600">{produto.avaliacao}</span>
          </div>
        </div>
        <button
          onClick={() => onAdicionarAoCarrinho(produto)}
          className="w-full mt-4 bg-slate-500 text-white py-2 rounded-lg hover:bg-slate-900 transition-colors duration-300"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default CardProduto;