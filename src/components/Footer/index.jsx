import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer className="flex justify-center bg-color-primary hover:bg-color-third">
             <Link to="/" className="text-white"> Voltar para Home </Link>

        </footer>
    )

}

export default Footer;