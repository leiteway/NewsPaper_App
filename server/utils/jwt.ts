import jwt from "jsonwebtoken"
import { SECRET_KEY } from "../config";


export const createToken = async (user:any) => {
    
    const token = jwt.sign(
        { email: user.email, role: user.role, id: user.id }, 
        SECRET_KEY,
        { expiresIn: '24h' })
        console.log(token)
        return token;
}

export const verifyToken = async (tokenJwt: any) =>{
    try{
    return jwt.verify(tokenJwt, SECRET_KEY)
    }catch(error){
        return null
    }
    
}