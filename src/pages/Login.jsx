import { useState } from "react";

function Login () {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    console.log(email)
    console.log(senha)
    return (       
        <div className="flex-grow flex shadow m-6 rounded-[12px] bg-slate-200 justify-center items-center">
            <div className="flex flex-col min-w-[398px] gap-3 ">
                <h3 className="text-center">Faça Login na sua conta</h3>
                <div className="field flex flex-col w-[100%]">
                    <span>E-mail</span>
                    <input className="rounded-[8px] min-h-[40px] p-2" placeholder="informe seu e-mail" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field flex flex-col w-[100%]">
                    <span>Senha</span>
                    <input  className="rounded-[8px] min-h-[40px] p-2" placeholder="informe sua senha" type="password" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>
                <span>Esqueceu a senha</span>
                <button className="text-white hover:bg-color-third bg-color-primary uppercase font-bold rounded-[8px] min-h-[40px] p-2">Entrar</button>
            </div>
        
        </div>
    )
}

export default Login;
