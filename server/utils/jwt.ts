import jwt from "jsonwebtoken"
import { SECRET_KEY } from "../config";


export const createToken = (user:any) => {
    const data =  { 
        role: user.role, 
        id: user.id 
    };
    const token = jwt.sign(
        data, 
        SECRET_KEY,
        { expiresIn: '2h' })
        console.log(token)
        return token;
}

export const verifyToken = (tokenJwt: any) =>{
    try{
    return jwt.verify(tokenJwt, SECRET_KEY)
    }catch(error){
        return null
    }
    
}