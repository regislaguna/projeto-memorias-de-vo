import { useMemo } from "react";
import Carousel from "../components/Carousel";

function Solucoes(){
    const marcas = useMemo(() => [
        'Microsoft',
        'Apple',
        'Google',
        'Android',
        'Furukawa',
        'Samsung',
        'LG',
        'Ubiquiti',
        'Cisco'
    ],[])

    return(
        <div className="mt-[110px]">
            <h1>Solucoes</h1>
            <p>Esta e pagina solucoes</p>
            <Carousel dados={marcas} />
        </div>
    )
}

export default Solucoes;