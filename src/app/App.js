
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

function App() {
 
  const produo = useMemo(() => [
    {image: '/icons/icon_network.svg', title: 'Otimize sua infraestrutura', texto: 'Soluções avancadas de infraestrutura, gerencimaneto dos recursos de rede proporcionando eficiencia seguranca e escalabilidade'},
    {image: '/icons/icon_network.svg', title: 'Restauração e Backup', texto: 'Soluções avancadas de infraestrutura, gerencimaneto dos recursos de rede proporcionando eficiencia seguranca e escalabilidade'},

  ],[])
     return (
      <BrowserRouter>
        <div className="Content flex min-h-screen flex-col">
          <Header/>
          <main ClassName="flex-grow container mx-auto p-4">
            <Routes>
                <Route path="/Home" element={<Home /> } />
                <Route path="/Quemsomos" element={<Quemsomos /> } />
                <Route path="/Solucoes" element={<Solucoes />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/Suporte" element={<Suporte /> } />
            </Routes>

          </main>
          <Footer />
         
        </div>
      </BrowserRouter>
    
  );
}

export default App;
