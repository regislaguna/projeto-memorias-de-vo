
import { useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Suporte from "../pages/Suporte";
import Sobre from "../pages/Sobre/Sobre.jsx";
import Quemsomos from "../pages/Quemsomos";
import Solucoes from "../pages/Solucoes";
import Contato from "../pages/Contato/Contato";
import Painel from "../pages/Painel";
import Login from "../pages/Login";
import PrivateRoute from "../components/Auth";

function App() {
 
     return (
      <BrowserRouter>
        <div className="Content flex min-h-screen flex-col">
          <Header/>
          <main>
            <Routes>
                <Route path="/" element={<Home /> } />
                <Route path="/sobre" element={<Sobre />} />
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
