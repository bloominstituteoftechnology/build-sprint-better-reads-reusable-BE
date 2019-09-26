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
            .send()
        expect(res.status).toBe(200)
    })
    it('has type json', async () =>
    {
        restricted.mockImplementationOnce((req, res, next) =>
        {
            req.user = {username: "amy"}
            next()
        })
        const res = await request(server)
            .get('/api/user')
            .send()
        expect(res.body).toHaveProperty("username")
    })
})

describe('Post /api/description', () =>
{
    it('returns a description and a book list, with a 200 status', async () =>
    {
        restricted.mockImplementationOnce((req, res, next) =>
        {
            req.user = {username: "amy"}
            next()
        })
        const res = await request(server)
            .post('/api/user/description')
            .send({"description": "a book of blah blah"})
        expect(res.body).toHaveProperty("description")
        expect(res.body).toHaveProperty("books")
        expect(res.body.books).toHaveLength(5)
        expect(res.status).toBe(200)

    })
})

describe('Post /api/book', () =>
{
    it('returns a book id, with a 200 status', async () =>
    {
        const book = 
        {
            title: "testBook",
            authors: "testAuthor 1, testAuthor2"
        }
        let [id] = await db('books').insert(book)
        restricted.mockImplementationOnce((req, res, next) =>
        {
            req.user = {username: "amy"}
            next()
        })
        const res = await request(server)
            .post('/api/user/book')
            .send({"bookId": id})
        expect(res.body).toBe(id)
        expect(res.status).toBe(200)

    })
})

// expect(restrict).toBeCalled()

// restrict.mockImplementationOnce((req, res, next) =>
// {
//      req.user = {username: "blah"}        
//      next()
// })