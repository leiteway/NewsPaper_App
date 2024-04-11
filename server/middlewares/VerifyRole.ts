
import { Response , Request, NextFunction} from "express";
import { verifyToken } from "../utils/jwt";

// RBAC (Role-Based Access Control) o Control de acceso basado en roles.

export const verifyUserRole = (role: string[]) => async(req:Request, res:Response, next:NextFunction) =>{
    const authToken = req.headers.authorization?.split(' ')[1];    
    try {
        const dataToken: any = verifyToken(authToken);
        const roleUser = dataToken.role;
        console.log(roleUser)
        const rolesByUser = roleUser;
        const checkValueRole = role.some((roleSingle) => rolesByUser.includes(roleSingle))
    if(!checkValueRole){
        return res.status(401).send({ error: 'No tienes permisos para esta accion' });
    }
    } catch (error) {
        return res.status(401).send({ error: 'Error en el middleware' });
    }
    next();
}
