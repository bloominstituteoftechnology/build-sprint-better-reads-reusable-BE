const server = require('../api/server')
const request = require('supertest')
const db = require('../database/dbConfig')
const prepareTestDB = require('../utils/prepareTestDB')


beforeEach(prepareTestDB)

describe('post /register', () => {
    it('returns a 201', async () =>
    {
        const res = await request(server)
            .post('/api/auth/register')
            .send({"username": "testing", "password": "123"})
        expect(res.status).toBe(201)
    })
    it('returns a token, username, id', async () =>
    {
        const res = await request(server)
            .post('/api/auth/register')
            .send({"username": "testing", "password": "123"})
        expect(res.body).toHaveProperty("token")
        expect(res.body).toHaveProperty("username")
        expect(res.body).toHaveProperty("id")
    })
})

describe('post /login', () => {
    it('returns a 200', async () =>
    {
        const res = await request(server)
            .post('/api/auth/login')
            .send({"username": "amy", "password": "123"})
        expect(res.status).toBe(200)
    })
    it('returns a token', async () =>
    {
        const res = await request(server)
            .post('/api/auth/login')
            .send({"username": "amy", "password": "123"})
        expect(res.body).toHaveProperty("token")
    })
})
