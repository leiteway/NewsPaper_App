import UserModel from "../models/UserModel";
import { Response , Request, NextFunction } from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

//Register
export const registerUser = async (req: Request, res: Response) =>{

    try{

      const saltRounds = 10;
      const password = req.body.password; 
    
      const encryptedPassword = await bcryptjs.hash(password, saltRounds);
      req.body.password = encryptedPassword;

      const newUser = await UserModel.create(req.body);
      res.status(201).json(newUser)
    }
  
    catch(error: any){
      res.status(500).json({message: error.message})
  }
  }

//Login

export const loginUser = async(req:Request, res:Response) => {
    try{
        const user:any = await UserModel.findOne( {where: {email: req.body.email}});

        if(!user){
            return res.status(404).send({error: "USER_NOT_FOUND"})
        }

        const checkPassword = await bcryptjs.compare(req.body.password, user.password);

        if(!checkPassword){
            return res.status(401).send({error: "PASSWORD_INVALID"})
        }

        const token = jwt.sign({email: user.email, role: user.role}, "secret", {expiresIn: '24h'} );
        
        res.status(200).json({message:'Log in successfull', token})
    }

    catch(error: any){
        res.status(500).json({message: error.message})
    }
}

// RBAC (Role-Based Access Control) o Control de acceso basado en roles.
interface DecodedToken extends jwt.JwtPayload {
    role: string;
   }


export const verifyUserRole = (role: string) => async(req:Request, res:Response, next:NextFunction) =>{
    try {
        const authorization: string = req.headers.authorization ?? '';

        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, "secret") as DecodedToken;
        if (decoded.role === 'admin') {
            res.status(200).json({ message: "Access allowed as an ADMIN" });
            next();
        } else {
            res.status(403).json({ message: "You do not have permission to perfom this action" });
        }
    } catch (error) {
        res.status(401).json({ message: "Token inválido" });
    }
}

/* export const verifyUserRole = (role: string) => async(req:Request, res:Response, next:NextFunction) =>{
    try {
        
        const user:any = await UserModel.findOne( {where: {role: req.body.role}});
        if (user === 'admin') {
            res.status(200).json({ message: "Access allowed as an ADMIN" });
            next();
        } else {
            res.status(403).json({ message: "You do not have permission to perfom this action" });
        }
    } catch (error) {
        res.status(401).json({ message: "Token inválido" });
    }
} */
