import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

// interface AuthenticatedRequest extends Request {
//     user?: any;
// }

export const auth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
        return res.status(401).send({ error: 'No authentication token provided.' })
    };

    jwt.verify(token, 'secreto', (err) => {
        if(err) {
            return res.status(403).send({ error: 'Invalid Token.'})
        };
    // req.user = decoded;

    next();
    })
}
