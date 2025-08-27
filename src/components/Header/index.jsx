import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { isAuthenticated, logout } from "../../utils/storage";
import Logo from '../../assets/img/logovo.png';
import BannerHome from '../../assets/img/bannerteste.png';

const IconeCarrinho = ({ contagem }) => (
    <div className="relative cursor-pointer transform hover:scale-110 transition-transform">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#634234]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      {contagem > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {contagem}
        </span>
      )}
    </div>
);


const Header = ({ carrinhoItens = [], onAbrirCarrinho }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const ehPaginaInicial = location.pathname === "/";
    const contagemItensCarrinho = carrinhoItens.reduce((total, item) => total + item.quantidade, 0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    
    return(
        <header className="relative w-full h-[100px]"> {/* Definimos uma altura fixa no container principal */}
          {/* Container para Logo e Navegação (fluxo normal) */}
          <div className="h-full w-full flex items-center">
            <div className="flex ml-40 justify-center items-center gap-4">
                <img src={Logo} className="w-[75px] h-[75px] rounded-full" alt="Logo Memórias de Vó"/>
                <h1 className="flex text-2xl uppercase font-sofia text-[#634234] font-fontsemibold">Memórias de Vó</h1>
            </div>
            <nav className="mr-60 h-full flex-1 flex justify-center">
                <ul className="flex h-full items-center gap-[10px]">
                  <li className="p-2 font-extrabold text-xl text-[#634234] uppercase tracking-wide hover:text-[#da5089] cursor-pointer"><Link to="/">Início</Link></li>
                  <li className="p-2 font-extrabold text-xl text-[#634234] uppercase tracking-wide hover:text-[#da5089] cursor-pointer"><Link to="/Sobre">Sobre</Link></li>
                  <li className="p-2 font-extrabold text-xl text-[#634234] uppercase tracking-wide hover:text-[#da5089] cursor-pointer"><Link to="/produtos">Produtos</Link></li>
                  <li className="p-2 font-extrabold text-xl text-[#634234] uppercase tracking-wide hover:text-[#da5089] cursor-pointer"><Link to="/Contato">Contatos</Link></li>
                </ul>
            </nav>
          </div>

          {/* ======================= ÁREA DE POSICIONAMENTO CORRIGIDA ======================= */}
          {/* Esta div agora é posicionada de forma absoluta sobre os outros elementos */}
          <div className="absolute top-0 right-0 h-[100px] flex items-center gap-3 z-20 mr-10">
            
              {/* Ícone-botão para abrir o modal */}
              <button 
                onClick={onAbrirCarrinho} 
                className="bg-transparent border-none hover:bg-pink-300"
              >
                  <IconeCarrinho contagem={contagemItensCarrinho} />
              </button>

              {/* Link de texto com estilo sutil e moderno */}
              <Link 
                to="/delivery" 
                className="p-2 text-lg uppercase tracking-wide font-bold text-[#634234] border-2 border-[#8c4b3d] rounded-xl hover:bg-[#8c4b3d] hover:text-[#da5089] transition-colors duration-300"
              >
                  Delivery
              </Link>
          </div>
          {/* ============================================================================== */}

          {/* O banner continua posicionado de forma absoluta, mas com z-index menor */}
          {ehPaginaInicial && (
            <div className="absolute h-[180px] w-[650px] flex right-0 top-0 z-0">
              <Link to="/" >
                <img className="h-[900px] w-[1100px]" src={BannerHome} alt="Banner"/>
              </Link>
            </div>
          )}
        </header>
    )
}

export default Header;