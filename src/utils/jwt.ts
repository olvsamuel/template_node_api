import jwt from 'jsonwebtoken';

// Garantindo que a chave secreta seja configurada corretamente
const secret: string = process.env.JWT_SECRET || '';
if (!secret) {
    throw new Error('JWT_SECRET não está definido');
}

// Tipagem para o payload
interface TokenPayload {
    username: string;
}

export function generateToken(payload: TokenPayload, expiresIn = '1h') {
    // Adicionando um tipo correto para a assinatura
    return jwt.sign(payload, secret, { expiresIn });
}

export function verifyToken(token: string) {
    try {
        return jwt.verify(token, secret);
    } catch (err) {
        throw new Error('Token inválido ou expirado');
    }
}
