"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = require("../../config");
/* declare global {
 namespace Express {
    interface Request {
      user: {
        id: string;
        role: string;
        email: string;
      };
    }
 }
} */
var verifyToken = function (req, res, next) {
    var authHeader = req.headers['authorization'];
    var token = authHeader && authHeader.split(' ')[1];
    // token= request.headers.authorization.split(' ').pop(); es otra forma de escribir la linea 11
    // utilizando .pop() un metodo de los arrays
    if (!token) {
        return res.status(401).send({ error: 'No authentication token provided.' });
    }
    ;
    jsonwebtoken_1.default.verify(token, config_1.SECRET_KEY, function (err) {
        if (err) {
            return res.status(403).send({ error: 'Invalid Token.' });
        }
        ;
        next();
    });
};
exports.verifyToken = verifyToken;
/* export const verifyRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
      if (req.user.role === 'admin') {
          res.status(200).json({ message: "Access allowed as an ADMIN" });
          next();
      } else {
          return res.status(403).send({ error: 'Forbidden: You do not have the necessary role.' });
      }
  };
}; */
/* const verifyToken = (req: Request, res: Response, next: NextFunction) => {
 const token = req.headers['authorization']?.split(' ')[1];

 if (!token) {
    return res.status(401).json({ message: 'No token provided' });
 }

 jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      if (err instanceof TokenExpiredError) {
        return res.status(401).json({ message: 'Token expirado' });
      }
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }

    // Asignar el ID del usuario al objeto de solicitud
    req.userId = decoded.id;
    next();
 });
};

export default verifyToken;

 */ 
