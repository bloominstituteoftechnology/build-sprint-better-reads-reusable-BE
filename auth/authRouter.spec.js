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
    // it('gives a token, username, id', async () =>
    // {
    //     const res = await request(server)
    //         .post('/api/auth/register')
    //         .send({username: "testGuy", password: "123"})
    //     expect(res.body.username).toBe("testGuy")
    //     expect(res.body.token).toBeTruthy()
    //     expect(res.body.username).toBe(1)
    // })
})


// expect(restrict).toBeCalled()

// restrict.mockImplementationOnce((req, res, next) =>
// {
//      req.user = {username: "blah"}        
//      next()
// })