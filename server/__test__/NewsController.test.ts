import request from 'supertest';
import { app, server } from '../app';
import connection_db from '../database/connection_db';
import NewsModel from '../models/NewsModel';
import UserModel from '../models/UserModel';
import { newsTest, updateNewsTest, editedTest, adminTest } from '../__test__/helpers/helperTest';
import { createToken } from '../utils/jwt';


const api = request(app);

//Variable para almacenar el token de autenticacióm
let Token: String;

beforeAll(async () => {
    // Envía una solicitud de inicio de sesión para obtener el token
    const loginResponse = await api
        .post('/auth/login') //login es tu ruta de inicio de sesión
        .send({ email: 'correo@example.com', password: 'contraseña' });

    // Extrae el token de la respuesta y lo almacena en authToken
    Token = loginResponse.body.token;
});

describe('Testing News CRUD', () => {

    describe('GET', () => {
        test('Get response must be an array and then show 200 status ', async() => {
            const response = await api.get('/api/news').set('Authorization', `Bearer ${Token}`);
            
            expect(Array.isArray(response.body)).toBe(true)
            expect(response.status).toBe(200)
        })    
    });
});

//Para cerrar el servidor después de las pruebas
afterAll(done => {
    server.close(done);
});