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
    <div className="bg-stone-100 p-4 rounded-lg mb-8 flex flex-col sm:flex-row items-center gap-4">
      {/* Campo de Busca */}
      <input
        type="text"
        placeholder="Buscar por nome..."
        value={termoBusca}
        onChange={onBuscaChange}
        className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-800"
      />
      {/* Filtros de Categoria */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoriaChange('Todos')}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${categoriaSelecionada === 'Todos' ? 'bg-yellow-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
        >
          Todos
        </button>
        {categorias.map(categoria => (
          <button
            key={categoria}
            onClick={() => onCategoriaChange(categoria)}
            className={`px-4 py-2 text-sm rounded-full transition-colors ${categoriaSelecionada === categoria ? 'bg-yellow-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
          >
            {categoria}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BarradeBuscaFiltros;