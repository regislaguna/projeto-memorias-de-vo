// IMPORTAÇÂO DOS COMPONENTES
import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// COMPONENTES
import Header from "../components/Header";
import Footer from "../components/Footer";


// IMPORTANDO PAGINAS
import Home from "../pages/Home/Home.jsx"; 
import Sobre from "../pages/sobre/Sobre"; 
import Solucoes from "../pages/Solucoes"; //PRODUTO || DEFINIR COM ERICK
import Contato from "../pages/Contato/Contato"; 
import Painel from "../pages/Painel"; 
import Login from "../pages/Login"; 
import Delivery from "../pages/Delivery/Delivery.jsx"


//AUTENTICAÇÂO
import PrivateRoute from "../components/Auth";

function App() {
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
                <Route path="/delivery" element={<Delivery/>}/>


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

export default App
