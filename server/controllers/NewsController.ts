import NewsModel from "../models/NewsModel";

//GET NEWS
export const getAllNews = async (request:Request, response: Number) =>{

    try{
        const news = await NewsModel.findAll(); 
        response.status(200).json(news);
      }
      
    catch(error){
        response.status(500).json({message: error.message})
    }
}