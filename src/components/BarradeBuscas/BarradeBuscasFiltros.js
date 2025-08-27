import React from 'react';

// Documentação:
// Este componente fornece a interface para o usuário buscar e filtrar produtos.
// Props:
// - termoBusca: o valor atual do campo de busca.
// - onBuscaChange: função chamada quando o texto da busca muda.
// - categoriaSelecionada: a categoria atualmente selecionada.
// - onCategoriaChange: função chamada quando uma nova categoria é selecionada.
// - categorias: um array de strings com todas as categorias disponíveis.

const BarradeBuscaFiltros = ({ termoBusca, onBuscaChange, categoriaSelecionada, onCategoriaChange, categorias }) => {
  return (
    <div className="bg-pink-300 p-4 rounded-lg mb-8 flex flex-col sm:flex-row items-center gap-4">
      {/* Campo de Busca */}
      <input
        type="text"
        placeholder="Buscar por nome..."
        value={termoBusca}
        onChange={onBuscaChange}
        className="w-full sm:w-1/2 p-2 border border-pink-400 rounded-md focus:outline-none focus:ring-2 focus:brown-300"
      />
      {/* Filtros de Categoria */}
      <div className="flex flex-wrap gap-2 ml-80">
        <button
          onClick={() => onCategoriaChange('Todos')}
          className={`border-solid border-pink-500 px-2 py-2 text-sm rounded-full transition-colors ${categoriaSelecionada === 'Todos' ? 'bg-white text-black' : 'bg-white text-black hover:bg-pink-400'}`}
        >
          Todos
        </button>
        {categorias.map(categoria => (
          <button
            key={categoria}
            onClick={() => onCategoriaChange(categoria)}
            className={` border-solid border-pink-500 px-2 py-2 text-sm rounded-full transition-colors ${categoriaSelecionada === categoria ? ' bg-white text-black' : 'bg-white text-black hover:bg-pink-400'}`}
          >
            {categoria}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BarradeBuscaFiltros;