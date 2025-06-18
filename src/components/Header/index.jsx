import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../../utils/storage";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState (false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navigate = useNavigate();
    return(
        <header className="h-[100px] w-full flex items-center">
          <div className="flex-grow">
          <div className="h-full w-full flex justify-center items-center">
            <img src={process.env.PUBLIC_URL + 'img/logovo.png'} className="w-[75px] h-[75px] rounded-full"/>
            <h1 className="text-2xl uppercase font-sofia text-[#634234]">Memórias de Vó</h1>
          </div>
          <nav className="h-full flex-1 flex justify-between items-center">
            <ul className="flex h-full items-center gap-[10px]">
              <li className="p-2 font-extrabold text-xl text-[#634234] uppercase tracking-wide hover:text-[#da5089] cursor-pointer"><Link to="/"></Link>Início</li>
              <li className="p-2 font-extrabold text-xl text-[#634234] uppercase tracking-wide hover:text-[#da5089] cursor-pointer"><Link to="/sobre"></Link>Sobre</li>
              <li className="p-2 font-extrabold text-xl text-[#634234] uppercase tracking-wide hover:text-[#da5089] cursor-pointer"><Link to="/produtos"></Link>Produtos</li>
              <li className="p-2 font-extrabold text-xl text-[#634234] uppercase tracking-wide hover:text-[#da5089] cursor-pointer"><Link to="/Contatos"></Link>Contatos</li>
            </ul>
                      <div className="flex items-center justify-center w-40 h-[100px] gap-[10px]">
            <p className="text-lg border-2 border-[#8c4b3d] rounded-full"><Link to="/login"></Link>Login</p>
            <p className="text-lg border-2 border-[#8c4b3d] rounded-full"><Link to="/delivery"></Link>Delivery</p>
          </div>
          <div className="h-[180px] w-[650px] flex">
            <Link to="/" >
            <img className=" " src={process.env.PUBLIC_URL + 'img/bannerteste.png'}/>
            </Link>
          </div>
            { isAuthenticated () &&
                  <div className="flex justify-center items-center">
                    <button className="bg-color-primary text-white font-bold p-3 rounded-[8px]" onClick={() => {logout(); navigate('/login')}}>Logout</button>
                  </div>
                }
          </nav>
            {/* menu lateral mobile */}
            <div
        className={`w-[33%] h-screen absolute top-0 left-0 bg-white opacity-90 flex flex-col justify-center items-center space-y-6 md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <button
          className="absolute top-0 right-0 m-8 focus:outline-none" onClick={toggleMenu}
         >
          <svg
            className="h-6 w-6 fill-current text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        <ul className="space-y-6 text-xl text-dark-gray-primary font-raleway">
          <li className="border-b-4 border-gray-70 hover:border-color-third"><Link to="/Quemsomos">Quem somos</Link></li>
          <li className="border-b-4 border-gray-70 hover:border-color-third"><Link to="/Solucoes">Soluções</Link></li>
          <li className="border-b-4 border-gray-70 hover:border-color-third"><Link to="/Contato">Contato</Link></li>
          <li className="border-b-4 border-gray-70 hover:border-color-third"><Link to="/Suporte">Suporte</Link></li>
        </ul>
      </div>
      </div>
    </header>
    )
}

export default Header;