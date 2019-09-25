const server = require('../api/server')
const request = require('supertest')
const db = require('../database/dbConfig')
const prepareTestDB = require('../utils/prepareTestDB')
const restricted = require('../utils/restricted')
jest.mock('../utils/restricted.js')


beforeEach(prepareTestDB)
beforeEach(() => restricted.mockClear())

describe('authRouter', () => {
    it('post /register', async () =>
    {
        const res = await request(server).post('/api/auth/register').send({username: "testing", password: "123"})
        expect(res.status).toBe(201)
        console.log(res.body)
    })
})


// expect(restrict).toBeCalled()

// restrict.mockImplementationOnce((req, res, next) =>
// {
//      req.user = {username: "blah"}        
//      next()
// })