// // metodos funcoes o que faz acoes
// const Usuarios = require("../data/users-constants.js")
// const bcrypt = require('bcryptjs')
 
// const UsuarioController = {
//     login: (req, res) => {
//         const { email, senha } = req.body;
//         // validar se os dados nao estao nulos
//         if(!email || !senha) {
//             return res.status(400).json({erro: 'Email e senha sao obrigatorios.'})
//         }
//         // busca o usuario pelo email
//         const usuario = Usuarios.find(user => user.email === email);
//         // valida se encontrou um usuario pelo email
//         if(!usuario) {
//             return res.status(401).json({ erro: 'Credenciais inválidas'})
//         }
//         // match | comparar senha enviada com a senha armazenada
//         const senhaValida = usuario.senha === senha;
//         if(!senhaValida) {
//             return res.status(401).json({ erro: 'Credenciais invalidas'})
//         }
//         return res.status(201).json(usuario)
//     },
//     register: (req, res) => {
//         const {nome, email, senha} = req.body;
//         if(!email || !senha || !nome) {
//             return res.status(400).json({erro: "preencha os campos obrigatorios"})
//         }
//         const usuario = Usuarios.find(user => user.email === email);
//         if(usuario) {
//             return res.status(400).json({erro: "Este email ja esta sendo utilizado"})
//         }
//         const salt = bcrypt.genSaltSync(10);
//         const senhaHash = bcrypt.hashSync(senha, salt);
//         const novoId = Usuarios.length > 0 ? Usuarios[Usuarios.length - 1].id + 1 : 1
//         const novoUsuario = {
//             id: novoId,
//             nome,
//             email,
//             senha: senhaHash,
//             created_at: new Date(),
//             updated_at: new Date()
//         }
//         Usuarios.push(novoUsuario);
//         return res.status(201).json({
//             mensagem: "Usuario registrado com sucesso",
//             data: novoUsuario
//         })
//     }
// }