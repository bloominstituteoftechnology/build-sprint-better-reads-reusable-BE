const router = require('express').Router()
const Users = require('./authModel')
const restricted = require('../restricted-middleware/restricted')
const cors = require('cors')

router.use(cors())

router.get('/', restricted, (req, res) =>
{
    res.status(200).json({message: 'cors no problem?'})
})