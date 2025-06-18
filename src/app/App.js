// IMPORTAÇÂO DOS COMPONENTES
import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// COMPONENTES
import Header from "../components/Header";
import Footer from "../components/Footer";

// IMPORTANDO PAGINAS
import Home from "../pages/Home/Home.jsx"; 
import Sobre from "../pages/sobre/Sobre.jsx"; 
import Solucoes from "../pages/Solucoes"; //PRODUTO || DEFINIR COM ERICK
import Contato from "../pages/Contato/Contato"; 
import Painel from "../pages/Painel"; 
import Login from "../pages/Login"; 

//Teste novo
//AUTENTICAÇÂO
import PrivateRoute from "../components/Auth";

function App() {
  const produo = useMemo(() => [
    {image: '/icons/icon_network.svg', title: 'Otimize sua infraestrutura', texto: 'Soluções avancadas de infraestrutura, gerencimaneto dos recursos de rede proporcionando eficiencia seguranca e escalabilidade'},
    {image: '/icons/icon_network.svg', title: 'Restauração e Backup', texto: 'Soluções avancadas de infraestrutura, gerencimaneto dos recursos de rede proporcionando eficiencia seguranca e escalabilidade'},
  ],[])

     return (
      <BrowserRouter>
        <div className="Content flex min-h-screen flex-col">
          <Header/>
          <main>
            <Routes>
                {/* ROTAS */}
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/solucoes" element={<Solucoes/>}/>
                <Route path="/contato" element={<Contato/>}/>
                <Route path="/login" element={<Login/>}/>

                {/* ACESSO PRIVADO AO PAINEL */}
                <Route path="/painel" element={
                  <PrivateRoute>
                  <Painel />
                  </PrivateRoute>
                }  />
            </Routes>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
