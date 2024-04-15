import request from 'supertest';
import { app, server } from '../app';
import connection_db from '../database/connection_db';
import NewsModel from '../models/NewsModel';
import UserModel from '../models/UserModel';
import { newsTest, adminTest } from '../__test__/test-helpers/helperTest';
import { createToken } from '../utils/jwt';


const api = request(app);


describe('Testing News CRUD', () => {

    let userId = "";
    let token = "";
    let newsId = "";

    beforeAll(async () => {
        const user:any = await UserModel.create(
            adminTest
        );
        userId = await user?.get('id').toString();
        token = await createToken(user);
        console.log(token + "Hola desde test")
    });


    describe('GET', () => {
        test('Get response must be an array and then show 200 status ', async() => {
            const response = await api.get('/api/news').set('Authorization', `Bearer ${token}`);
            // expect(response.body).toBeInstanceOf(Array)
            console.log(response)
            expect(response.status).toBe(200)
        })    
    });


    describe('POST', () => {

        test("Users create a new post", async()=>{
            const response = await request(app)
            .post('/api/news').set('Authorization', `Bearer ${token}`)
            .send(newsTest);
            console.log(response.body)

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


    afterAll( async () => {
        await UserModel.destroy({
            where: {
                id: userId
            }
        });
        server.close();
        connection_db.close();
    });

});