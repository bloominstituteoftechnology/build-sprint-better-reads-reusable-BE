const router = require('express').Router()
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('./authModel')
const cors = require('cors')

router.use(cors())

/**
 * @api {post} /api/auth/register Post User Registration
 * @apiName PostUser
 * @apiGroup Authentication
 * 
 * @apiParam {String} username The username of the new user
 * @apiParam {String} password The password of the new user
 * 
 * @apiSuccess (201) {Object} user An object with the user id and username
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 201 OK
 * {
 *  "id": 8,
 *  "username": "doctest"
 * }
 * 
 * @apiError (400) {Object} bad-request-error The username or password is missing.
 * 
 * @apiErrorExample 400-Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *  "errorMessage": "Missing username or password"
 * }
 * 
 * @apiError (409) {Object} duplicate-username-error The username is already registered
 * 
 * @apiErrorExample 409-Error-Response:
 * HTTP/1.1 409 Conflict
 * {
 *  "errorMessage": "That username is already registered"
 * }
 * @apiError (500) {Object} internal-server-error The user couldn't be registered
 * 
 * @apiErrorExample 500-Error-Response:
 * HTTP/1.1 500 Internal-Server-Error
 * {
 *  "errorMessage": "Internal Error: Could not register user"
 * }
 * 
 */

router.post('/register', (req, res) =>
{
    if(!req.body.username || !req.body.password)
    {
        res.status(400).json({ errorMessage: "Missing username or password" })
    }
    // else if(Users.findBy({username: req.body.username}))
    // {
    //     console.log(Users.findBy({username: req.body.username}).username)
    //     res.status(409).json({ errorMessage: "That username is already registered" })
    // }
    else
    {
        let {username, password} = req.body
        //TODO: inform FE if username is taken
        bcryptjs.genSalt(14, function(err, salt)
        {
            bcryptjs.hash(password, salt, function(err, hash)
            {
                Users.add({username, password: hash})
                    .then(response =>
                        {
                            Users.findBy({ username: response.username }).first()
                            .then(user =>
                                {
                                    console.log(user)
                                    bcryptjs.compare(password, user.password, function(err, response)
                                    {
                                        if(response)
                                        {
                                            const token = generateToken(user)
                                            res.status(201).json({ id: user.id, username: user.username, token: token })
                                        }
                                        else res.status(401).json({ errorMessage: 'Invalid Credentials' })
                                    })
                                })
                        })
                    .catch(error =>
                        {
                            res.status(500).json({ errorMessage: `Internal Error: Could not register user` })
                            // res.status(500).json(error)
                        })
            })
        })
    }
})

/**
 * @api {post} /api/auth/login Post User Login
 * @apiName LoginUser
 * @apiGroup Authentication
 * 
 * @apiParam {String} username The username of the registered user
 * @apiParam {String} password The password of the registered user
 * 
 * @apiSuccess (200) {String} token A json web token for the user
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *  "token": "cjhqw8c73ghiob0387fghf23874gf8gf0874gfg804gf08gf"
 * }
 * 
 * @apiError (400) {Object} bad-request-error The username or password is missing.
 * 
 * @apiErrorExample 400-Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *  "errorMessage": "Missing username or password"
 * }
 * 
 * @apiError (401) {Object} bad-credentials-error The username or password are not valid
 * 
 * @apiErrorExample 401-Error-Response:
 * HTTP/1.1 401 Unauthorized
 * {
 *  "errorMessage": "Invalid Credentials"
 * }
 * @apiError (500) {Object} internal-server-error The user couldn't be logged in
 * 
 * @apiErrorExample 500-Error-Response:
 * HTTP/1.1 500 Internal-Server-Error
 * {
 *  "errorMessage": "Internal Error: Could not login user"
 * }
 * 
 */

router.post('/login', (req, res) =>
{
    if(!req.body.username || !req.body.password)
    {
        res.status(400).json({ errorMessage: "Missing username or password" })
    }
    else
    {
        let {username, password} = req.body
        Users.findBy({ username })
            .first()
            .then(user =>
                {
                    if(user)
                    {
                        bcryptjs.compare(password, user.password, function(err, response)
                        {
                            if(response)
                            {
                                const token = generateToken(user)
                                res.status(200).json({ token })
                            }
                            else res.status(401).json({ errorMessage: 'Invalid Credentials' })
                        })
                    }
                    else res.status(401).json({ errorMessage: 'Invalid Credentials' })
                })
            .catch(error =>
                {
                    res.status(500).json({ errorMessage: 'Internal Error: Could not login' })
                })
    }
})

function generateToken(user)
{
    const payload = { username: user.username }
    const secret = require('../config/secret').jwtSecret
    const options = { expiresIn: '1d' }

    return jwt.sign(payload, secret, options)
}

module.exports = router