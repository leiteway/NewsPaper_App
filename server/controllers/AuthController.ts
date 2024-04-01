import UserModel from "../models/UserModel";
import { Response , Request } from "express";
import bcryptjs from "bcryptjs"

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

        return res.status(200).send({message:"LOG_IN_SUCCESSFULY"})

    }

    catch(error: any){
        res.status(500).json({message: error.message})
    }
}
