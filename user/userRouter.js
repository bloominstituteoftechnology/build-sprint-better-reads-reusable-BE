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


/**
 * @api {post} /api/user/description Post Book Description
 * @apiName PostDescription
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
 * @apiParam {json} description A description of the desired book
 * 
 * @apiParamExample {json} Description-Example:
 * {
 *  "description": "A book about mars"
 * }
 * 
 * @apiSuccess (200) {Object} booklist An object with the description, and an array of 5 books
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "description": "a book about something",
 *   "books": [
 *     {
 *       "id": 4,
 *       "title": "Pathfinder 2nd Edition",
 *       "authors": "Logan Bonner, Jason Buhlmahn, Stephen Radney-MacFarland, and Mark Seifter"
 *     },
 *     {
 *       "id": 2,
 *       "title": "Webster's Dictionary",
 *       "authors": "Webster"
 *     },
 *     {
 *       "id": 6,
 *       "title": "Red Planet",
 *       "authors": "Robert Heinlien"
 *     },
 *     {
 *       "id": 5,
 *       "title": "Harry Potter and the Half-Blood Prince",
 *       "authors": "J.K. Rowling"
 *     },
 *     {
 *       "id": 7,
 *       "title": "Calculus",
 *       "authors": "Michael Spivak"
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
 * @apiError (500) {Object} internal-server-error Error in retrieving books
 * 
 * @apiErrorExample 500-Error-Response:
 * HTTP/1.1 500 Internal-Server-Error
 * {
 *  "errorMessage": "Internal Error: Could not search for books"
 * }
 * 
 */
router.post('/description', restricted, (req, res) =>
{
    if(!req.body.description)
    {
        res.status(400).json({ errorMessage: "Missing description" })
    }
    else
    {
        //TODO: replace this with call to DS
        Users.randomBooks()
            .then(response =>
                {
                    res.status(200).json({description: req.body.description, books: response})
                })
            .catch(error =>
                {
                    console.log(error)
                    res.status(500).json({ errorMessage: `Internal Error: Could not search for books` })
                })
    }
})

// router.post('/book', restricted, (req, res) =>
// {
//     if(!req.body.book)
//     {
//         res.status(400).json({ errorMessage: "requires a book" })
//     }
//     else
//     {
//         Auth.findBy({username: req.user.username})
//         .then(response =>
//             {
//                 Users.addBook()
//                 .then(userResponse =>
//                     {
//                         res.status(200).json(userResponse)
//                     })
//                 .catch(err =>
//                     {
//                         res.status(500).json(err)
//                     })
//             })

//     }
// })

module.exports = router