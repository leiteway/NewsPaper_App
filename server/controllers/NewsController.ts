import NewsModel from "../models/NewsModel";
import { Response,Request } from 'express';

//GET NEWS
export const getAllNews = async (req: Request, res:Response) =>{

    try{
        const news = await NewsModel.findAll(); 
        res.status(200).json(news);
      }

    catch(error: any){
        res.status(500).json({message: error.message})
    }
};

// POST (INSERT)
export const addNewPost = async (req: Request, res: Response) =>{

    try{
      const publishNews = await NewsModel.create(req.body);
      res.status(201).json(publishNews)
    }
  
    catch(error: any){
      res.status(500).json({message: error.message})
  }
};