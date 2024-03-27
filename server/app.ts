import { DB_PORT } from "./config";
import connection_db from "./database/connection_db";
import express from "express";


export const app = express();

app.use(express.json()); // para que la aplicacion pueda soportar formato json desde postman (Middleware para parsear el cuerpo de las solicitudes en formato JSON)


    try {
    connection_db.authenticate();
    console.log('Connection has been established successfully.🚀🚀🚀');

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


export const server = app.listen(DB_PORT, () =>{
  console.log(`Server up in  http://localhost:${DB_PORT}/api`)
});
