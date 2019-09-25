const server = require('../api/server')
const request = require('supertest')
const db = require('../database/dbConfig')
const prepareTestDB = require('../utils/prepareTestDB')
const restricted = require('../utils/restricted')
jest.mock('../utils/restricted.js')


beforeEach(prepareTestDB)
beforeEach(() => restricted.mockClear())

describe('GET /api/user', () =>
{
    it('returns a 200', async () =>
    {
        restricted.mockImplementationOnce((req, res, next) =>
        {
            req.user = {username: "amy"}
            next()
        })
        const res = await request(server)
            .get('/api/user')
            .send({authorization: "ajklwhfvbqurfqob"})
        expect(res.status).toBe(200)
    })
})


// expect(restrict).toBeCalled()

// restrict.mockImplementationOnce((req, res, next) =>
// {
//      req.user = {username: "blah"}        
//      next()
// })