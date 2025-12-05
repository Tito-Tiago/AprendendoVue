const express = require('express');

const app = express();

app.use(express.json());

let users = [
    { id: 1, userName: 'TiagoT', nomeCompleto: 'Tiago Tito', senha: '123456', email: 'tiago@email.com' }
];

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.post('/usuarios', (req, res) => {
    const { userName, nomeCompleto, senha, email} = req.body
    if(userName.length < 6 || nomeCompleto.length < 6) {
        res.status(400).send('o nome de usuário e o nome completo precisam ter pelo menos 6 characteres');
    }
    else if(senha.length < 6) {
        res.status(400).send('a senha precisa ter pelo menos 6 characteres');
    }
    else {
        const newUser = {
            id: ++users.length, 
            userName: userName, 
            nomeCompleto: nomeCompleto, 
            senha: senha, 
            email: email
        }
        
        users.push(newUser)
        res.status(201).json(newUser)
    }
});

app.get('/usuarios', (req, res) => {

})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});