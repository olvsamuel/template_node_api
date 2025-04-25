import { Router, Request, Response } from 'express';
import redis from '../redis/redisClient';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Rota protegida
router.get('/hello', authMiddleware, async (req: Request, res: Response) => {
    const cachedMessage = await redis.get('message');

    if (cachedMessage) {
        return res.json({ message: cachedMessage, source: 'cache' });
    }

    const message = 'Hello from Redis (fresh)!';

    await redis.set('message', message, 'EX', 60); // TTL de 60 segundos

    res.json({ message, source: 'new' });
});

export default router;
