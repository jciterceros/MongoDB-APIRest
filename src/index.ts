import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';

// Conectar ao MongoDB
mongoose.connect(MONGO_URI).then(() => {
    console.log('Conectado ao MongoDB');
}).catch(err => {
    console.error('Erro ao conectar ao MongoDB', err);
});

// Definir o esquema de usuário
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    address: Object
});

const User = mongoose.model('User', userSchema);

// Rota para consumir e salvar dados no MongoDB
app.get('/fetch-users', async (req: Request, res: Response) => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        await User.insertMany(data);
        res.status(200).send('Dados importados para o MongoDB');
    } catch (error) {
        res.status(500).send('Erro ao buscar dados');
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
