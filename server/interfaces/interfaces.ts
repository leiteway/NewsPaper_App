export interface User{
    id_user?: number;
    name: string;
    email: string,
    rol?: string
}
export interface UserAttributes{
    id_user?: number;
    name: string;
    email: string,
    password: string,
    rol?: string
}
export interface SesionData{
    id_user?: number;
    rol?: string;
    token:string; 
}
export interface IdUser{
    id_user?:number;
}
export interface RolUser{
    rol?:string;
}
export type newUser = Omit<UserAttributes, 'id'>

export interface JWT_SECRET {
    JWT_SECRET: string;
}