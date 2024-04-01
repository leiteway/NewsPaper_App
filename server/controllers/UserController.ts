import UserModel from "../models/UserModel";
import { Response,Request } from 'express';

//GET
export const getOneUser = async (req: Request, res:Response) =>{

    try{
        const news = await UserModel.findAll(); 
        res.status(200).json(news);
    }

    catch(error: any){
        res.status(500).json({message: error.message})
    }
}