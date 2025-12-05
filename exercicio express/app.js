const express = require('express');
const userRoutes = require('./src/routes/userRoutes')

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API rodando')
})

app.use('/usuarios', userRoutes)

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});