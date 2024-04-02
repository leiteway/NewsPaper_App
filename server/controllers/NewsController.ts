import NewsModel from "../models/NewsModel";
import { Response,Request } from 'express';

//GET
export const getAllPosts = async (req: Request, res:Response) =>{

    try{
        const news = await NewsModel.findAll(); 
        res.status(200).json(news);
      }

    catch(error: any){
        res.status(500).json({message: error.message})
    }
};

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

//DELETE
export const deletePost = async (req: Request, res: Response) => {
  
  const postsId  = req.params.id; 

  try {
    const deletedPost = await NewsModel.destroy({ where: { id: postsId } });
      
    res.status(201).json({ message: `Post with ID ${postsId} deleted successfully`, news: deletedPost });
  } 
  
  catch (error) {
    res.status(500).json({ message: 'Error trying to delete the post', error });
  }
};

//UPDATE
export const editPost = async (req: Request, res: Response) =>{

  const postsId  = req.params.id;

  try{
    await NewsModel.update(req.body, {where: {id: postsId} }); 

    const editedPost = await NewsModel.findOne({ where: { id: postsId } });  
    
    res.status(200).json({ message: `Your post with ID ${postsId} edited successfully: `, news: editedPost })  
  }

  catch(error){
    res.status(500).json({message: 'Your post could not be edited'})
  }
}