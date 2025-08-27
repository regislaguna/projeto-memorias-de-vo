import React from 'react';

// Documentação:
// O componente Carrinho exibe os itens adicionados, permite ajustes e mostra o total.
// Props:
// - itens: array de itens no carrinho. Cada item tem o produto e a quantidade.
// - onAtualizarQuantidade: função para aumentar ou diminuir a quantidade de um item.
// - onRemoverItem: função para remover um item do carrinho.
// - onFechar: função para fechar a visualização do carrinho (se for um modal/sidebar).

const Carrinho = ({ itens, onAtualizarQuantidade, onRemoverItem, onFechar }) => {
  // Calcula o valor total do carrinho
  const total = itens.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0);

  return (
    // O container principal pode ser estilizado como um modal ou uma barra lateral
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="w-full max-w-md bg-pink-100 bg-opacity-90 h-full flex flex-col">
        {/* Cabeçalho do Carrinho */}
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl text-brown font-fontsemibold">Meu Carrinho</h2>
          <button onClick={onFechar} className="text-2xl bg-pink-400 hover:bg-pink-300">&times;</button>
        </div>

        {/* Lista de Itens */}
        <div className="flex-grow p-4 overflow-y-auto">
          {itens.length === 0 ? (
            <p className="text-brown-500">Seu carrinho está vazio.</p>
          ) : (
            itens.map(item => (
              <div key={item.produto.id} className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src={item.produto.imagemUrl} alt={item.produto.nome} className="w-16 h-16 rounded object-cover mr-4" />
                  <div>
                    <h3 className="font-semibold">{item.produto.nome}</h3>
                    <p className="text-gray-600">R$ {item.produto.preco.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => onAtualizarQuantidade(item.produto.id, item.quantidade - 1)} className=" bg-pink-500 px-2 border rounded">-</button>
                  <span>{item.quantidade}</span>
                  <button onClick={() => onAtualizarQuantidade(item.produto.id, item.quantidade + 1)} className=" bg-pink-500 px-2 border rounded">+</button>
                  <button onClick={() => onRemoverItem(item.produto.id)} className=" bg-pink-500 text-white ml-2">Remover</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Rodapé do Carrinho */}
        <div className="p-4 border-t">
          <div className="flex justify-between items-center text-xl text-brown font-bold mb-4">
            <span>Total:</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
          <button 
            onClick={() => console.log("Pedido finalizado com os itens:", itens)}
            className="w-full bg-pink-400 text-white py-3 rounded-lg hover:bg-pink-300 transition-colors"
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;