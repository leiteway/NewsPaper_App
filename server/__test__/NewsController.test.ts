import request from 'supertest';
import { app, server } from '../app';
import connection_db from '../database/connection_db';
import NewsModel from '../models/NewsModel';
import UserModel from '../models/UserModel';
import { newsTest, updateNewsTest, editedData, adminTest } from './test-helpers/helperTest';
import { createToken } from '../utils/jwt';


const api = request(app);

// //Variable para almacenar el token de autenticacióm
// let Token: String;

// beforeAll(async () => {
//     // Envía una solicitud de inicio de sesión para obtener el token
//     const loginResponse = await api
//         .post('/auth/login') //login es tu ruta de inicio de sesión
//         .send({ email: 'correo@example.com', password: 'contraseña' });

//     // Extrae el token de la respuesta y lo almacena en authToken
//     Token = loginResponse.body.token;
// });

describe('Testing News CRUD', () => {

    let userId = "";
    let token = "";
    let newsId = "";

    beforeAll(async () => {
        const user:any = await UserModel.create(
            adminTest
        );
        userId = await user?.get('user_id').toString();
        token = await createToken(user);
    });


    describe('GET', () => {
        test('Get response must be an array and then show 200 status ', async() => {
            const response = await api.get('/api/news').set('Authorization', `Bearer ${token}`);
            expect(Array.isArray(response.body)).toBe(true)
            expect(response.status).toBe(200)
        })    
    });


    describe('POST', () => {
        let dataNew = {}
        beforeEach(() => {
            dataNew = {
                ...newsTest,
                user: userId 
            };
        })

        test("Users create a new post", async()=>{
            const response = await request(app)
            .post('/api/news').set('Authorization', `Bearer ${token}`)
            .send(dataNew);

            expect(response.status).toBe(201);
            expect(response.body.content).toBeDefined();
            expect(response.body.title).toBeDefined();
        })
        afterAll(async () => {
            await NewsModel.destroy({
                where: {
                    title: "Test"
                }
            }); 
        });
    })




});

//Para cerrar el servidor después de las pruebas
afterAll(done => {
    server.close(done);
});