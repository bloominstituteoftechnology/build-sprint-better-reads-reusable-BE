const router = require('express').Router()
const Users = require('./userModel')
const Auth = require('../auth/authModel')
const restricted = require('../utils/restricted')
const cors = require('cors')

router.use(cors())

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
        })
})

module.exports = router