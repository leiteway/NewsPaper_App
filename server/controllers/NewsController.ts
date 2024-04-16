import { verifyToken } from "../utils/jwt";
import NewsModel from "../models/NewsModel";
import { Response,Request } from 'express';

//GET NEWS
export const getAllNews = async (req: Request, res:Response) =>{

    try{
        const news = await NewsModel.findAll(); 
        res.status(200).json(news);
      }

    catch(error){
      return res.status(500).send({ error: 'Internal Server Error' + error });
    }
}

//GET ONE POST
export const getOnePost = async (req: Request, res: Response) => {
  const newsId  = req.params.id;

  try{
    const onePost = await NewsModel.findOne({ where: {id: newsId} });
    res.status(200).json(onePost);
  }

  catch(error){
    res.status(500).json({message: 'Error fetching your post'})
  }
}

// POST

export const addNewPost = async (req: Request, res: Response) =>{

    try{
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      const tokenData: any = verifyToken(token)
      const userId = tokenData.id
      const newPost = {...req.body, user_id: userId}
      const publishNews = await NewsModel.create(newPost);
      res.status(201).json(publishNews)
    }
  
    catch(error: any){
      res.status(500).json({message: error.message})
  }
  }

  //UPDATE  (PUT)
export const editPost = async (req: Request, res: Response) =>{

  const newsId  = req.params.id;

  try{
    await NewsModel.update(req.body, {where: {id: newsId} }); 

    const editedPost = await NewsModel.findOne({ where: { id: newsId } });  
    res.status(200).json({ message: `Sculpture with ID ${newsId} updated successfully: `, news: editedPost })  
  }

  catch(error){
    res.status(500).json({message: 'Your post could not be updated'})
  }
}

//DELETE
export const deletePost = async (req: Request, res: Response) => {
  const newsId  = req.params.id; 

  try {
    const deletedPost = await NewsModel.destroy({ where: { id: newsId } });
      
        res.status(201).json({ message: `Post with ID ${newsId} deleted successfully`, news: deletedPost });

  } 
  
  catch (error) {
    res.status(500).json({ message: 'Error trying to delete the post', error });
  }
};
