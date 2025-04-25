import express from 'express';
import dotenv from 'dotenv';
import HelloController from './controllers/HelloController';
import AuthController from './controllers/AuthController';

dotenv.config();

const app = express();
const port = process.env.API_PORT || 3000;

app.use(express.json());

// Rotas
app.use('/api', AuthController);
app.use('/api', HelloController);

app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});
