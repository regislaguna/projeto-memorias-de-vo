
import { useMemo } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Suporte from "../pages/Suporte";
import Quemsomos from "../pages/Quemsomos";
import Solucoes from "../pages/Solucoes";
import Contato from "../pages/Contato";
import Painel from "../pages/Painel";
import Login from "../pages/Login";
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
          <main className="flex flex-grow container mx-auto p-4 mt-[100px]">
            <Routes>
                <Route path="/" element={<Home /> } />
                <Route path="/quemsomos" element={<Quemsomos /> } />
                <Route path="/solucoes" element={<Solucoes />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/suporte" element={<Suporte /> } />
                <Route path="/painel" element={
                  <PrivateRoute>
                  <Painel />
                  </PrivateRoute>
                }  />
                <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
         
        </div>
      </BrowserRouter>
    
  );
}

export default App;
