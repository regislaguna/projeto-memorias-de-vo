import { Link } from "react-router-dom";
// ICONES E FIGURAS
import { FaSpotify, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


//import '../Footer/index.css'

function Footer() {
    return (
        /*
          AQUI ESTÁ A MUDANÇA:
          - Adicionamos 'border-t' para criar uma borda apenas no topo.
          - 'border-gray-200' define uma cor de linha cinza bem clara e sutil.
        */
        // A linha separadora já está aqui: 'border-t' (borda no topo)
        <footer className="flex w-full color-fundo text-center font-lato text-gray-800 border-t border-gray-200">
            <div className="container mx-auto px-4 py-6 flex flex-col items-center">

                <div className="mb-4">
                    <h3 className="justify-center text-2xl mb-2 font-bold text-[#634234] text-center">
                        Mais delícias da Vó
                    </h3>
                    <p className="text-gray-700">
                        Peça nossos bolos, tortas e quitutes irresistíveis pelo delivery ❤️
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 justify-center items-center mt-4">
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Spotify"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#634234] text-white hover:bg-[#1DB954] transition-colors duration-300">
                        <FaSpotify className="text-xl" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#634234] text-white hover:bg-[#1877F2] transition-colors duration-300">
                        <FaFacebook className="text-xl" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#634234] text-white hover:bg-gradient-to-br from-[#405DE6] via-[#C13584] to-[#FD1D1D] transition-all duration-300">
                        <FaInstagram className="text-xl" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#634234] text-white hover:bg-[#FF0000] transition-colors duration-300">
                        <FaYoutube className="text-xl" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#634234] text-white hover:bg-black transition-colors duration-300">
                        <FaSquareXTwitter className="text-xl" />
                    </a>
                </div>
                
                <div className="mt-5 pt-4 border-t border-gray-200 w-full max-w-screen-md">
                    <p className="text-sm text-gray-500">
                        &copy; 2025 Memórias de Vó Coffee Company. Todos os direitos reservados.
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer;