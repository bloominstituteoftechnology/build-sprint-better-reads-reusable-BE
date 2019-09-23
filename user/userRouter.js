const router = require('express').Router()
const Users = require('./authModel')
const restricted = require('../restricted-middleware/restricted')


router.get('/', restricted, (req, res) =>
{
    res.status(200).json({message: 'cors no problem?'})
})