import UserModel from "../models/UserModel";
import { Response , Request, NextFunction} from "express";
import bcryptjs from "bcryptjs";
import { createToken, verifyToken } from "../utils/jwt";

//Register
export const registerUser = async (req: Request, res: Response) =>{

    try{

      const saltRounds = 10;
      const password = req.body.password; 
    
      const encryptedPassword = await bcryptjs.hash(password, saltRounds);
      req.body.password = encryptedPassword;

      const newUser:any = await UserModel.create(req.body);
      const token = await createToken(newUser);
      console.log(token + 'Hola desde el controlador')
      res.status(201).json({newUser, token})
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

        const token = await createToken(user);

        
        res.status(200).json({message:'Log in successfull', token, user_role: user.role, user_name: user.name})
    }

    catch(error: any){
        res.status(500).json({message: error.message})
    }
}
