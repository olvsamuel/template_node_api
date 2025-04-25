import { Router, Request, Response } from 'express';
import { generateToken } from '../utils/jwt';

const router = Router();

// Simula um "login"
router.post('/login', (req: Request, res: Response) => {
    const { username, password } = req.body;

    // Exemplo simples (em produção, use banco de dados e hashing)
    if (username === 'admin' && password === 'admin') {
        const token = generateToken({ username });
        return res.json({ token });
    }

    return res.status(401).json({ error: 'Invalid credentials' });
});

export default router;
