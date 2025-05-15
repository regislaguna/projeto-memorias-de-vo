const Header = () => {

    return(
        <header className="flex flex-col w-full h-[100px] bg-transparent absolute top-0 z-10">
            <nav className="h-full flex flex-col px-10 mx-auto max-w-[1281px] w-full">
                <div className="Logo-Area flex-1 flex items-center justify-center px-10">
                    <h1 className="text-color-primary font-bold uppercase tracking-[6px]">
                        StackTI
                    </h1>
                </div>
                <div className="Menu-Area flex-1 w-full flex items-center">
                    <ul className="gap-14 justify-center w-full">
                        <li className="border-b-4 border-gray-70 hover:border-color-third">
                            <a href="#quem-somos">Quem somos</a>
                        </li>
                        <li className="border-b-4 border-gray-70 hover:border-color-third">
                            <a href="#solucoes">Soluções</a>
                        </li>
                        <li className="border-b-4 border-gray-70 hover:border-color-third">
                            <a href="#contato">Contato</a>
                        </li>
                        <li className="border-b-4 border-gray-70 hover:border-color-third">
                            <a href="#suporte">Suporte</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;