import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

declare global {
    namespace Express {
       interface Request {
         userRole?: number; // Añade la propiedad userRole a la interfaz Request
       }
    }
   }

// RBAC (Role-Based Access Control) o Control de acceso basado en roles.
export const verifyUserRole = async(req:Request, res:Response, next:NextFunction) =>{

        const token = req.headers.authorization?.split(' ')[1];

        if (!token) return res.status(403).json({ message: "No token provided" });
        
        try{
            const payload:any = verifyToken(token);
            const userRole = payload.role;
            req.userRole = userRole; 
            next(); 
        } catch (error){
            return res.status(401).json({message:"Invalid token"})
        }
}