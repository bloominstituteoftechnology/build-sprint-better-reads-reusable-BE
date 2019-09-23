const router = require('express').Router()
const Users = require('../auth/authModel')
const restricted = require('../utils/restricted')
const cors = require('cors')

router.use(cors())

router.get('/', restricted, (req, res) =>
{
    res.status(200).json({message: 'cors no problem?'})
})

module.exports = router