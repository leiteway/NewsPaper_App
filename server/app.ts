import { DB_PORT, DB_TEST_NAME, NODE_ENV } from "./config";
import connection_db from "./database/connection_db";
import express from "express";
import UserModel from "./models/UserModel";
import NewsModel from "./models/NewsModel";
import NewsRouter from "./routes/NewsRouter"
import AuthRouter from "./routes/AuthRouter";
import UserRouter from "./routes/UserRouter"
import cors from 'cors';

export const app = express();

app.use(cors());
app.use(express.json()); // para que la aplicacion pueda soportar formato json desde postman (Middleware para parsear el cuerpo de las solicitudes en formato JSON)

app.use("/api/news", NewsRouter)

app.use("/api/auth", AuthRouter)

app.use("/api/user", UserRouter)


    try {
    connection_db.authenticate();
    console.log('Connection has been established successfully.🚀🚀🚀')

    UserModel.sync();
    console.log('The UserModel has been synchronized succesfully 👩🏼‍💻')

    NewsModel.sync();
    console.log('The NewsModel has been synchronized succesfully 👩🏼‍💻')
/*     connection_db.sync()
    console.log('All models have been synchronized succesfully 👩🏼‍💻') */

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
let server;
if (NODE_ENV !== 'test') {
server = app.listen(DB_PORT, () =>{
  console.log(`Server up in  http://localhost:${DB_PORT}/api`)
})
};