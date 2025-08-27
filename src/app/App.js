// PASSO 1: Importar o useState
import { useState } from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";

// COMPONENTES
import Header from "../components/Header";
import Footer from "../components/Footer";


// IMPORTANDO PAGINAS
import Home from "../pages/Home/Home.jsx"; 
import Sobre from "../pages/Sobre/Sobre"; 
import Solucoes from "../pages/Solucoes";
import Contato from "../pages/Contato/Contato"; 
import Painel from "../pages/Painel"; 
import Login from "../pages/Login"; 
import Delivery from "../pages/Delivery/Delivery.jsx"
import Carrinho from "../components/Carrinho/CarrinhodeCompras.js";
import Produto from "../pages/Produto/Produto.jsx"



//AUTENTICAÇÂO
import PrivateRoute from "../components/Auth";

function App() {

  // PASSO 2: Adicionar o estado e as funções de gerenciamento do carrinho aqui
  const [carrinhoItens, setCarrinhoItens] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const handleAdicionarAoCarrinho = (produtoAdicionado) => {
    setCarrinhoItens(prevItens => {
      const itemExiste = prevItens.find(item => item.produto.id === produtoAdicionado.id);
      if (itemExiste) {
        return prevItens.map(item =>
          item.produto.id === produtoAdicionado.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prevItens, { produto: produtoAdicionado, quantidade: 1 }];
    });
  };

  const handleAtualizarQuantidade = (produtoId, novaQuantidade) => {
    if (novaQuantidade < 1) {
      setCarrinhoItens(prevItens => prevItens.filter(item => item.produto.id !== produtoId));
    } else {
      setCarrinhoItens(prevItens =>
        prevItens.map(item =>
          item.produto.id === produtoId
            ? { ...item, quantidade: novaQuantidade }
            : item
        )
      );
    }
  };

  const handleRemoverItem = (produtoId) => {
    setCarrinhoItens(prevItens => prevItens.filter(item => item.produto.id !== produtoId));
  };

  // Novas funções para controlar a visibilidade do modal
  const handleAbrirCarrinho = () => setCarrinhoAberto(true);
  const handleFecharCarrinho = () => setCarrinhoAberto(false);


     return (
      <BrowserRouter>
        <div className="Content flex min-h-screen flex-col">
          <Header
          carrinhoItens={carrinhoItens} 
          onAbrirCarrinho={handleAbrirCarrinho} 
          />
          <main>
            <Routes>

                {/* ROTAS */}
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/solucoes" element={<Solucoes/>}/>
                <Route path="/contato" element={<Contato/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/delivery" element={ <Delivery onAdicionarAoCarrinho={handleAdicionarAoCarrinho} /> }/>
                <Route path="/produto" element={<Produto/>}/>


                {/* ACESSO PRIVADO AO PAINEL */}
                <Route path="/painel" element={
                  <PrivateRoute>
                  <Painel />
                  </PrivateRoute>
                }  />
            </Routes>
          </main>
          <Footer/>
          {/* O Carrinho agora é renderizado aqui, por cima de tudo, quando estiver aberto */}
        {carrinhoAberto && (
          <Carrinho 
            itens={carrinhoItens}
            onAtualizarQuantidade={handleAtualizarQuantidade}
            onRemoverItem={handleRemoverItem}
            onFechar={handleFecharCarrinho} // Passamos a função para FECHAR
          />
        )}
        </div>
      </BrowserRouter>
  );
}

export default App
