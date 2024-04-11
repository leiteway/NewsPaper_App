import request from 'supertest';
import { app, server } from '../app';
import connection_db from '../database/connection_db';
import NewsModel from '../models/NewsModel';



const api = request(app);

describe('Testing News CRUD', () => {

    describe('GET', () => {
        test('GET ', async() => {
            const response = await request(app).get('/api/news')
            expect(response.status).toBe(200)
            expect(Array.isArray(response.body)).toBe(true)
        })    
    });
});

//     describe('News creation', () => {
//         let userId: number;
//         let token: string;
//         test('POST /api/auth/register', async () => {
//             const response = await api.post('/api/auth/register').send({
//                 "name": "Test User",
//                 "email": "testuser@gmail.com",
//                 "password": "1234"
//             });
//             expect(response.status).toBe(201);
//             expect(response.body.sesiondata).toHaveProperty('user_id');
//             userId = response.body.sesiondata.user_id; 
//             token = `Bearer ${response.body.sesiondata.token}`; 
//         });
//         test('POST /api/news', async () => {
//             const newsData = {
//                 "title": "Test",
//                 "content": "test news",
//                 "date": new Date().toISOString(),
//                 "image": "www.google.es",
//                 "user_id": userId
//             };
    
//             const response = await api.post('/api/news').set('Authorization', token).send(newsData);
//             expect(response.status).toBe(201);
//             try {
//                 const news:any = await NewsModel.findOne({ where: { title: newsData.title } });
//                 expect(news).not.toBeNull();
//                 expect(news.get('title')).toBe(newsData.title);
//                 expect(news.get('content')).toBe(newsData.content);
//             } catch (error) {
//                 console.error('No se encuentra la noticia:', error);
//             }
//         });
//     });

//     afterAll(async () => {
//         await connection_db.sync({ force: true });
//         server.close();
//     })
// });