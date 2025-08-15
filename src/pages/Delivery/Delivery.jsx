import React, { useState, useMemo } from 'react';
import { mockProdutos } from '../../data/produtos';
import GridProduto from '../../components/Grid/GridProduto';
import Carrinho from '../../components/Carrinho/CarrinhodeCompras';
import BarradeBuscaFiltros from '../../components/BarradeBuscas/BarradeBuscasFiltros';

// // Ícone do Carrinho (SVG)
// const IconeCarrinho = ({ contagem }) => (
//   <div className="relative">
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//     </svg>
//     {contagem > 0 && (
//       <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//         {contagem}
//       </span>
//     )}
//   </div>
// );


// Documentação:
// Este é o componente principal da página de delivery. Ele gerencia os estados de:
// - Busca e filtro de produtos.
// - Itens no carrinho de compras.
// - Visibilidade do modal do carrinho.

function Delivery({ onAdicionarAoCarrinho}) {
  // Estados da página
  const [termoBusca, setTermoBusca] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');
  // const [carrinhoItens, setCarrinhoItens] = useState([]);
  

  // Deriva as categorias únicas a partir dos dados dos produtos
  const categorias = useMemo(() => [...new Set(mockProdutos.map(p => p.categoria))], []);
  
  // Lógica para filtrar os produtos com base na busca e na categoria
  const produtosFiltrados = mockProdutos.filter(produto => {
    const correspondeBusca = produto.nome.toLowerCase().includes(termoBusca.toLowerCase());
    const correspondeCategoria = categoriaSelecionada === 'Todos' || produto.categoria === categoriaSelecionada;
    return correspondeBusca && correspondeCategoria;
  });

  // Funções para manipular o carrinho
  // const handleAdicionarAoCarrinho = (produtoAdicionado) => {
  //   setCarrinhoItens(prevItens => {
  //     const itemExiste = prevItens.find(item => item.produto.id === produtoAdicionado.id);
  //     if (itemExiste) {
  //       // Se o item já existe, aumenta a quantidade
  //       return prevItens.map(item =>
  //         item.produto.id === produtoAdicionado.id
  //           ? { ...item, quantidade: item.quantidade + 1 }
  //           : item
  //       );
  //     }
  //     // Se for um novo item, adiciona ao carrinho com quantidade 1
  //     return [...prevItens, { produto: produtoAdicionado, quantidade: 1 }];
  //   });
  // };

  // const handleAtualizarQuantidade = (produtoId, novaQuantidade) => {
  //   if (novaQuantidade < 1) {
  //     // Remove o item se a quantidade for menor que 1
  //     handleRemoverItem(produtoId);
  //   } else {
  //     setCarrinhoItens(prevItens =>
  //       prevItens.map(item =>
  //         item.produto.id === produtoId
  //           ? { ...item, quantidade: novaQuantidade }
  //           : item
  //       )
  //     );
  //   }
  // };

  // const handleRemoverItem = (produtoId) => {
  //   setCarrinhoItens(prevItens => prevItens.filter(item => item.produto.id !== produtoId));
  // };
  
  

  return (
    <div className="bg-stone-50 min-h-screen font-sans">
      {/* Cabeçalho Fixo */}
      

      {/* Conteúdo Principal */}
      <main className="container mx-auto p-8">
        <BarradeBuscaFiltros
          termoBusca={termoBusca}
          onBuscaChange={(e) => setTermoBusca(e.target.value)}
          categoriaSelecionada={categoriaSelecionada}
          onCategoriaChange={setCategoriaSelecionada}
          categorias={categorias}
        />
        <GridProduto 
          produtos={produtosFiltrados}
          onAdicionarAoCarrinho={onAdicionarAoCarrinho} 
        />
      </main>

      
    </div>
  );
}

export default Delivery;