const bcryptjs = require('bcryptjs')
const hashCount = require('../../utils/hashCount')

exports.seed = function(knex, Promise)
{
    return knex('users')
    .insert(
        [
            {
                username: "bob",
                password: bcryptjs.hashSync("password", hashCount)
            },
            {
                username: "amy",
                password: bcryptjs.hashSync("123", hashCount)
            }
        ]
    )
}