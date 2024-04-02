import bcrypt from 'bcryptjs';
import UserModel from "../models/UserModel";
import { Response,Request } from 'express';

//GET ONE
export const getOneUser = async (req: Request, res:Response) =>{

    try{
        const news = await UserModel.findAll(); 
        res.status(200).json(news);
    }

    catch(error: any){
        res.status(500).json({message: error.message})
    }
}

//POST
export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = await UserModel.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json(newUser);
        
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};