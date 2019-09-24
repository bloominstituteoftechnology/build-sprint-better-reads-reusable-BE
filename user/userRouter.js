const router = require('express').Router()
const Users = require('./userModel')
const Auth = require('../auth/authModel')
const restricted = require('../utils/restricted')
const cors = require('cors')

router.use(cors())

/**
 * @api {get} /api/user Get User
 * @apiName GetUser
 * @apiGroup User
 * 
 * @apiHeader {json} authorization The json web token, sent to the server
 * 
 * @apiHeaderExample {json} Header-Example:
 * {
 *  "Content-Type": "application/json",
    "authorization": "sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg"
 * }
 * 
 * @apiSuccess (200) {Object} user An object depicting the user
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "username": "bob",
 *   "id": 1,
 *   "books": [
 *     {
 *       "title": "Webster's Dictionary",
 *       "authors": "Webster"
 *     },
 *     {
 *       "title": "Javascript Data Structures and Algorithms",
 *       "authors": "Sammie Bae"
 *     }
 *   ],
 *   "descriptions": [
 *     {
 *       "description": "A book to tell you the meanings of words",
 *       "id": 2,
 *       "books": [
 *         {
 *           "title": "Webster's Dictionary"
 *         },
 *         {
 *           "title": "Pathfinder 2nd Edition"
 *         }
 *       ]
 *     },
 *     {
 *       "description": "A book about some kind of Javascript structures or methods for problem solving",
 *       "id": 3,
 *       "books": [
 *         {
 *           "title": "Javascript Data Structures and Algorithms"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * 
 * @apiError (400) {Object} bad-request-error The authorization header is absent
 * 
 * @apiErrorExample 400-Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *  "errorMessage": "No credentials provided"
 * }
 * 
 * @apiError (401) {Object} unauthorized-error The user sent an invalid token
 * 
 * @apiErrorExample 401-Error-Response:
 * HTTP/1.1 401 Unauthorized
 * {
 *  "errorMessage": "Invalid Credentials"
 * }
 * @apiError (500) {Object} internal-server-error Error in retrieving user info
 * 
 * @apiErrorExample 500-Error-Response:
 * HTTP/1.1 500 Internal-Server-Error
 * {
 *  "errorMessage": "Not sure until it comes up. Would be db error"
 * }
 * 
 */

router.get('/', restricted, (req, res) =>
{
    Auth.findBy({username: req.user.username})
    .then(response =>
        {
            Users.getUserWithBooksAndDesc(response[0].id)
            .then(userResponse =>
                {
                    res.status(200).json(userResponse)
                })
            .catch(err =>
                {
                    res.status(500).json(err)
                })
        })
})

module.exports = router