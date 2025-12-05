const users = require('../data/users')

const createUser = (req, res) => {
    const { userName, nomeCompleto, senha, email} = req.body
    if(userName.length < 6 || nomeCompleto.length < 6) {
        res.status(400).send('o nome de usuário e o nome completo precisam ter pelo menos 6 characteres');
    }
    else if(senha.length < 6) {
        res.status(400).send('a senha precisa ter pelo menos 6 characteres');
    }
    else {
        const newUser = {
            id: users.length + 1, 
            userName: userName, 
            nomeCompleto: nomeCompleto, 
            senha: senha, 
            email: email
        }
        
        users.push(newUser)
        res.status(201).json(newUser)
    }
}

const getAllUsers = (req, res) => {
    res.status(200).json(users)
}

const updateUser = (req, res) => {
    const { userName, nomeCompleto, senha, email} = req.body
    const index = parseInt(req.params.id)
    const userIndex = users.findIndex(user => user.id === index)

    if( userIndex < 0) {
        res.status(400).send('usuário não encontrado')
    }
    else if(userName.length < 6 || nomeCompleto.length < 6) {
        res.status(400).send('o nome de usuário e o nome completo precisam ter pelo menos 6 characteres');
    }
    else if(senha.length < 6) {
        res.status(400).send('a senha precisa ter pelo menos 6 characteres');
    }
    else{
        const updatedUser = {
            id: userIndex, 
            userName: userName, 
            nomeCompleto: nomeCompleto, 
            senha: senha, 
            email: email
        }

        users[userIndex] = updatedUser
        res.status(200).json(updatedUser)
    }
}

const deleteUser = (req, res) => {
    const index = parseInt(req.params.id)
    const userIndex = users.findIndex(user => user.id === index)

    if( userIndex < 0) {
        res.status(400).send('usuário não encontrado')
    }
    else{
        users.splice(userIndex, 1)
        res.status(200).send(`Usuário de id ${userIndex} deletado`)
    }
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}