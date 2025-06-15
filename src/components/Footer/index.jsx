import { Link } from "react-router-dom";
//import '../Footer/index.css'

function Footer() {
    return(
        <footer className="w-screen p-2.5 bg-[#fff8f6] text-center font-lato">
            <div>
                <h3 className="text-[1.8rem] mb-4 text-[#634234] font-sans">Mais delícias da Vó</h3>
                <p>Peça nossos bolos, tortas e quitutes irresistíveis pelo delivery❤️</p>
            </div>
            <div className="p-2.5">
            <p className="text-base text-[#5e4034] mb-2"> Rua da Palmirinha, n 80, Jardim Enaldinho, CEP: 19035-963</p>
            </div>
            <div className="flex flex-wrap gap-[15px] justify-center items-center p-5">
            <Link to="#" className="social-link hover:bg-[#1DB954]" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                <i className="fab fa-spotify"></i>
            </Link>
            <Link to="#" className="social-link hover:bg-[#1877F2]" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
            </Link>
            <Link to="#" className="social-link hover:bg-gradient-to-br from-[#405DE6] via-[#C13584] to-[#FD1D1D]" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
             <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link to="#" className="social-link hover:bg-[#FF0000]" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
            </Link>
             <Link to="#" className="social-link hover:bg-black" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                 <i className="fab fa-square-x-twitter"></i>
            </Link>
            </div>
            <div className="mt-2.5">
                <p className="text-sm text-gray-600">&copy; 2025 Memórias de Vó Coffee Company.
                Todos os direitos reservados. &circledR;</p></div>
        </footer>
    )

}

export default Footer;